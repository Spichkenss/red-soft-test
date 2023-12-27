import './App.css'
import AuthController from "../fake-server/src/auth/auth.controller.ts";

function App() {

  const handleLogin = async () => {
    await AuthController.login()
  }

  return (
    <button onClick={handleLogin}>
      login
    </button>
  )
}

export default App
