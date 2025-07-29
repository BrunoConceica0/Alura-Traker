import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";
import { store, key } from "./store"; // importa sua store e key

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStop,
  faPlay,
  faListCheck,
  faLaptopCode,
  faPlus,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Adicionando ícones individuais à biblioteca
library.add(
  faStop as any,
  faPlay as any,
  faListCheck as any,
  faLaptopCode as any,
  faPlus as any,
  faPencil as any,
  faTrash as any
);

// Registrando o componente global
createApp(App)
  .use(store, key) // Usando a store com a chave
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
