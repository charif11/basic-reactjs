import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import RefArray from './RefArray';
import '../css/Ref.css';

export default function Ref() {
    const num1 = useRef();
    const num2 = useRef();
    const operator = useRef();
    const result = useRef();

    // อ่านค่า Query String
    const location = useLocation();
    let params = new URLSearchParams(location.search);
    let kw = params.get('keyword');
    let pg = params.get('page');
    console.log({ keyword: kw, page: pg });

    const calculate = (ev) => {
        let op = ev.target.innerText;
        let n1 = parseInt(num1.current.textContent);  // ใช้ textContent แทน innerText
        let n2 = parseInt(num2.current.textContent);
        let r = eval(`${n1} ${op} ${n2}`);
        result.current.textContent = r;
        operator.current.textContent = op;
    };

    return (
        <div className="cal">
            <h3>Ref</h3>
            <span ref={num1}>15</span>
            <span ref={operator}>?</span>
            <span ref={num2}>5</span>
            <span>=</span>
            <span ref={result}>?</span>
            <div className="btn">
                <button onClick={calculate}>+</button>
                <button onClick={calculate}>-</button>
                <button onClick={calculate}>*</button>
                <button onClick={calculate}>/</button>
            </div>
            <hr />
            <RefArray />
        </div>
    );
}
