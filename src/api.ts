import { ENDPOINT } from "./modelo";

export const traePersonajes = async () => {
	const response = await fetch(`${ENDPOINT}personajes`);
	const data = await response.json();
	return data;
};

// Definimos la URL de la API con el filtro
export const FILTERED_CHARACTERS_URL = (filter: string) => `${ENDPOINT}personajes?nombre_like=${filter}`;

// Definimos la función que trae un personaje concreto
export const traePersonaje = async (id: string) => {
	const response = await fetch(FILTERED_CHARACTERS_URL(id));
	const data = response.json();

	return data;
};
