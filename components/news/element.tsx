import React, { useState } from "react";
import { marked } from "marked";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./element.module.css";
import { News } from "../../interfaces/news";
import Image from 'next/image';


/*
    https://blog.nrwl.io/read-and-render-md-files-with-next-js-and-nx-89a85c1d9b44
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
function Element(props: News) {
	const [show, setShow] = useState(false);

	const size = `${props.size} brick ${styles[`s${props.size}`]}`;

	// components\news\element.tsx
	// public\news\primo.png

	return (
		<>
			<div className={`${size} ${styles.block}`}>
				<Image
					src={`/news/${props.image}`}
					layout="fill"
					objectFit="cover"
					className={styles.block}
					onClick={() => setShow(true)}
				/>
			</div>
			<Modal
				className={styles.modalModal}
				show={show}
				onHide={() => setShow(false)}
				centered
				size='xl'
			>
				<Modal.Header closeButton>
					<Modal.Title> {props.title} </Modal.Title>
				</Modal.Header>
				<Modal.Body className={styles.modalBody}>
					<div
						dangerouslySetInnerHTML={{ __html: marked(props.body) }}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='outline' onClick={() => setShow(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Element;
