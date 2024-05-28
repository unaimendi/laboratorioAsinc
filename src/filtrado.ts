import { pintaCard } from "./listadoPersonajes";
import { traePersonajes, traePersonaje } from "./api";
import { Personaje } from "./modelo";

export const listarPersonajes = async () => {
	// Utilizamos un try/catch para manejar errores
	try {
		// Llamada a la api para traer los personajes
		const listadoPersonajes = await traePersonajes();

		// Recorremos el listado de personajes y pintamos cada uno de ellos
		listadoPersonajes?.map((personaje: Personaje) => {
			pintaCard(personaje);
		});
	} catch (error) {
		// Si el servidor nos da un error lo mostramos por consola
		console.error(error);
	}
};

export const filtrarPersonaje = async () => {
	const inputPersonaje = document.getElementById("input-personaje");

	if (inputPersonaje && inputPersonaje instanceof HTMLInputElement) {
		const personajeEntrada = inputPersonaje.value;

		//limpiamos el grid de personajes
		const gridPersonajes = document.getElementById("grid-personajes");
		if (gridPersonajes && gridPersonajes instanceof HTMLElement) {
			gridPersonajes.innerHTML = "";
		}
		// Utilizamos un try/catch para manejar errores
		try {
			// Llamada a la api para traer el personaje
			const personaje = await traePersonaje(personajeEntrada);
			// Si el personaje existe y si hemos introducido un valor en el input lo pintamos en la pantalla y si no, listamos todos los personajes cuando el campo está vacío
			if (personajeEntrada && personaje) {
				personaje.map((personaje: Personaje) => pintaCard(personaje));
			} else {
				listarPersonajes();
			}
		} catch (error) {
			// Si el servidor nos da un error lo mostramos por consola
			console.error("Personaje no encontrado");
		}
	}
};
