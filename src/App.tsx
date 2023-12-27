import './App.css'
import AuthController from "../fake-server/src/auth/auth.controller.ts";

function App() {

  const handleLogin = async () => {
    try {
      const user = await AuthController.login({login: "admin", password: "admin"});
      console.log(user);
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <button onClick={handleLogin}>
      login
    </button>
  )
}

export default App
