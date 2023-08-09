import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Session } from "../../context/session-context";

export default function SignIn() {
  const { setRemember, setSession, setToken, remember } = useContext(Session)

  const form = useRef()
  
  useEffect(() => {
    if (form.current && remember) {
      form.current.elements.email.value = remember.email;
      form.current.elements.password.value = remember.password;
      form.current.elements['remember-me'].checked = true;
    }
  },[remember])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current)
    const data = Object.fromEntries(formData)

    if(data['remember-me'] !== null) {
      setRemember({
        email: data.email,
        password: data.password
      })
    }
    setToken(crypto.randomUUID());
    setSession({
      name: 'Jhon Doe',
      email: data.email
    })
    location.pathname = '/'
  }
  return (
    <section className="max-w-[75ch] mx-auto">
      <h1 className="text-center text-3xl font-bold underline">Log In</h1>
      <form ref={form} onSubmit={ handleSubmit } className="flex flex-col gap-2 mt-4">
        <input 
          className="p-2 rounded-md"
          type="email" 
          name="email" 
          id="email" 
          placeholder="jhon@doe.com"
          autoComplete="true"
        />
        <input 
          className="p-2 rounded-md"
          type="password" 
          name="password" 
          id="password" 
          placeholder="*********"
          autoComplete="true"
        />
        <label className="flex gap-2" htmlFor="remember-me">
          <input
            type="checkbox"
            id="remember-me"
            name="remember-me"
          /> 
          Remember me
        </label>
        <button 
          className="p-3 bg-violet-800 rounded-md hover:bg-violet-950"
          type="submit"
        >
          Log In
        </button>
      </form>
      <p className="mt-4">
        Don't have an account? <Link to="/sign-up"><b className="text-violet-500">Click here to sign up</b></Link>
      </p>
    </section>
  )
}