import { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider,signInWithPopup,updateProfile,createUserWithEmailAndPassword,getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut,} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password, name, photo) => {
    try {
      setLoading(true);
      const createdUser = await createUserWithEmailAndPassword(auth, email, password);

      // Update user profile
      await updateProfile(createdUser.user, { displayName: name, photoURL: photo });

      setUser(createdUser.user);
      setLoading(false);
      console.log('User created:', user);

      return createdUser;
    } catch (error) {
      setLoading(false);
      console.error('Error creating user:', error.message);
      throw error;
    }
  };

  const provider = new GoogleAuthProvider();
  const GoogleSignin =()=>{
      setLoading(true);
      return signInWithPopup(auth, provider)
  }

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}

const login=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    logOut,
    login,
    GoogleSignin,
    loading,
  };

  return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
