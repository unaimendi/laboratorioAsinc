import { pintaCard } from "./listadoPersonajes";
import { Personaje, pageURL } from "./modelo";

const capturaPersonaje = (): string => {
	const parametrosURL = new URLSearchParams(window.location.search);
	const personaje = parametrosURL.get("nombre_like") || "";
	return decodeURIComponent(personaje.toLowerCase());
};

export const listarPersonajes = (todosPersonajes: Personaje[]) => {
	let personajesAListar = todosPersonajes;
	const personajeABuscar = capturaPersonaje();

	if (personajeABuscar) {
		personajesAListar = todosPersonajes.filter((personaje: Personaje) => {
			let nombrePersonaje = personaje.nombre.toLowerCase();
			return nombrePersonaje.includes(personajeABuscar);
		});
	}

	personajesAListar.forEach((personaje: Personaje) => {
		pintaCard(personaje);
	});
};

export const filtrarPersonaje = (evento: Event) => {
	evento.preventDefault();
	const inputPersonaje = document.getElementById("input-personaje");
	if (inputPersonaje && inputPersonaje instanceof HTMLInputElement) {
		const personajeEntrada = inputPersonaje.value;
		window.location.href = `${pageURL}?nombre_like=${personajeEntrada}`;
	}
};
