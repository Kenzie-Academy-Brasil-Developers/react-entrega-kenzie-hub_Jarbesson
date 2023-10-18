import { RoutesMain } from "./routes";
import "./styles/index.scss";
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <RoutesMain />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App;
