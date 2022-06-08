import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";

function Facebook(props: any) {
    return (
        <IconButton
            size="large"
            edge="start"
            aria-label="facebook"
            className={props.className}
            style={{ position: 'relative', right: 2 }}
            href={props.url}
            rel="noopener noreferrer"
            target="_blank"
        >
            <SvgIcon sx={props.sx}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#039be5" d="M24,5C13.5,5,5,13.5,5,24s8.5,19,19,19s19-8.5,19-19S34.5,5,24,5z" /><path fill="#fff" d="M21.2,20.7V24h-4.7v5h4.7v13.7C22.1,42.9,23,43,24,43c0.9,0,1.7-0.1,2.6-0.2V29h4.9l0.8-5h-5.7v-2.7	c0-2.1,0.7-3.9,2.6-3.9h3.1V13c-0.5-0.1-1.7-0.2-3.9-0.2C23.8,12.8,21.2,15.2,21.2,20.7z" /></svg>
            </SvgIcon>
        </IconButton>
    );
}

export default Facebook