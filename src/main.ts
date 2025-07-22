import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStop, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faStop, faPlay);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
