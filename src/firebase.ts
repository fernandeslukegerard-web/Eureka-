import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  User as FirebaseUser,
  onAuthStateChanged,
  signInAnonymously
} from 'firebase/auth';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase App instance singleton
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Authentication Providers
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const appleProvider = new OAuthProvider('apple.com');
appleProvider.addScope('email');
appleProvider.addScope('name');

// Authentication Helper Methods
export const loginWithEmail = async (email: string, pass: string) => {
  return await signInWithEmailAndPassword(auth, email.trim(), pass);
};

export const registerWithEmail = async (
  email: string,
  pass: string,
  fullName: string
) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), pass);
  if (fullName.trim()) {
    await updateProfile(userCredential.user, {
      displayName: fullName.trim()
    });
  }
  return userCredential;
};

export const loginWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};

export const loginWithApple = async () => {
  return await signInWithPopup(auth, appleProvider);
};

export const loginAnonymously = async () => {
  return await signInAnonymously(auth);
};

export const resetUserPassword = async (email: string) => {
  return await sendPasswordResetEmail(auth, email.trim());
};

export const logoutUser = async () => {
  return await firebaseSignOut(auth);
};

export { onAuthStateChanged, updateProfile };
export type { FirebaseUser };
