import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./app";

import './config/style/index.css'
import {Toaster} from "react-hot-toast";
import {AuthProvider} from "@/app/config/auth/model/auth-context";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <AuthProvider>
        <Routes>
          <Route path={'/*'} element={<App/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
