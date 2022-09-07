import { createApp } from "vue";

import Cards from "./components/Cards.vue";

export default function placeCards(el) {
  createApp(Cards).mount(el);
}
