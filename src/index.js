import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const firebase = require("firebase").default;
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1F4O_BTSYC0WF_SH-2XPw0MgrpMBtN2U",
  authDomain: "evernote-clone-ec9ec.firebaseapp.com",
  projectId: "evernote-clone-ec9ec",
  storageBucket: "evernote-clone-ec9ec.appspot.com",
  messagingSenderId: "143621907443",
  appId: "1:143621907443:web:b6c249bdfbd7bef60d6886",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
