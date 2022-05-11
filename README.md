Plug an ethers.js Contract instance into this library and get an simple, instant React front end for your smart contract. This project is not yet ready for consumption. NPM module coming soon.

Example if you want to try to use it before it's ready anyway:

```
import { render } from "react-dom"
import EzContractUi from "./ez-contract-ui"
import { ethers } from "ethers"
import YourContract from "../../artifacts/contracts/YourContract.sol/YourContract.json"
let contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, Deadline.abi, signer)
const contractUi = new EzContractUi(contract, () => {})

const rootElement = document.getElementById("root")
render(<>{contractUi.app()}</>, rootElement)
```
