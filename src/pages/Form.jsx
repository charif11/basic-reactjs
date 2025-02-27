import React, { useRef, useState } from "react";
import { Mail, LockKeyhole } from "lucide-react";

function Form() {
  const textPswd = useRef();
  const textPswd2 = useRef();
  const [errPwd, setErrPwd] = useState("");
  const [errPwd2, setErrPwd2] = useState("");

  const onBlurPassword = () => {
    let pswd = textPswd.current.value;
    if (pswd !== "" && !pswd.match(/^[0-9a-zA-Z]+$/)) {
      textPswd.current.value = "";
      setErrPwd("ต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น");
    } else {
      setErrPwd("");
    }
  };
  const onBlurPassword2 = () => {
    if (textPswd2.current.value !== textPswd.current.value) {
      textPswd2.current.value = "";
      setErrPwd2("รหัสผ่านทั้งสองไม่ตรงกัน");
    } else {
      setErrPwd2("");
    }
  };

  return (
    <div
      className="container-sm shadow-lg rounded-4 p-4 position-absolute"
      style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
    >
      <h2 className="text-center fw-bold fs-1 text-primary">Form</h2>
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

        <h6 className="text-danger">{errPwd}</h6>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <LockKeyhole size={20} />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            ref={textPswd}
            onBlur={onBlurPassword}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <h6 className="text-danger">{errPwd2}</h6>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <LockKeyhole size={20} />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            ref={textPswd2}
            onBlur={onBlurPassword2}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            {/* <LockKeyhole size={20} /> */}
          </span>
          <label className="input-group-text" htmlFor="memo">
            description
          </label>
          <textarea
            className="form-control"
            id="memo"
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

export default Form;
