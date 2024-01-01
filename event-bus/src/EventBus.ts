// import mitt from "mitt";
// export default mitt();

import { useEventBus } from "@vueuse/core";
export default useEventBus<string>("EVENT");
