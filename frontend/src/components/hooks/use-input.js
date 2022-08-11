import React, { useState } from "react";

function useInput(valiateInput) {
    // console.log(valiateInput);
    const [input, setInput] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValid = valiateInput(input);
    const isInvalid = !isValid && isTouched;

    const inputOnChange = (e) => {
        setInput(e.target.value);
        setIsTouched(true);
    };

    const inputOnBlur = () => {
        setIsTouched(true);
    };

    return {
        input: input,
        isTouched,
        isInvalid,
        isValid: isValid,
        inputOnBlur,
        inputOnChange,
    };
}

export default useInput;
