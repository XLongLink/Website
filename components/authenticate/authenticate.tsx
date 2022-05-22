import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetDashboardQuery } from "./redux/nextApi";
import draftAuthTx from "./helpers/draftAuthTx";
import { replaceAuthToken } from "./redux/walletSlice";
import { Storage } from "../../customHooks/useStorage"
import { disconnectMobileWallet } from "./redux/walletListeners"
//mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


/*
    when token doesn't exist, render from connect.tsx
    send a zero transaction to wallet, then set token:
    [to do] autofocus close button
*/
const Authenticate = () => {
    const { setToken } = useContext(Storage);
    const [authenticating, setAuthenticating] = useState(false)
    const { address: wallet, iOS } = useSelector((state: any) => state.wallet);
    const { refetch } = useGetDashboardQuery(wallet, { skip: !wallet });
    const dispatch = useDispatch();

    const auth = async () => {
        window.location.href = iOS ? `algorand-wc://` : `algorand://`;
        try {
            setAuthenticating(true)
            const t = await draftAuthTx(wallet)
            if (t != null) {
                dispatch(replaceAuthToken(t))
                setToken(t)
            }
            setAuthenticating(false)
        } catch (e: any) {
            console.log(e)
        }
        refetch()
    }

    const handleClose = () => {
        setAuthenticating(false)
    }

    const handleCloseWithLogout = () => {
        disconnectMobileWallet()
        setToken(null)
        setAuthenticating(false)
    }

    return (
        <>
            <Button
                variant="text"
                onClick={auth}
                sx={{ my: 2, color: 'white', display: 'flex' }}
            >
                Authenticate
            </Button >
            <Dialog
                open={authenticating}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Sent authentication request
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Open your wallet and sign the null transaction to authenticate the account.
                        This transaction has zero fee and will not be sent to che network
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={handleCloseWithLogout}>
                        Logout
                    </Button>
                    <Button color="success" onClick={handleClose} autoFocus={true}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Authenticate