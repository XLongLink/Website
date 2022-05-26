import styles from "./collaborator.module.css"


function Collaborator(props: any){
    return(
        <>
            <div className={styles.div}>
                <div className={styles.image}>
                    Qua va l'immagine
                </div>
                <div className={styles.description}>
                    Descrizione del collaboratore
                </div>
            </div>
        </>
    )

}

export default Collaborator