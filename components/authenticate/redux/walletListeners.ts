import { connector } from "../../../walletConnect";
import { nextApi } from "./nextApi";
import { replaceAddress, replaceAuthToken } from "./walletSlice";
import draftAuthTx from "../helpers/draftAuthTx";

export const walletListeners = ({ dispatch }: any) => {
    connector.on("connect", async (error, payload) => {
        if (error) console.log(error);
        try {
            const token = localStorage.getItem("authToken");
            if (token) return
            const load = payload.params[0];
            dispatch(replaceAddress(load.accounts[0]));
            setTimeout(async () => {
                await draftAuthTx(load.accounts[0]).then((t) => {
                    dispatch(replaceAuthToken(t));
                    localStorage.setItem("authToken", t);
                    console.log(t)
                })
            }, 5000)

        } catch (e) {
            console.error(e);
        }
    });

    connector.on("disconnect", (error, _payload) => {
        try {
            if (error) {
                throw error;
            }
            dispatch(replaceAuthToken(null));
            dispatch(replaceAddress(null));
            dispatch(nextApi.util.resetApiState());
            localStorage.clear();
        } catch (e) {
            console.error(e);
        }
    });

    return (next: any) => (action: any) => next(action);
};