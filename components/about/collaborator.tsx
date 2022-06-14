import styles from "./collaborator.module.css";
import Image from 'next/image';
import { Discord, Facebook, GitHub, Instagram, Telegram, Linkedin, Twitter, YouTube } from "../icons";
import useWindowSize from "../../customHooks/useWindowSize";
import Gmail from "../icons/gmail";

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
        - gmail[url]: collaborator gmail account
*/

export interface Person {
    name: string;
    lastname: string;
    image: string;
    role?: string;
    social?: {
        discord?: string;
        github?: string;
        youtube?: string;
        instagram?: string;
        telegram?: string;
        linkedin?: string;
        facebook?: string;
        twitter?: string;
        gmail?: string;
    }
}

function CollaboratorBox(props: any) {
    const { width } = useWindowSize();

    return (
        <div className={styles.collaboratorBox}>
            {
                width > 900 ? (
                    <>
                        {
                            props.utenti.map((element: Person, index: number) => {
                                return <Collaborator key={index} flip={Math.floor(index / 2) % 2 - 1} {...element} />
                            })
                        }
                    </>
                ) : (
                    <>
                        {
                            props.utenti.map((element: Person, index: number) => {
                                return <Collaborator key={index} flip={index % 2 - 1} {...element} />
                            })
                        }
                    </>
                )
            }
        </div >
    )
}

function FotoBox(props: any) {
    return (
        <div className={styles.imagediv}>
            <Image src={`/about/${props.url}`}
                width="100%"
                height="100%"
                quality="100"
                alt={props.url}
                layout="responsive"
                unoptimized={true} />
        </div>
    )
}

function TextBox(props: any) {
    return (
        < div className={styles.description}>
            <h2 className={styles.name}> {props.name} {props.lastname}</h2>
            {props.role && <p className={styles.desc}>  {props.role} </p>}
            <hr className={styles.hr} />
            <div className={styles.iconDiv}>
                {props.social && props.social.discord !== undefined &&
                    <Discord url={props.social.discord} className={styles.icon} />
                }
                {props.social && props.social.facebook !== undefined &&
                    <Facebook url={props.social.facebook} className={styles.icon} />
                }
                {props.social && props.social.github !== undefined &&
                    <GitHub url={props.social.github} className={styles.icon} />
                }
                {props.social && props.social.instagram !== undefined &&
                    <Instagram url={props.social.instagram} className={styles.icon} />
                }
                {props.social && props.social.linkedin !== undefined &&
                    <Linkedin url={props.social.linkedin} className={styles.icon} />
                }
                {props.social && props.social.telegram !== undefined &&
                    <Telegram url={props.social.telegram} className={styles.icon} />
                }
                {props.social && props.social.twitter !== undefined &&
                    <Twitter url={props.social.twitter} className={styles.icon} />
                }
                {props.social && props.social.youtube !== undefined &&
                    <YouTube url={props.social.youtube} className={styles.icon} />
                }
                {props.social && props.social.gmail !== undefined &&
                    <Gmail url={props.social.gmail} className={styles.icon} />
                }
            </div>
        </div>

    )
}
function Collaborator(props: any) {
    return (
        <div className={styles.div}>
            <div className={styles.boxdimens} >
                {props.flip ? (
                    <>
                        <FotoBox url={props.image} />
                        <TextBox {...props} />
                    </>) : (
                    <>
                        <TextBox {...props} />
                        <FotoBox url={props.image} />
                    </>)}
            </div>
        </div >
    )
}

export default CollaboratorBox