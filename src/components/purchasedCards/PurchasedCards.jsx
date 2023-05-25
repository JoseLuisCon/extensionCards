import { Container, Graphics, render, useApp } from "@pixi/react";
import React, { useContext, useEffect, useRef } from "react";

import * as PIXI from "pixi.js";
import { contextBaraja } from "../twitchCard/ExtTwitch";
import { PurchasedCardsList } from "./PurchasedCardsList";

const draw = (g) => {
	g?.beginFill(0x021f0, 0.4);
	g?.drawRoundedRect(100, 10, window.innerWidth / 2, window.innerHeight / 5, 15);
	g?.endFill();
};

export const PurchasedCards = () => {
	const { cartasCompradas } = useContext(contextBaraja);
	const mask = useRef(null);

	return (
		<Container sortChildren={true}>
			<Container sortChildren={true}>{cartasCompradas && <PurchasedCardsList />}</Container>
			{/* <Graphics draw={draw} ref={mask} /> */}
		</Container>
	);
};
