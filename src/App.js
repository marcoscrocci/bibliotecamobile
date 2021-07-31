import React from "react";
import { GlobalProvider } from "./context/GlobalContext";
import LoginOuAplicacao from "./LoginOuAplicacao";


export default props => {
    return (
        <GlobalProvider>
            <LoginOuAplicacao />
        </GlobalProvider>
    )
}