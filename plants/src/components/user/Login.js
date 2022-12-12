import React, { useState } from "react"
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
import jwtDecode from "jwt-decode";
import largeLogo from './../../images/full_logo.png';


const Login = () => {
  let navigate = useNavigate();

  const [ state, dispatch ] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService
      .login(username, password)
      .then(async (resp) => {
        let data = jwtDecode(resp.access)
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data
        })
        navigate('/')
      });
  }

  return (
    <div className="container pt-5 mt-3 mb-4 pb-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="text-center pt-5 mt-5">
            <body className="text-center">
              <main className="form-signin w-100 m-auto">
                <form onSubmit={handleLogin}>
                  <img className="mb-4" src={largeLogo} alt width="300" height="200"></img>
                  <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                  <div className="form-floating mt-4 mb-2">
                    <input
                      className="form-control"
                      placeholder="Username"
                      type="text"
                      id="floatingInput"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingInput">Username</label>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      id="floatingPassword"
                      name="password"
                      minLength="8"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingPassword"></label>
                  </div>
                  <input className="w-100 btn btn-lg btn-success"
                    type="submit"
                    value="Sign in"
                  />
                </form>
              </main>
            </body>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login