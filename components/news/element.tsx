import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./element.module.css"

/*
    Each element rappresent a news,
    depending on the news, a diffrent size can be set.
    Props:
        - Image (for the preview)
        - Data (for the preview)
        - Titolo (for the modal)
        - Body (markdown file)
        - Size
    
    The image has to be uploaded into ./news/images
    The markdown file has to be uploaded into ./news/text

    [to do] file loader
    [to do] data
    [to do] move feet bar to the bottom
    [to do] create standard for markdown file (font, icons, ecc)
*/
function Element(props: any) {
    const [show, setShow] = useState(false);

    const size = `${props.size} brick ${styles[`s${props.size}`]}`;

    return (
        <>
            <div
                className={`${size} ${styles.block}`}
            >
                <div
                    className={styles.block}
                    onClick={() => setShow(true)}
                >
                </div>
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)} centered
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title> {props.title} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.desc}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline"
                        onClick={() => setShow(false)}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Element