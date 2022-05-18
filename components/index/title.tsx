// da settare
import styles from "./title.module.css"

/*  Switch between Users and Developer 
    props:
        - line_1: -> first line of the title
        - line_2: -> second line of the title
        - line_3: -> third line of the title
[TO DO] - img: -> url image to show 
*/

function Title(props: any) {
    return (
        <div className={styles.div}>
            <div className={styles.div_grid_title_left}>
                <p className={styles.title_font_left}> {props.line_1} </p>
                <p className={styles.title_font_left}> {props.line_2} </p>
                <p className={styles.title_font_left}> {props.line_3} </p>
            </div>
            <div className={styles.div_grid_image_right}>
                <h1 className={styles.image_box}> Qua ci va l'immagine </h1>
            </div>
        </div>)
}

export default Title