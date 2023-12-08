import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: 'purple',
//     },
//     secondary: {
//       main: 'green',
//     },
//   },
// });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
)
