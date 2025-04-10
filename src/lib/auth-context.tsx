
// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { 
//   User as FirebaseUser,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged
// } from "firebase/auth";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { auth, db } from "./firebase";
// import { User, UserRole } from "./types";

// interface AuthContextType {
//   currentUser: FirebaseUser | null;
//   userData: User | null;
//   loading: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   signup: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
//   logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
//   const [userData, setUserData] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   async function login(email: string, password: string) {
//     await signInWithEmailAndPassword(auth, email, password);
//   }

//   async function signup(email: string, password: string, name: string, role: UserRole) {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
//     // Create user document in Firestore
//     const userDoc = {
//       id: userCredential.user.uid,
//       email,
//       name,
//       role,
//       createdAt: new Date()
//     };
    
//     await setDoc(doc(db, "users", userCredential.user.uid), userDoc);
//   }

//   async function logout() {
//     await signOut(auth);
//     setUserData(null);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       setCurrentUser(user);
      
//       if (user) {
//         try {
//           const docRef = doc(db, "users", user.uid);
//           const docSnap = await getDoc(docRef);
          
//           if (docSnap.exists()) {
//             setUserData(docSnap.data() as User);
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       }
      
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     userData,
//     loading,
//     login,
//     signup,
//     logout
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }
