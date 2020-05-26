import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";


registerApplication(
  "@vue-SPA/navbar",
  () => System.import("@vue-SPA/navbar"),
  isActive.navbar
);

registerApplication(
  "application_1",
  () => System.import("application_1"),
  isActive.application_1
);
registerApplication(
  "application_2",
  () => System.import("application_2"),
  isActive.application_2
);

// start({
//   urlRerouteOnly: true
// });
start();
