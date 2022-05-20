import algosdk from "algosdk";
import { formatJsonRpcRequest } from "@json-rpc-tools/utils";
import { connector } from "../../../walletConnect";

export const day1 = 86400000;

async function draftAuthTx(wallet: string) {
    const enc = new TextEncoder();
    const notePlainText = `https://stateless-auth.vercel.app/ ${Date.now() + day1}`; // <-- Capire cosa fa
    const note = enc.encode(notePlainText);

    // send a zero transaction with the note to the client
    const authTransaction = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        suggestedParams: {
            fee: 0,
            firstRound: 10,
            flatFee: true,
            genesisHash: "wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=",
            genesisID: "mainnet-v1.0",
            lastRound: 10,
        },
        from: wallet,
        to: "HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA",
        amount: 0,
        note,
    });

    const txnToSign = [
        {
            txn: Buffer.from(algosdk.encodeUnsignedTransaction(authTransaction)).toString("base64"),
            message: "This transaction is free and for authentication purposes.",
        },
    ];

    const requestParams = [txnToSign];
    const request = formatJsonRpcRequest("algo_signTxn", requestParams);
    const result = await connector.sendCustomRequest(request);
    return Array.isArray(result[0]) ? Buffer.from(result[0]).toString("base64") : result[0];
}
export default draftAuthTx;