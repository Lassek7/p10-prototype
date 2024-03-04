import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './AppRouter.tsx'
import { HashRouter  } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <AppRouter />
  </HashRouter>,
)
