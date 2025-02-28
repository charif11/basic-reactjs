import React, { useRef, useState } from "react";

function SelectFileForm() {
  let [total, setTotal] = useState();
  const inputFile = useRef();
  const selectMaxNumFiles = useRef();
  const selectMaxSize = useRef();
  let maxNumFiles = [1, 2, 3, 4, 5];
  let maxFilesSize = [50, 100, 200, 500, 1000];

  const onClickButton = () => {
    let maxNumFiles = selectMaxNumFiles.current.value;
    let maxSize = selectMaxSize.current.value;
    let isValid = true;

    if (inputFile.current.files.length > maxNumFiles) {
      alert("เลือกได้ไม่เกิน" + maxNumFiles + "ไฟล์");
      return;
    }
    for (const f of inputFile.current.files) {
      if (f.size > maxSize * 1000) {
        alert(`ขนาดของไฟล์ต้องไม่เกิน ${maxSize} KB`);
        isValid = false; // ถ้าเจอไฟล์เกินขนาด ให้เปลี่ยนเป็น false
        break; // ออกจาก loop ทันที (ป้องกัน alert ซ้ำซ้อน)
      }
    }

    if (inputFile.current.files.length === 0) {
      alert("Please input file !!");
      isValid = false;
    }
    if (isValid) {
      alert("Files OK");
    }
  };

  const formatFileSize = (sizeInBytes) => {
    if (sizeInBytes < 1024) {
      return sizeInBytes + " Bytes";
    } else if (sizeInBytes < 1024 * 1024) {
      return (sizeInBytes / 1024).toFixed(2) + " KB";
    } else if (sizeInBytes < 1024 * 1024 * 1024) {
      return (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB";
    } else {
      return (sizeInBytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    }
  };

  const handleFileChange = () => {
    let totalSize = 0; // ตัวแปรเก็บขนาดไฟล์รวมทั้งหมด

    for (const f of inputFile.current.files) {
      let size = f.size; // ดึงขนาดไฟล์เป็น bytes
      totalSize += size; // บวกขนาดไฟล์เข้ากับตัวแปรรวม
      console.log({ "file name": f.name, "file size": formatFileSize(size) });
    }

    // แสดงขนาดไฟล์รวมทั้งหมด
    let formated = formatFileSize(totalSize);
    console.log("Total size of all files:", formated);
    setTotal("ขนาดไฟล์ปัจจุปัน " + formated);
  };

  return (
    <div>
      <div
        className="shadow-lg rounded-4 p-4 position-absolute"
        style={{
          width: "80%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <h2 className="text-center fw-bold fs-1 mb-3">Upload Files</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="maxNumFiles" className="form-check-label">
              จำนวนไฟล์สูงสุด
            </label>
            <select
              id="maxNumFiles"
              ref={selectMaxNumFiles}
              className="form-select form-select-sm"
            >
              {maxNumFiles.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="maxFileSize" className="form-check-label">
              ขนาดไฟล์สูงสุด (KB)
            </label>
            <select
              id="maxFileSize"
              ref={selectMaxSize}
              className="form-select form-select-sm"
            >
              {maxFilesSize.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="file" className="form-label mb-0">
              เลือกไฟล์
            </label>
            <div className="mb-1 text-light bg-info">{total}</div>
            <input
              type="file"
              onChange={handleFileChange}
              id="file"
              accept="image/*"
              ref={inputFile}
              className="form-control form-control-sm"
              multiple
            />
          </div>

          <div className="d-grid mx-5">
            <button
              className="btn btn-primary mt-2"
              onClick={onClickButton}
              type="button"
            >
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SelectFileForm;
