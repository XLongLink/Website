import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replaceAddress } from "./redux/walletSlice";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { connector } from "../../walletConnect";
import Button from '@mui/material/Button';


/* 
    Walletconnect login button, show popup

    Has to be fixed the position, put in the navbar

*/

const Connect = () => {
    const { address: wallet } = useSelector((state: any) => state.wallet);
    const dispatch = useDispatch();

    // handle close on escape
    useEffect(() => {
        const escFunction = (event: any) => {
            if (event.keyCode === 27) QRCodeModal.close();
        };
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    useEffect(() => {
        if (connector.connected && connector.accounts.length > 0) {
            dispatch(replaceAddress(connector.accounts[0]));
        }
    }, [dispatch]);

    const connectToMobileWallet = async () => {
        if (connector.connected) return;
        if (connector.pending) return QRCodeModal.open(connector.uri, () => { return });
        await connector.createSession()
    };

    const disconnectMobileWallet = async () => {
        if (!connector.connected) return;
        await connector.killSession();
    };

    return (
        <>
            {!wallet ? (
                <Button
                    variant="contained"
                    onClick={connectToMobileWallet} >
                    Login
                </Button >
            ) : (
                <Button
                    variant="contained"
                    onClick={disconnectMobileWallet}>
                    Logout
                </Button>)}
        </>

    )
};

export default Connect;