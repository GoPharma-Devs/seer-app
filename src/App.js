import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/Index.scss";

import GeneralRoutes from "./routes/GeneralRoutes";
import { AuthProvider } from '../src/context/AuthProvider'

function App() {

  return (
    <>
      <AuthProvider>
        <div className="App">
          <GeneralRoutes />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
