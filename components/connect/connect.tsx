import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replaceAddress } from "../redux/walletSlice";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { connector } from "../../walletConnect";

/* 
    Walletconnect login button, show popup

    Has to be fixed the position, put in the navbar

*/
const Connect = () => {
    const { address: wallet } = useSelector((state: any) => state.wallet);
    const dispatch = useDispatch();

    useEffect(() => {
        const escFunction = (event: any) => {
            if (event.keyCode === 27) QRCodeModal.close(); // close on escape
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
        if (connector.pending) return QRCodeModal.open(connector.uri, () => {
            return
        });
        await connector.createSession();
    };

    const disconnectMobileWallet = async () => {
        if (!connector.connected) return;
        await connector.killSession();
    };

    return (
        <div className="wallet-buttons">
            <button disabled={wallet} onClick={connectToMobileWallet}>
                Connect Wallet
            </button>
            &nbsp;
            <button disabled={!wallet} onClick={disconnectMobileWallet}>
                Disconnect Wallet
            </button>
        </div>
    );
};

export default Connect;