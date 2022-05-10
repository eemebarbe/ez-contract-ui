import React from "react"
import { BodyWrapper, Authentication } from "../components"

function Lander(props) {
    return (
        <BodyWrapper>
            <Authentication contract={props.contract} />
        </BodyWrapper>
    )
}

export default Lander
