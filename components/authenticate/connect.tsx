import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replaceAddress } from "./redux/walletSlice";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { connector } from "../../walletConnect";
import Button from '@mui/material/Button';


/* 
    Walletconnect login button, show popup

    ! Algo pera wallet has a bug, made a bug report here
    https://github.com/perawallet/pera-wallet/issues/77

    has to be added che possibility to click outside the walletconnect popup to exit

*/

const Connect = (props: any) => {
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
                    variant="text"
                    onClick={connectToMobileWallet}
                    {...props}
                >
                    Login
                </Button >
            ) : (
                <Button
                    variant="text"
                    onClick={disconnectMobileWallet}
                    {...props}>
                    Logout
                </Button>)
            }
        </>

    )
};

export default Connect;