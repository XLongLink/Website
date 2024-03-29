import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";

function Linkedin(props: any) {
    return (
        <IconButton
            size="large"
            edge="start"
            aria-label="linkedin"
            className={props.className}
            style={{ position: 'relative', right: 2 }}
            href={props.url}
            rel="noopener noreferrer"
            target="_blank"
        >
            <SvgIcon sx={props.sx}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#0288d1" d="M8.4,15L8.4,15L8.4,15c2.8,0,4.6-2,4.6-4.5C12.9,7.9,11.3,6,8.5,6S4,7.9,4,10.5C4,13,5.7,15,8.4,15z" /><rect width="9" height="26" x="4" y="17" fill="#0288d1" /><path fill="#0288d1" d="M44,26.5c0-5.2-4.3-9.5-9.5-9.5c-3.1,0-5.8,1.4-7.5,3.7V17h-9v26h9V28l0,0c0-2.2,1.8-4,4-4s4,1.8,4,4v15h9	C44,43,44,28,44,26.5z" /></svg>
            </SvgIcon>
        </IconButton>
    );
}

export default Linkedin