import styles from "./about.module.css"

function About() {
    return (
        <div className={styles.div}>
            <div className={styles.title}>
                <div className={styles.title_element_div}>
                    <p className={styles.title_element}> Build and deploy as fast as possible </p>
                </div>
                <div className={styles.title_element_div}>
                    <p className={styles.title_element}> Built-in Standards and famous on-chain projects  </p>
                </div>
                <div className={styles.title_element_div}>
                    <p className={styles.title_element}> Full control of the final application</p>
                </div>
            </div>
        </div>
    )
}

export default About