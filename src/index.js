import React from "react"
import { render } from "react-dom"
import Contract from "./ez-contract-ui"
import { ethers } from "ethers"
import ExampleContract from "./ExampleContract.json"
let contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, ExampleContract.abi, signer)
const contractUi = new Contract(contract, () => {})

const rootElement = document.getElementById("root")
render(<>{contractUi.app()}</>, rootElement)
