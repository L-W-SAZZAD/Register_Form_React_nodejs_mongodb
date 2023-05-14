import React, { createContext, useState } from "react";
import { app } from "../FirebaseConfig/firebaseConfig";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
export default function UserContext({ children }) {
  const [user, setUser] = useState({ name: "sazzad" });
  // google Provider
  const provider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  const faceBookLogIN = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const githubLogIn = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const authInfo = { user, googleSignIn, faceBookLogIN, githubLogIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
