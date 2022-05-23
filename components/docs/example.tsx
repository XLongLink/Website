import styles from "./example.module.css"

const Example = (parms: any) => {
    return (
        <>
            <h2> {parms.title} </h2>
            <h1 className={styles.h1}> {parms.subtitle} </h1>
        </>
    )
}

export default Example