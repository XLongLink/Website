import {IconButton, SvgIcon, Snackbar} from "@mui/material";
import { useState } from 'react';
import * as React from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';



function Gmail(props: any) {

    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText(props.url)
    }
    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                aria-label="mail"
                href=""
                style={{ position: 'relative', right: 2 }}
                onClick={handleClick}
                className={props.className}
                rel="noopener noreferrer"
                target="_blank"
            >
                <SvgIcon sx={props.sx}>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#e0e0e0" d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"/><path fill="#d9d9d9" d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"/><path fill="#eee" d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"/><path fill="#e0e0e0" d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"/><path fill="#ca3737" d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"/><path fill="#f5f5f5" d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"/><path fill="#e84f4b" d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"/></svg>
                </SvgIcon>
            </IconButton>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={3000}
            >
                <Alert severity="success"> Copyed to clipboard </Alert>
            </Snackbar>
        </>
    );
}

export default Gmail