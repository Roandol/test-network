import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    outline: 'none !important',
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: '20px !important',
                    border: '1px solid #dddddd',
                    ":focus": {
                        borderColor: '#7695ec'
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#7695ec'
                }
            }
        }
    }
})