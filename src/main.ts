import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStop, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Adicionando ícones individuais à biblioteca
library.add(faStop as any, faPlay as any);

// Registrando o componente global
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
