import { Container, Graphics } from "@pixi/react";
import React, { useContext, useEffect } from "react";
import { CardDetail } from "../cardStore/CardDetail";
import { contextBaraja } from "../twitchCard/ExtTwitch";
import { PurchasedDetail } from "./PurchasedDetail";

function ordenarSprites(cartasCompradas, ancho, alto, gap = 5) {
	const newArrayCartasCompradas = [];

	let x = 10;
	let y = 20;

	cartasCompradas.forEach((carta, index) => {
		const cartaNew = { ...carta };

		cartaNew.pos = [x, y];
		cartaNew.scale = 1.2;
		newArrayCartasCompradas.push(cartaNew);
		x += ancho + gap;
	});

	return newArrayCartasCompradas;
}

export const PurchasedCardsList = ({ pos }) => {
	const { cartasCompradas, setCartasCompradas, cartasBaraja, setCartasBaraja } = useContext(contextBaraja);

	useEffect(() => {
		setCartasCompradas(ordenarSprites(cartasCompradas, 100, 110, 5));
	}, [cartasCompradas.length]);

	const anyadirCartaBaraja = (id) => {
		const carta = cartasCompradas.find((carta) => carta.id === id);

		const index = cartasCompradas.indexOf(carta);
		const newCartas = [...cartasCompradas];
		newCartas.splice(index, 1);
		setCartasCompradas(newCartas);

		const cartasBarajasNew = [...cartasBaraja, carta];
		setCartasBaraja(cartasBarajasNew);
	};

	useEffect(() => {
		if (cartasCompradas?.length === 0) return;
		setCartasCompradas(ordenarSprites(cartasCompradas, 100, 110, 9));
	}, [cartasCompradas?.length]);

	return (
		<Container>
			{cartasCompradas &&
				cartasCompradas.map(({ id, img, scale, pos }, index) => (
					<PurchasedDetail id={id} key={index} image={img} scale={scale} name={"carta" + id} position={pos} anyadirCartaBaraja={anyadirCartaBaraja} />
				))}
		</Container>
	);
};
