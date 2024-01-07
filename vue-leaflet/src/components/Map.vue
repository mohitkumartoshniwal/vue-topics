<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
import leaflet from "leaflet";
import { onMounted, watchEffect } from "vue";
import { useGeolocation } from "@vueuse/core";

import { userMarker, nearbyMarkers } from "@/stores/mapStore";

const { coords } = useGeolocation();

let map: leaflet.Map;
let userGeoMarker: leaflet.Marker;

onMounted(() => {
  map = leaflet
    .map("map")
    .setView([userMarker.value.latitude, userMarker.value.longitude], 13);

  leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);

  nearbyMarkers.value.forEach(({ latitude, longitude }) => {
    leaflet
      .marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `Saved Marker at (<strong>${latitude.toFixed(2)},${longitude.toFixed(
          2
        )}</strong>)`
      );
  });

  map.addEventListener("click", (e) => {
    const { lat: latitude, lng: longitude } = e.latlng;

    leaflet
      .marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `Saved Marker at (<strong>${latitude.toFixed(2)},${longitude.toFixed(
          2
        )}</strong>)`
      );

    nearbyMarkers.value.push({ latitude, longitude });
  });
});

watchEffect(() => {
  if (
    coords.value.latitude !== Number.POSITIVE_INFINITY &&
    coords.value.longitude !== Number.POSITIVE_INFINITY
  ) {
    userMarker.value.latitude = coords.value.latitude;
    userMarker.value.longitude = coords.value.longitude;

    if (userGeoMarker) {
      map.removeLayer(userGeoMarker);
    }

    userGeoMarker = leaflet
      .marker([userMarker.value.latitude, userMarker.value.longitude])
      .addTo(map)
      .bindPopup("User Marker");

    map.setView([userMarker.value.latitude, userMarker.value.longitude], 13);

    const el = userGeoMarker.getElement();
    if (el) {
      el.style.filter = "hue-rotate(120deg)";
    }
  }
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
}
</style>
