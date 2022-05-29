import { useEffect } from 'react';
import Element from "./element";
import styles from "./elementGrid.module.css"
/*
    STYLE
*/

const createFreewall = () => {
    if (typeof window !== 'undefined') {
        const freewall = require("freewall")
        var wall = new freewall.Freewall("#container");
        wall.reset({
            selector: '.brick',
            cellW: 150,
            cellH: 150,
            gutterY: 5,
            gutterX: 5,
            onResize: function () {
                wall.fitWidth();
            }
        });

        wall.fixSize({
            block: '.1x1',
            width: 150,
            height: 150
        });
        wall.fixSize({
            block: '.2x1',
            width: 150,
            height: 300
        });
        wall.fixSize({
            block: '.1x2',
            width: 300,
            height: 150
        });
        wall.fixSize({
            block: '.2x2',
            width: 300,
            height: 300
        });
        wall.fixSize({
            block: '.3x3',
            width: 450,
            height: 450
        });
        wall.fixSize({
            block: '.3x2',
            width: 300,
            height: 450
        });
        wall.fixSize({
            block: '.2x3',
            width: 450,
            height: 300
        });
        wall.fitWidth();
    }
}

function ElementGrid() {
    useEffect(() => {
        createFreewall()
    }, [])

    return (
        <div id="container" className={styles.container}>
            <Element
                size="3x3"
                title="Titolo"
                image="image"
                desc="desc"
            />
            <Element size="3x2" />
            <Element size="2x3" />
            <Element size="2x2" />
            <Element size="2x1" />
            <Element size="1x2" />
            <Element size="1x1" />
        </div>
    )
}

export default ElementGrid
