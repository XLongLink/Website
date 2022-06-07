// da settare
import styles from "./title.module.css"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { IOptions, RecursivePartial } from "tsparticles-engine";

const particleOptions = {
    background: {
        color: {
            value: "#191919",
        },
    },
    fpsLimit: 60,
    particles: {
        color: {
            value: "#DF00FF",
        },
        links: {
            color: "#DF00FF",
            distance: 500,
            enable: true,
            opacity: 0.5,
            width: 1.1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 0.1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 1000,
            },
            value: 50,
        },
        opacity: {
            value: 1,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
    fullScreen: { enable: false }
}

function Title() {

    const particlesInit = async (main: any) => {
        await loadFull(main)
    };

    return (
        <div className={styles.div}>
            <Particles
                className={styles.particles}
                id="tsparticles"
                init={particlesInit}
                options={particleOptions as RecursivePartial<IOptions>}
            />
            <div className={styles.contentdiv}>
                <div className={styles.div_grid_title}>
                    <p className={styles.title_font}>
                        Explore the power
                        <br />
                        of a interconnected
                        <br />
                        ecosystem
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Title