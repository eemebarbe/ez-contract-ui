import React, { useState, useContext, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Header, CenteredDiv, Spinner, Toast } from "./components"
import styled, { ThemeProvider } from "styled-components"
import { colors } from "./themes"
import { UserContext } from "./contexts/userContext"
import GlobalStyle from "./themes/GlobalStyle"
import Dashboard from "./routes/Dashboard"
import About from "./routes/About"
import Lander from "./routes/Lander"

function App(props) {
    const { provider } = props.contract
    const [initializationComplete, setInitComplete] = useState(false)
    const { userState, userDispatch } = useContext(UserContext)
    const styleMode = window.localStorage.getItem("styleMode")
    const userId = userState.userId

    useEffect(() => {
        const asyncFunction = async () => {
            const isAccountConnected = await provider.send("eth_accounts", [])
            if (isAccountConnected) {
                userDispatch({
                    type: "userId",
                    payload: isAccountConnected[0],
                })
            }
            setInitComplete(true)
        }
        asyncFunction()
    }, [])

    useEffect(() => {
        if (!styleMode) {
            let newStyle = "main"
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                newStyle = "dark"
            }
            userDispatch({
                type: "styleMode",
                payload: newStyle,
            })
            window.localStorage.setItem("styleMode", newStyle)
        }
    }, [])

    const routeWithAuth = (destination) => {
        return !userId ? (
            <Navigate
                to={{
                    pathname: "/",
                }}
            />
        ) : (
            destination
        )
    }

    const reRouteIfAuthenticated = (destination) => {
        return userId ? <Navigate to="/dashboard" /> : destination
    }

    const router = () => {
        return (
            <BrowserRouter>
                <Header />
                <Toast />
                <Routes>
                    <Route path="/" element={reRouteIfAuthenticated(<Lander contract={props.contract} />)} />
                    <Route path="dashboard" element={routeWithAuth(<Dashboard contract={props.contract} />)} />
                    <Route path="about" element={<About />} />
                </Routes>
            </BrowserRouter>
        )
    }

    const renderApp = () => {
        const app = !initializationComplete ? (
            <CenteredDiv vertical horizontal>
                <Spinner large secondary />
            </CenteredDiv>
        ) : (
            router()
        )
        return app
    }

    return (
        <ThemeProvider theme={styleMode && styleMode === "dark" ? colors.dark : colors.main}>
            <GlobalStyle />
            <AppWrapper>{renderApp()}</AppWrapper>
        </ThemeProvider>
    )
}

const AppWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
`

export default App
