import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const navigate = useNavigate()
  const handleLogin = async () => {
    let user = await signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);
        navigate("/dashboard", { replace: true })

      })
  }
  return (
    <div>
      <div className="form-container-1">
        <h1>Login</h1>
        <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <span>
          <Link to={"/"}>Singup</Link>

        </span>
      </div>
    </div>
  )
}
