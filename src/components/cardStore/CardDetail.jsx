import React, { useRef, useEffect, useState, useContext } from "react";
import { Container, Sprite, Text } from "@pixi/react";

import * as PIXI from "pixi.js";
import { contextBaraja } from "../twitchCard/ExtTwitch";

const getOrderZIndex = (id) => {
	switch (id) {
		case "bg-border":
			return 1;
		case "bg-card":
			return 2;
		case "rarity":
			return 3;
		case "logo":
			return 4;
		case "img":
			return 5;
		case "text":
			return 6;
		default:
			return 0;
	}
};

export const CardDetail = ({ id, image, name, scale, position, comprarCarta }) => {
	const { tiendaCartas } = useContext(contextBaraja);
	const [scaleUpdate, setScaleUpdate] = useState(scale);

	const [imgSprt, setImgSprt] = useState(null);

	const [propsText, setPropsText] = useState({
		x: 0,
		y: 0,
		width: 80,
		fontSize: 8,
	});

	const arrayTextures = useRef([]);
	const textCard = useRef(null);

	const cargarImagenUrl = () => {
		const arrayPropsCard = Object.entries(image);
		arrayTextures.current = [];

		arrayPropsCard.forEach((item, index) => {
			const [key, value] = item;

			if (key === "text") {
				textCard.current = value;
				return;
			}
			// Cargamos las texturas desde las url
			PIXI.Assets.load(value)
				.then((texture) => {
					const newTexture = {
						id: key,
						texture,
					};
					if (!newTexture) return;
					// Obtenemos un array con las texturas
					arrayTextures.current = [...arrayTextures.current, newTexture];
					arrayTextures.current.length === 5 && setImgSprt(arrayTextures.current);
				})
				.catch((err) => console.log(err));
		});
		// setPropsText(({ x, y, width, fontSize, ...prev }) => ({
		// 	x: (scale.x * -32) / 0.14,
		// 	y: 15,
		// 	width: (scale.x * 75) / 0.16,
		// 	fontSize: (scale.x * 8) / 0.16,
		// 	...prev,
		// }));
		// Calculamos las proporciones del texto y las seteamos
	};

	useEffect(() => {
		cargarImagenUrl();

		return () => {
			setImgSprt(null);
			textCard.current = null;
		};
	}, []);

	useEffect(() => {
		cargarImagenUrl();

		return () => {
			setImgSprt(null);
			textCard.current = null;
		};
	}, [tiendaCartas?.length]);

	return (
		<>
			<Container
				position={position}
				// zIndex={zIndex}
				sortableChildren={true}
				interactive={true}
				id={id}
				// pointerdown={(e) => console.log("down", e.detail)}
				// pointerup={clickEnd}
				// pointermove={mouseMove}
				pointerover={(e) => setScaleUpdate(0.16)}
				pointerout={(e) => setScaleUpdate(0.15)}
				onclick={(e) => (e.detail === 2 ? comprarCarta(e.target.id) : null)}
				cursor="pointer"

				// anchor={anchor}
			>
				{imgSprt &&
					imgSprt.map(({ id, texture }, index) => {
						const zIndex = getOrderZIndex(id);
						return (
							<Sprite
								name={name}
								texture={texture}
								ref={id === 0 ? referenciaSprite : null}
								key={index}
								scale={scaleUpdate}
								// zIndex={zIndex}
								// anchor={anchor}
							/>
						);
					})}

				<Text
					text={textCard.current}
					// zIndex={9}
					// width={propsText.width}
					x={20}
					y={15}
					// // visible={visibleText}
					style={
						new PIXI.TextStyle({
							fontFamily: ["Roboto", "Source Sans Pro", "Helvetica", "sans-serif"],
							fontSize: 10,
							fill: ["#e4e3e8", "#fdfcff"],
							stroke: "#eef1f5",
							align: "center",
							wordWrap: true,
							wordWrapWidth: 50,
						})
					}
				/>
			</Container>
		</>
	);
};
