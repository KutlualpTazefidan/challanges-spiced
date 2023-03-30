// Implement the launch sequence function here and export it as the default export.
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";
import { getRocket } from "./core/rocket.js";

export default function launch() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();
  const rocket = getRocket();
  for (let index = 0; index < rocket.requiredCountdown; index++) {
    countdown();
  }
  rocket.requiredCountdown;
  liftoff();
  deployPayload();
}
