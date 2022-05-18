import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import draftAuthTx from "../helpers/draftAuthTx";
import { useGetDashboardQuery } from "../redux/nextApi";
import { replaceAuthToken } from "../redux/walletSlice";

/* 
    Send a zero transaction in the wallet, and ask to sign

    Has to be moved with connect.tsx abd directly perform action

*/

const Authenticate = () => {
    const { address: wallet, iOS } = useSelector((state: any) => state.wallet);
    const { refetch } = useGetDashboardQuery(wallet, { skip: !wallet });
    const dispatch = useDispatch();
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const auth = async () => {
        window.location.href = iOS ? `algorand-wc://` : `algorand://`;
        setIsAuthenticating(true);
        try {
            const token = await draftAuthTx({ wallet });
            dispatch(replaceAuthToken(token));
            localStorage.setItem("authToken", token);
            console.log(token)
            setIsAuthenticating(false);
        } catch (error: any) {
            setErrorMsg(error?.message);
        }
        refetch();
    };

    return (
        <div>
            <button disabled={!wallet} onClick={auth}>
                Authenticate
            </button>
            {isAuthenticating && (
                <div className="overlay">
                    <div className="popup">
                        <div className="close" onClick={() => { setIsAuthenticating(false); setErrorMsg("") }}>
                            &times;
                        </div>
                        <div className="content">{errorMsg ? errorMsg : "Review the auth transaction in your wallet"}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Authenticate;