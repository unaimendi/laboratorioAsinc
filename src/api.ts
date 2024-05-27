import { ENDPOINT } from "./modelo";

export const traePersonajes = async () => {
	const response = await fetch(`${ENDPOINT}personajes`);
	const data = await response.json();
	return data;
};
