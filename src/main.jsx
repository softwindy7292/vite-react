import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import BootStrapButton from './BootStrapButton.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <App />
        <BootStrapButton />
    </StrictMode>
)
