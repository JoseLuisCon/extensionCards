import React from "react";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Container, Graphics, Stage as PixiStage, useApp } from "@pixi/react";

import { Baraja } from "../baraja/Baraja";
import { mockData } from "../baraja/data";

import * as PIXI from "pixi.js";
import { CardStore } from "../cardStore/CardStore";
import { PurchasedCards } from "../purchasedCards/PurchasedCards";

PIXI.settings.PREFER_ENV = PIXI.ENV.WEBGL2;

const getSize = () => ({
	width: window.innerWidth,
	height: window.innerHeight,
});

const initialSize = getSize();

const getPositionBaraja = () => {
	const { width, height } = getSize();

	return {
		x: width / 3,
		y: (height / 3) * 2.5,
	};
};

const options = {
	backgroundColor: 0x00000,
	raf: false,
	autoDensity: true,
	antialias: true,
};

export const contextBaraja = createContext();
// CONTEXT BRIDGE para poder usar el contexto Pixi
// the context bridge:
const ContextBridge = ({ children, Context, render }) => {
	return <Context.Consumer>{(value) => render(<Context.Provider value={value}>{children}</Context.Provider>)}</Context.Consumer>;
};

export const Stage = ({ children, ...props }) => {
	return (
		<ContextBridge Context={contextBaraja} render={(children) => <PixiStage {...props}>{children}</PixiStage>}>
			{children}
		</ContextBridge>
	);
};

export const ExtTwitch = () => {
	const [selectedCard, setSelectedCard] = useState(null);

	const [tiendaCartas, setTiendaCartas] = useState(mockData);
	//const [cartasCompradas, setCartasCompradas] = useState([]);
	const [cartasBaraja, setCartasBaraja] = useState([]);

	const containerBarajaRef = useRef(null);

	const createDataSprite = (data) =>
		data.map((data, index) => {
			return {
				id: index,
				img: data,
				scale: 0.15,
				pos: [0, 0],
			};
		});

	// POSIBLE SITIO PARA RECIBIR LA DATA (FETCH)
	useEffect(() => {
		setTiendaCartas(createDataSprite(mockData));
	}, []);

	return (
		<contextBaraja.Provider
			value={{
				selectedCard,
				setSelectedCard,
				tiendaCartas,
				setTiendaCartas,
				cartasBaraja,
				setCartasBaraja,
			}}>
			<Stage {...initialSize} options={options}>
				<Container sortableChildren={true} interactive={true} ref={containerBarajaRef}>
					{/* <PurchasedCards /> */}
					<CardStore />

					<Baraja pos={getPositionBaraja()} />
				</Container>
			</Stage>
		</contextBaraja.Provider>
	);
};
