import { render } from "react-dom"
import EzContractUi from "./ez-contract-ui"
import { ethers } from "ethers"
import Deadline from "../../artifacts/contracts/Deadline.sol/Deadline.json"
let contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, Deadline.abi, signer)
const contractUi = new EzContractUi(contract, () => {})

const rootElement = document.getElementById("root")
render(<>{contractUi.app()}</>, rootElement)
