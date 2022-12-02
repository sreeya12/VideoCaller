import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyB_08DsA3LNyn1sFnPaKHDDnwLpbFPEx8U",
  authDomain: "videocalling-85253.firebaseapp.com",
  projectId: "videocalling-85253",
  storageBucket: "videocalling-85253.appspot.com",
  messagingSenderId: "405091461381",
  appId: "1:405091461381:web:3b6370a26c3051aa2cef6c",
  measurementId: "G-8HN6BFNH7B"
})

export const auth = app.auth()
export default app