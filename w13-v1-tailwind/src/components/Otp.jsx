import { useRef, useState } from "react";
import { Button } from "./BUttons";

export function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const [disabled, setDisabled] = useState(true);

  return (
    <div className="flex justify-center">
      <SubOtpBox
        reference={ref1}
        onDone={() => {
          ref2.current.focus();
        }}
        onBack={() => {
          ref1.current.value = "";
        }}
      />
      <SubOtpBox
        reference={ref2}
        onDone={() => {
          ref3.current.focus();
        }}
        onBack={() => {
          ref1.current.focus();
          ref1.current.value = "";
        }}
      />
      <SubOtpBox
        reference={ref3}
        onDone={() => {
          ref4.current.focus();
        }}
        onBack={() => {
          ref2.current.focus();
          ref2.current.value = "";
        }}
      />
      <SubOtpBox
        reference={ref4}
        onDone={() => {
          ref5.current.focus();
        }}
        onBack={() => {
          ref3.current.focus();
          ref3.current.value = "";
        }}
      />
      <SubOtpBox
        reference={ref5}
        onDone={() => {
          ref6.current.focus();
        }}
        onBack={() => {
          ref4.current.focus();
          ref4.current.value = "";
        }}
      />
      <SubOtpBox
        reference={ref6}
        isRef6={true}
        isDisable={setDisabled}
        onDone={() => {
          setDisabled(false);
        }}
        onBack={() => {
          ref5.current.focus();
          ref5.current.value = "";
        }}
      />
      <Button disabled={disabled}>Sign Up</Button>
    </div>
  );
}

function SubOtpBox({ reference, onDone, onBack, isRef6, setDisabled }) {
  const [inputBoxVal, setInputBoxVal] = useState("");

  return (
    <div>
      <input
        value={inputBoxVal}
        ref={reference}
        onKeyUp={(e) => {
          //only for ref 6 there is a special case.
          if (isRef6 && inputBoxVal !== "" && e.key === "Backspace") {
            console.log(
              `Ref 6 not empty + backspace is pressed  ->  clearing the value first + signup button toggle`
            );
            // setDisabled(true);
            setInputBoxVal("");
          } else if (e.key === "Backspace") {
            onBack();
          }
        }}
        onChange={(e) => {
          const val = e.target.value;
          if (
            val == "0" ||
            val == "1" ||
            val == "2" ||
            val == "3" ||
            val == "4" ||
            val == "5" ||
            val == "6" ||
            val == "7" ||
            val == "8" ||
            val == "9"
          ) {
            setInputBoxVal(val);
            onDone();
          } else {
            //value reset kar dena box ka. for reinput
          }
        }}
        className="w-[40px] h-[45px] rounded-xl bg-blue-500 m-1 outline-none cursor-pointer px-3 text-white"
      ></input>
    </div>
  );
}
