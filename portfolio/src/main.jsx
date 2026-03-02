import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './theme.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<link href='https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap' rel="stylesheet"></link>
		<App />
	</StrictMode>,
)
