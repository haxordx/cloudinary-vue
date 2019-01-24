import { State } from "./reactive/State";
import { normalizeConfiguration } from "./helpers/attributes";

import CLDContext from "./components/CLDContext";
import CLDImage from "./components/CLDImage";
import CLDPoster from "./components/CLDPoster";
import CLDTransformation from "./components/CLDTransformation";
import CLDVideo from "./components/CLDVideo";

export function install(Vue, options) {
  Vue.component("CLDContext", CLDContext);
  Vue.component("CLDImage", CLDImage);
  Vue.component("CLDPoster", CLDPoster);
  Vue.component("CLDTransformation", CLDTransformation);
  Vue.component("CLDVideo", CLDVideo);

  if (options) {
    Vue.prototype.CLDGlobalContextState = new State({
      configuration: normalizeConfiguration(options)
    });
  }
}
