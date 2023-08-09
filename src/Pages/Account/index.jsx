import { useContext } from "react"
import { Session } from "../../context/session-context"
import { Navigate } from "react-router-dom"

export default function Account() {
  const { session, logOut } = useContext(Session)


  return (
    <>
      {
        !session
          ? <Navigate to="/" replace={true} />
          : <section className="max-w-[75ch] mx-auto">
              <h1 className="text-center text-3xl font-bold underline">Account</h1>
              <div>
                <label><b><small>Nombre</small></b></label>
                <p className="text-xl">{session.name ?? ''}</p>
              </div>

              <div>
                <label><b><small>Email</small></b></label>
                <p className="text-xl">{session.email ?? ''}</p>
              </div>

              <button className="bg-violet-500 p-2 rounded-md w-full mt-3"
                onClick={logOut}>
                Sign Out
              </button>
            </section>
      }
    </>
  )
}