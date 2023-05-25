import { Container, Graphics, useApp } from "@pixi/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CardDetail } from "./CardDetail";

import { contextBaraja } from "../twitchCard/ExtTwitch";

function ordenarSprites(tiendaCartas, columnas, ancho, alto) {
	const filaHeight = alto;
	const columnaWidth = ancho * columnas;
	let newArrayPosTienda = [];

	if (tiendaCartas.length === 0) return;

	let x = 0;
	let y = 0;

	tiendaCartas.forEach((carta, index) => {
		const cartaNew = { ...carta };

		cartaNew.pos = [x, y];
		newArrayPosTienda = [...newArrayPosTienda, cartaNew];
		x += ancho;
		if (x >= columnaWidth) {
			x = 0;
			y += filaHeight;
		}
	});
	return newArrayPosTienda;
}

export const CardStoreList = ({ pos }) => {
	const { tiendaCartas, setTiendaCartas, cartasBaraja, setCartasBaraja } = useContext(contextBaraja);

	const [areaStore, setAreaStore] = useState({ width: 0, height: 0 });
	const containerTienda = useRef(null);
	const enableFirstRender = useRef(true);
	const app = useApp();

	const eliminarCartaTienda = (id) => {
		// eliminamos la carta de la tienda
		const newCartas = tiendaCartas.filter((carta) => carta.id !== id);
		setTiendaCartas(newCartas);
	};

	const comprarCarta = (id) => {
		eliminarCartaTienda(id);
		// añadimos la carta a la zona de cartas compradas
		const carta = tiendaCartas.find((carta) => carta.id === id);
		const cartasCompradasNew = [...cartasBaraja, carta];
		setCartasBaraja(cartasCompradasNew);
	};

	const draw = (g) => {
		g?.beginFill(0xff0000);
		g?.drawRoundedRect(0, 0, areaStore?.width, areaStore?.height, 15);
		g?.endFill();
	};

	// useEffect(() => {
	// 	setTiendaCartas(ordenarSprites(tiendaCartas, 3, 90, 125));
	// 	enableFirstRender.current = false;
	// }, []);

	useEffect(() => {
		if (tiendaCartas?.length === 0) return;
		setTiendaCartas(ordenarSprites(tiendaCartas, 3, 95, 130));
	}, [tiendaCartas?.length]);

	return (
		<Container position={[pos[0], pos[1] - 200]} ref={containerTienda}>
			{enableFirstRender && <Graphics draw={draw} />}
			{tiendaCartas &&
				tiendaCartas.map(({ id, img, scale, pos }, index) => (
					<CardDetail id={id} key={index} image={img} scale={scale} name={"carta" + id} position={pos} comprarCarta={comprarCarta} />
				))}
		</Container>
	);
};
