import { Container, Graphics, Sprite, useApp } from "@pixi/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CardStoreList } from "./CardStoreList";
import { mockData } from "../baraja/data";
import { contextBaraja } from "../twitchCard/ExtTwitch";

import * as PIXI from "pixi.js";

import logo from "../../assets/logo192.png";
const draw = (g) => {
	g?.beginFill(0x000000, 0.5);
	g?.drawRoundedRect(0, 0, 50, 50, 15);
	g?.endFill();
};

export const CardStore = () => {
	const { tiendaCartas } = useContext(contextBaraja);

	const [position, setPosition] = useState([0, window.innerHeight / 2 - 50]);
	const [showStore, setShowStore] = useState(false);
	const [cursor, setCursor] = useState("default");

	const containerRef = useRef(null);
	const isDragging = useRef(false);
	const graphicRef = useRef(null);
	const app = useApp();

	const checkBounds = (e) => {
		const widthStage = app.screen.width;
		const heightStage = app.screen.height;

		const { x, y, width, height } = containerRef.current.getBounds();

		const pointerX = e.data.global.x;
		const pointerY = e.data.global.y;

		//Controlamos si el boton o su contenedor se sale de la pantalla en el eje X
		if (x < 0) {
			setPosition([0, y]);
			return;
		}
		if (x + width > widthStage) {
			setPosition([widthStage - width - 10, y]);
			return;
		}

		if (y < 0) {
			setPosition([x, height]);
			return;
		}

		if (y + height > heightStage) {
			setPosition([x, y - height]);
			return;
		}

		setPosition([pointerX - graphicRef.current.width / 2, pointerY - graphicRef.current.height / 2]);
	};
	const handelPointerDown = (e) => {
		isDragging.current = true;
		setCursor("grabbing");
	};
	const handelPointerUp = (e) => {
		isDragging.current = false;
		setCursor("grab");
	};
	const mouseMove = (e) => {
		if (!isDragging?.current) return;
		checkBounds(e);
		setCursor("grabb");
	};

	useEffect(() => {
		setPosition([0, window.innerHeight / 2 - 50]);
	}, [tiendaCartas?.length]);

	return (
		<Container cursor={cursor} ref={containerRef} position={position} sortChildren={true}>
			<Graphics draw={draw} ref={graphicRef} />

			<Sprite
				interactive={true}
				cursor={cursor}
				// pointerdown={handelPointerDown}
				// pointerup={handelPointerUp}
				// pointermove={mouseMove}
				onclick={(e) => {
					e.stopPropagation();
					setShowStore(!showStore);
				}}
				image={logo}
				x={1}
				scale={0.25}
			/>

			{showStore && <CardStoreList pos={[60, 0]} />}
		</Container>
	);
};
