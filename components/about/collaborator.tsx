import styles from "./collaborator.module.css"
import { IconButton } from '@mui/material'
import { Discord, Facebook, GitHub, Instagram, Telegram, Linkedin, Twitter, YouTube } from "../icons"
import Image from 'next/image'

/*  Function that display collaborator
    information on the site
    
    props:
        - image[url]: collaborator image to display
        - description[string]: description of the
            collaborator to be displayed
        - discord[url]: collaborator discord account
        - facebook[url]: collaborator facebbok account
        - github[url]: collaborator github account
        - instagram[url]: collaborator instagram account
        - linkedin[url]: collaborator linkedin account
        - telegram[url]: collaborator telegram account
        - twitter[url]: collaborator twitter account
        - youtube[url]: collaborator youtube account
*/

/*

*/

function Collaborator(props: any) {
    // Collaborator image on the right
    if (props.side == "right") {
        return (
            <>
                <div className={styles.div}>
                    {/* DESCRIPTION OF THE COLLABORATOR + SOCIAL ICONS*/}
                    <div className={styles.description}>
                        <h2 className={styles.name}> {props.name}</h2>
                        <p className={styles.desc}>  {props.description} </p>
                        <hr className={styles.hr} />
                        <div className={styles.iconDiv}>
                            {props.discord !== undefined &&
                                <Discord url={props.discord} className={styles.icon} />
                            }
                            {props.facebook !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="facebook"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.facebook}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Facebook />
                                </IconButton>
                            }
                            {props.github !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="github"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.github}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <GitHub />
                                </IconButton>
                            }
                            {props.instagram !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="instagram"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.instagram}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Instagram />
                                </IconButton>
                            }
                            {props.linkedin !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="linkedin"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.linkedin}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Linkedin />
                                </IconButton>
                            }
                            {props.telegram !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="telegram"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.telegram}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Telegram />
                                </IconButton>
                            }
                            {props.twitter !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="twitter"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.twitter}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Twitter />
                                </IconButton>
                            }
                            {props.youtube !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="youtube"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.youtube}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <YouTube />
                                </IconButton>
                            }
                        </div>
                    </div>
                    {/* IMAGE OF THE COLLABORATOR*/}
                    {props.image ? (<Image src={`/about/${props.image}`}
                        width="100%"
                        height="100%"
                        quality="100"
                        unoptimized={true} />) : (
                        <div className={styles.image}>
                            Image here
                        </div>)}
                </div>
            </>
        )
    }
    // Collaborator image on the left
    else if (props.side == "left") {
        return (
            <>
                <div className={styles.div}>
                    {props.image ? (<Image src={`/about/${props.image}`}
                        width="100%"
                        height="100%"
                        quality="100"
                        unoptimized={true} />) : (
                        <div className={styles.image}>
                            Image here
                        </div>)}
                    {/* DESCRIPTION OF THE COLLABORATOR + SOCIAL ICONS*/}
                    <div className={styles.description}>
                        <h2 className={styles.name}> {props.name}</h2>
                        <p className={styles.desc}>  {props.description} </p>
                        <hr className={styles.hr} />
                        <div className={styles.iconDiv}>
                            {props.discord !== undefined &&
                                <Discord url={props.discord} className={styles.icon} />
                            }
                            {props.facebook !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="facebook"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.facebook}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Facebook />
                                </IconButton>
                            }
                            {props.github !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="github"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.github}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <GitHub />
                                </IconButton>
                            }
                            {props.instagram !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="instagram"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.instagram}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Instagram />
                                </IconButton>
                            }
                            {props.linkedin !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="linkedin"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.linkedin}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Linkedin />
                                </IconButton>
                            }
                            {props.telegram !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="telegram"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.telegram}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Telegram />
                                </IconButton>
                            }
                            {props.twitter !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="twitter"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.twitter}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Twitter />
                                </IconButton>
                            }
                            {props.youtube !== undefined &&
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="youtube"
                                    className={styles.icon}
                                    style={{ position: 'relative', right: 2 }}
                                    href={props.youtube}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <YouTube />
                                </IconButton>
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
    // not specified the side of the collaborator image
    else {
        return (<></>)
    }

}

export default Collaborator