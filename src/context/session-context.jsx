import { createContext } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TOKEN_KEY = 'token';
const SESSION = 'USER_DATA';
const REMEMBER = 'REMEMBER';
export const Session = createContext();

export function SessionProvider({ children }) {
  const [token, setToken] = useLocalStorage(TOKEN_KEY, null)
  const [session, setSession] = useLocalStorage(SESSION, null)
  const [remember, setRemember] = useLocalStorage(REMEMBER, null)
  console.log(remember)
  const logOut = () => {
    token && setToken(null)
    session && setSession(null)
  }

  return (
    <Session.Provider value={{
      session,
      logOut,
      setRemember,
      setSession,
      setToken,
      remember
    }}>
      {children}
    </Session.Provider>
  );
}
