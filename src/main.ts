import { traePersonajes } from "./api";
import { filtrarPersonaje, listarPersonajes } from "./filtrado";

document.addEventListener("DOMContentLoaded", async () => {
	const todosPersonajes = await traePersonajes();

	const formFiltrar = document.getElementById("filtra-personajes");
	if (formFiltrar && formFiltrar instanceof HTMLFormElement) {
		formFiltrar.addEventListener("submit", filtrarPersonaje);
	}

	listarPersonajes(todosPersonajes);
});
