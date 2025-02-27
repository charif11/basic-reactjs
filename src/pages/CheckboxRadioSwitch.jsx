import React, { useRef } from "react";

function CheckboxRadioSwitch() {
  const styles = ["blue", "orange", "cyan"];
  const sizes = ["small", "medium", "large", "larger"];
  let checkedStyles = [];
  let checkedSize = "";
  const switchReq = useRef();

  const onChangeCheckbox = (event) => {
    let checked = event.target.checked;
    let value = event.target.value;
    let idx = checkedStyles.indexOf(value);
    if (checked && idx === -1) {
      checkedStyles.push(value);
    } else {
      checkedStyles.splice(idx, 1);
    }
  };

  const onChangeRadio = (event) => (checkedSize = event.target.value);

  const onClickButton = (event) => {
    if (switchReq.current.checked) {
      if (checkedStyles.length === 0) {
        alert("Please select color");
        return;
      } else if (checkedSize === "") {
        alert("Please select size");
        return;
      }
    }
    let msg = "selected color(s): " + checkedStyles.join(", ");
    msg += "\nselected size: " + checkedSize;
    alert(msg);
  };

  return (
    <div
      className="container-sm shadow-lg rounded-4 p-4 position-absolute bg-info"
      style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
    >
      <h2 className="text-center fw-bold fs-1 mb-3">
        Checkbox Radio Switch Form
      </h2>
      <form className="w-75" style={{margin:'0 auto'}}>
        <span className="fs-4 me-4">Color</span>
        {styles.map((cl, i) => {
          return (
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value={cl}
                id="{'check'+i}"
                onChange={onChangeCheckbox}
              />
              <label className="form-check-label" htmlFor="{'check'+i}">
                {cl}
              </label>
            </div>
          );
        })}
        <hr />
        <span className="fs-4 me-4">Size</span>
        {sizes.map((sz, i) => {
          return (
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value={sz}
                name="size"
                id="{'radio'+i}"
                onChange={onChangeRadio}
              />
              <label className="form-check-label" htmlFor="{'radio'+i}">
                {sz}
              </label>
            </div>
          );
        })}
        <hr />
        <div className="form-check form-switch">
          <input
            type="checkbox"
            id="sw"
            value="require"
            ref={switchReq}
            className="form-check-input"
          />
          <label htmlFor="sw" className="form-check-label">
            require
          </label>
        </div>
        <div className="text-center mt-4">
          <button type="button" onClick={onClickButton} className="px-4 btn btn-warning btn-lg">
            OK
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckboxRadioSwitch;
