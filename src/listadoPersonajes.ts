import { ENDPOINT, Personaje } from "./modelo";

const crearImagen = (imagen: string, contenedor: HTMLElement) => {
	const img = document.createElement("img");
	img.src = ENDPOINT + imagen;
	contenedor.append(img);
};

const crearParrafo = (nombre: string, texto: string, contenedor: HTMLElement) => {
	const parrafoNuevo = document.createElement("p");
	parrafoNuevo.innerHTML = `<strong>${nombre}: </strong>${texto}`;
	contenedor.append(parrafoNuevo);
};

export const pintaCard = (personaje: Personaje) => {
	const { nombre, especialidad, imagen, habilidades } = personaje;

	const card = document.createElement("article");
	card.classList.add("card");

	crearImagen(imagen, card);

	crearParrafo("Nombre", nombre, card);
	crearParrafo("Especialidad", especialidad, card);

	const stringHabilidades = habilidades.toString().replaceAll(",", " | ");
	crearParrafo("Habilidades", stringHabilidades, card);

	const gridPersonajes = document.getElementById("grid-personajes");
	if (gridPersonajes && gridPersonajes instanceof HTMLElement) {
		gridPersonajes.append(card);
	}
};
