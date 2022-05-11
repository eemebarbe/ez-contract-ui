import { ToastProvider } from "./contexts/toastContext"
import { UserProvider } from "./contexts/userContext"
import { FunctionForm, UserStatus, Authentication } from "./components"
import App from "./App.js"

export default class EzContractUi {
    constructor(contract, resultCallback) {
        this.contract = contract
        this.abi = contract.interface.fragments
        this.formComponent = (abiObj) => <FunctionForm contract={contract} abi={abiObj} handleResult={resultCallback} />
        this.abi.forEach((x) => {
            this[x.name] = this.formComponent(x)
        })
    }

    renderContractFunction = (functionName) => {
        return this[functionName]
    }

    allContractFunctions = () => {
        return this.abi.map((x) => {
            return this.formComponent(x)
        })
    }

    authenticator = () => <Authentication contract={this.contract} />

    userHistory = () => <UserStatus>{this.contract.provider}</UserStatus>

    app = () => {
        return (
            <ToastProvider>
                <UserProvider>
                    <App contract={this.contract} />
                </UserProvider>
            </ToastProvider>
        )
    }

    //include direct access to hooks/context?
}
