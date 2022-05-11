import React, { useState, useContext, useEffect } from "react"
import { BodyWrapper, FunctionForm, H1 } from "../components"
import { ToastContext } from "../contexts/toastContext"
import { UserContext } from "../contexts/userContext"

function Dashboard(props) {
    console.log(props.contract.interface)
    let contractAddress = props.contract.address
    const { sendMessage } = useContext(ToastContext)
    const { userState, userDispatch } = useContext(UserContext)

    const handleResult = (result) => {
        if (result.hash) {
            userDispatch({
                type: "transaction",
                payload: result,
            })
            sendMessage("Transaction complete!")
        } else {
            sendMessage(result)
        }
    }

    const allContractFunctions = () => {
        return props.contract.interface.functions.map((x) => {
            return <FunctionForm abi={x} contract={props.contract} />
        })
    }

    return (
        <BodyWrapper>
            <H1>{contractAddress}</H1>
            <a href={`https://etherscan.io/address/${contractAddress}`} target="_blank">
                View the contract on Etherscan.
            </a>
            {allContractFunctions()}
        </BodyWrapper>
    )
}

export default Dashboard
