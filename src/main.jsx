import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, BrowserRouter as Router, RouterProvider } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import App from "./App";
import './index.css';
import {Test, LoginPage} from './pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<LoginPage/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThirdwebProvider 
      activeChain={Sepolia}
      clientId="3f42e4634924ef9f347a9dc719674281"
    >
        <RouterProvider router={router}/>
    </ThirdwebProvider>
)