import React from "react";
import { Mail, LockKeyhole } from "lucide-react";

function Login() {
  return (
    <div
      className="container-sm shadow-lg rounded-4 p-4 position-absolute"
      style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
    >
      <h2 className="text-center fw-bold fs-1 text-primary">Login Form</h2>
      <form>
        <div class="input-group my-3">
          <span class="input-group-text" id="basic-addon1">
            <Mail size={20} />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <LockKeyhole size={20} />
          </span>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="d-grid mx-5">
          <button class="btn btn-primary" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
