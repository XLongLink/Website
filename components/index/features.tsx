import styles from "./features.module.css";
import Image from 'next/image';
import useWindowSize from "../../customHooks/useWindowSize";
import { textAlign } from "@mui/system";

export interface Feature {
    title?: string;
    description: string;
    image?: string;
}

function TextBox(props: any) {
    return(
        <div>
            {
                props.flip == 0 && 
                <div className={styles.textBoxRight}>
                    <div className={styles.title}> {props.title} </div>
                    <div className={styles.description} > {props.description} </div>
                </div>
            }
            {
                props.flip == -1 && 
                <div className={styles.textBoxLeft}>
                    <div className={styles.title}> {props.title} </div>
                    <div className={styles.description} > {props.description} </div>
                </div>
            }
        </div>
        
    )
}

function ImageBox(props: any) {
    return(
        <div className={styles.imageBox}>
            <Image 
                src={`/${props.url}`}
                width="100%"
                height="100%"
                quality="100"
                alt={props.url}
                layout="responsive"
                unoptimized={true}
            /> 
        </div>
    )
}

function FeaturesBox(props: any) {
    const { width } = useWindowSize();

    return(
        <div className={styles.collaboratorBox}>
            {
                width > 900 ? (
                    <>
                        {
                            props.features.map((element: Feature, index: number) => {
                                return <Feature key={index} flip={index % 2 - 1} {...element} />
                            })
                        }
                        
                    </>
                ) : (
                    <>
                        {
                            props.features.map((element: Feature, index: number) => {
                                return <Feature key={index} flip={0 } {...element} />
                            })
                        }
                    </>
                )
            }
        </div>
    )
}

function Feature(props: any) {
    return(
        <div className={styles.div}>
            {
                props.flip ? (
                    <>
                        <TextBox {...props}/>
                        <ImageBox url={props.image}/>
                    </>
                ) : (
                    <>
                        <ImageBox url={props.image}/>
                        <TextBox {...props}/>
                    </>
                )
            }
        </div>
    )

}

export default FeaturesBox