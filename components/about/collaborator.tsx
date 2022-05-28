import styles from "./collaborator.module.css"


function Collaborator(props: any){
    if (props.side == "right"){
        return(
            <>
                <div className={styles.div}>
                    <div className={styles.description}>{props.description}</div>
                    <div className={styles.image}>{props.image}</div>
                </div>
            </>
        )
    } else if (props.side == "left") {
        return(
            <>
                <div className={styles.div}>
                    <div className={styles.image}>{props.image}</div>
                    <div className={styles.description}>{props.description}</div>
                </div>
            </>
        )
    }  else {
        return(<></>)
    } 

}

export default Collaborator