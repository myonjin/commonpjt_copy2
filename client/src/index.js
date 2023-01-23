import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit"
import employeeReducer from "./store/employees";
import App from './App'

// const Apply = React.lazy(() => import("./pages/apply/Apply"));

const root = ReactDOM.createRoot(document.getElementById("root"));

// export const store = configureStore({
//   reducer: {
//     employees: employeeReducer,
//   },
// })


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);