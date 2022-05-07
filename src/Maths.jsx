import React from "react";

function Add(a,b) {
    const cal = a+b;
    return cal;
}

function Sub(a,b) {
    const cal = a-b;
    return cal;
}

function Multi(a,b) {
    const cal = a*b;
    return cal;
}

function divide(a,b) {
    const cal = a/b;
    return cal;
}

function Maths(){
    return(
        <>
        <h1>2nd Project ()Simple calculator</h1>
            <h1> Addition of Two number is  {Add(3,4)} </h1>
   <h1> Substraction of Two number is{Sub(3,4)} </h1>
   <h1>Multiplication of Two number is {Multi(3,4)} </h1>
   <h1> Division of Two number is {divide(3,4)} </h1>
        </>
    )
}

export default Maths;