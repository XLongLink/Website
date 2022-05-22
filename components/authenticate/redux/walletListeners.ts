import { connector } from "../../../walletConnect";
import { nextApi } from "./nextApi";
import { replaceAddress, replaceAuthToken } from "./walletSlice";

export const walletListeners = ({ dispatch }: any) => {
    connector.on("connect", async (error, payload) => {
        if (error) console.log(error);
        try {
            const load = payload.params[0];
            dispatch(replaceAddress(load.accounts[0]));
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

export const disconnectMobileWallet = async () => {
    if (!connector.connected) return;
    await connector.killSession();
};