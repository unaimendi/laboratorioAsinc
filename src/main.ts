import { filtrarPersonaje, listarPersonajes } from "./filtrado";

document.addEventListener("DOMContentLoaded", () => {
	// Llamamos a la función listarPersonajes para que se muestren todos los personajes al cargar la página
	listarPersonajes();

	// Obtenemos el botón de filtrar y le añadimos un evento de click
	const filtrar = document.getElementById("filtrar");
	if (filtrar && filtrar instanceof HTMLButtonElement) {
		console.log("filtrar", filtrar);
		filtrar.addEventListener("click", filtrarPersonaje);
	}
});
