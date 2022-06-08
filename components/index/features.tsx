import styles from "./features.module.css"

/*  Switch beetwen user and developer
    props:
        - title:[string] -> Title of the text box
        - line_1:[string] -> first line of text
        - line_2:[string] -> second line of text
        - line_3:[string] -> third line of text
        - line_4:[string] -> fourth line of text
        - right:[boolean] -> place text on the right half of the page
[TO DO] - img:[string] -> url image to show 
*/

function Features(props: any) {
    console.log("loaded")
    if (props.side == "right") {
        return (
            <div className={styles.div}>
                <div className={styles.div_grid_image_left}>
                    <h1 className={styles.image_box}> Qua ci va l&apos;immagine </h1>
                </div>
                <div className={styles.div_grid_title_right}>
                    <p className={styles.title_font_right}> {props.title} </p>
                    <p className={styles.text_font_right}> {props.line_1} </p>
                    <p className={styles.text_font_right}> {props.line_2} </p>
                    <p className={styles.text_font_right}> {props.line_3} </p>
                    <p className={styles.text_font_right}> {props.line_4} </p>
                </div>
            </div>)

    } else {
        return (
            <div className={styles.div}>
                <div className={styles.div_grid_title_left}>
                    <p className={styles.title_font_left}> {props.title} </p>
                    <p className={styles.text_font_left}> {props.line_1} </p>
                    <p className={styles.text_font_left}> {props.line_2} </p>
                    <p className={styles.text_font_left}> {props.line_3} </p>
                    <p className={styles.text_font_left}> {props.line_4} </p>
                </div>
                <div className={styles.div_grid_image_right}>
                    <h1 className={styles.image_box}> Qua ci va l&apos;immagine </h1>
                </div>
            </div>)
    }

}

export default Features