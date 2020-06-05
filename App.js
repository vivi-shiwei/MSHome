import React from "react";
import { ThemeProvider, CSSReset, theme, ColorModeProvider } from "@chakra-ui/core";

const App = (Component) => {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <ColorModeProvider>
                <Component />
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default App;