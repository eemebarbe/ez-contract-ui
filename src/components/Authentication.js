import React, { useState, useContext } from "react"
import { MetaMaskAuth, H1 } from "../components"
import { UserContext } from "../contexts/userContext"
import { ToastContext } from "../contexts/toastContext"

function Authentication(props) {
    const provider = props.contract.provider
    const [metaMaskLoadState, setMetaMaskLoadState] = useState(false)
    const { userState, userDispatch } = useContext(UserContext)
    const { sendMessage } = useContext(ToastContext)

    const authWithMetaMask = async () => {
        setMetaMaskLoadState(true)
        let requestConnection
        try {
            requestConnection = await provider.send("eth_requestAccounts", [])
        } catch {
            sendMessage("Wallet was not connected.")
        }
        userDispatch({
            type: "userId",
            payload: requestConnection[0],
        })
        sendMessage("Welcome!")
        setMetaMaskLoadState(false)
    }

    return (
        <>
            <H1>Connect your wallet</H1>
            <MetaMaskAuth loading={metaMaskLoadState} onClick={authWithMetaMask} />
        </>
    )
}

export default Authentication
