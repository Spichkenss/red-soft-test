import './App.css'
import AuthController from "../fake-server/src/auth/auth.controller.ts";
import DataController from "../fake-server/src/data/data.controller.ts";

function App() {

  const handleLogin = async () => {
    try {
      const user = await AuthController.login({login: "admin", password: "admin"});
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

  const handleGetData = async () => {
    try {
      const data = await DataController.getData();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <button onClick={handleLogin}>
        login
      </button>
      <button onClick={handleGetData}>
        get data
      </button>
    </div>
  )
}

export default App
