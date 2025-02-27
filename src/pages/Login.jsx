import React,{useRef} from "react";
import { Mail, LockKeyhole } from "lucide-react";

function Login() {
  const textPswd = useRef();
  const textPswd2 = useRef();

  const onBlurPassword = () => {
    let pswd = textPswd.current.value;
    if (pswd !== "" && !pswd.match(/^[0-9a-zA-Z]+$/)) {
      textPswd.current.value = "";
      alert("ต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น");
    }
  };
  const onBlurPassword2 = () => {
    if (textPswd2.current.value !== textPswd.current.value) {
      textPswd2.current.value = "";
      alert("รหัสผ่านทั้งสองไม่ตรงกัน");
    }
  };
  return (
    <div
      className="container-sm shadow-lg rounded-4 p-4 position-absolute"
      style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
    >
      <h2 className="text-center fw-bold fs-1 text-primary">Login Form</h2>
      <form>
        <div className="input-group my-3">
          <span className="input-group-text" id="basic-addon1">
            <Mail size={20} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <LockKeyhole size={20} />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="d-grid mx-5">
          <button className="btn btn-primary" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
