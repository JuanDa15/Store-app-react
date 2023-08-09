import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <section className="max-w-[75ch] mx-auto">
      <h1 className="text-center text-3xl font-bold underline">Sign Up</h1>
      <form className="flex flex-col gap-2 mt-4">
        <input
          className="p-2 rounded-md"
          type="text"
          name="name"
          id="name"
          placeholder="jhon doe"
        />
        <input
          className="p-2 rounded-md"
          type="email"
          name="email"
          id="email"
          placeholder="jhon@doe.com"
        />
        <input
          className="p-2 rounded-md"
          type="password"
          name="password"
          id="password"
          placeholder="*********"
        />
        <input
          className="p-2 rounded-md"
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="confirm password"
        />
        <button
          className="p-3 bg-violet-800 rounded-md hover:bg-violet-950"
          type="submit"
        >
          Sign up
        </button>
      </form>
      <p className="mt-4">
        Do you have an account? <Link to="/sign-in"><b className="text-violet-500">Click here to sign in</b></Link>
      </p>
    </section>
  )
}