import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import {AuthProvider} from "./config/auth";
import App from "./app";
import './config/style/index.scss'

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <AuthProvider>
      <App/>
    </AuthProvider>
  </BrowserRouter>
)
