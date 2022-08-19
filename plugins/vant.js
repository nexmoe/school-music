import { defineNuxtPlugin } from "#app";
import Vant from "vant";
import "vant/lib/index.css";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Vant);
});
