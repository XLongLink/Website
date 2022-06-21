import { useEffect } from "react";
import { News } from "../../interfaces/news";
import Element from "./element";
import styles from "./elementGrid.module.css";
/*
    STYLE
*/

const createFreewall = () => {
	if (typeof window !== "undefined") {
		const freewall = require("freewall");
		var wall = new freewall.Freewall("#container");
		wall.reset({
			selector: ".brick",
			cellW: 150,
			cellH: 150,
			gutterY: 5,
			gutterX: 5,
			onResize: function () {
				wall.fitWidth();
			},
		});

		wall.fixSize({
			block: ".1x1",
			width: 150,
			height: 150,
		});
		wall.fixSize({
			block: ".2x1",
			width: 150,
			height: 300,
		});
		wall.fixSize({
			block: ".1x2",
			width: 300,
			height: 150,
		});
		wall.fixSize({
			block: ".2x2",
			width: 300,
			height: 300,
		});
		wall.fixSize({
			block: ".3x3",
			width: 450,
			height: 450,
		});
		wall.fixSize({
			block: ".3x2",
			width: 300,
			height: 450,
		});
		wall.fixSize({
			block: ".2x3",
			width: 450,
			height: 300,
		});
		wall.fitWidth();
	}
};

interface GridProps {
	news: Array<News>;
}
function ElementGrid(props: GridProps) {
	useEffect(() => {
		createFreewall();
	}, []);

	return (
		<div id='container' className={styles.container}>
			{props.news.map((el: News, i: number) => (
				<Element key={i} {...el} />
			))}
		</div>
	);
}

export default ElementGrid;
