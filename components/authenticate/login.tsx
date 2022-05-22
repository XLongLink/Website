import { useEffect } from "react";
import { useDispatch } from "react-redux";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { connector } from "../../walletConnect";
import { replaceAddress } from "./redux/walletSlice";

//mui
import Button from '@mui/material/Button';

/*
    when wallet doesn't exist, render from connect.tsx
    open walletconnect qr code, then set wallet
    [to do] close pupup when click outside
*/
const Login = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (document == undefined) return
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
        if (connector.pending) {
            return QRCodeModal.open(connector.uri, () => { return });
        }
        await connector.createSession()
    }

    return (
        <Button
            variant="text"
            onClick={connectToMobileWallet}
            sx={{ my: 2, color: 'white', display: 'flex' }}
        >
            Login
        </Button >
    )
}

export default Login