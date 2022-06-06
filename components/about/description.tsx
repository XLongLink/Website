import styles from "./description.module.css"
import Particles from "react-tsparticles";
import { Typography } from '@mui/material';
import { loadFull } from "tsparticles";

function Description() {

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
                options={{
                    background: {
                        color: {
                            value: "#191919",
                        },
                    },
                    fpsLimit: 120,
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
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
                }}
            />
            <p className={styles.p}>
                We are a team of students and close friends, passionate about informatics and blockchain technology<br />
                Our vision of web3 is a secure, fast and practical to use internet<br />
                Our goal is to be able to contribute in the foundations of the creation of a solid ecosystem
            </p>

        </div>
    )
}

export default Description