import styles from "./description.module.css"
import Particles from "react-tsparticles";
import colors from "../../styles/colors";
import { loadFull } from "tsparticles";
import { IOptions, RecursivePartial } from "tsparticles-engine";

/*
    ./about description
    pass an array for the text to show in the title
*/
const particlesOprions = {
    background: {
        color: {
            value: colors.background,
        },
    },
    fpsLimit: 120,
    particles: {
        color: {
            value: colors.white,
        },
        links: {
            color: colors.white,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
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
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
    fullScreen: { enable: false }
}

function Description(props: any) {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return (
        <div
            className={styles.background}
        >
            <Particles
                className={styles.particles}
                id="tsparticles"
                init={particlesInit}
                options={particlesOprions as RecursivePartial<IOptions>}
            />
            <p className={styles.p}>
                {props.text.join("\n")}
            </p>
        </div>
    )
}

export default Description