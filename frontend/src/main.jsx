import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { SearchVehProvider } from './context/SearchVehContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <SearchVehProvider>
    <App />
    </SearchVehProvider>
    </BrowserRouter>
  </StrictMode>,
)
