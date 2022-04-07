import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from "./config";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: config.ApiKey,
  authDomain: config.AuthDomain,
  projectId: config.ProjectId,
  storageBucket: config.StorageBucket,
  messagingSenderId: config.MessagingSenderId,
  appId: config.AppId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
