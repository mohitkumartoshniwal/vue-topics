import { useLocalStorage } from "@vueuse/core";

type Marker = {
  latitude: number;
  longitude: number;
};

export const userMarker = useLocalStorage<Marker>("USER_MARKER", {
  latitude: 0,
  longitude: 0,
});

export const nearbyMarkers = useLocalStorage<Marker[]>("NEARBY_MARKERS", []);
