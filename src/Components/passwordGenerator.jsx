import { useState, useCallback, useEffect, useRef } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()=+|[]{};:/?>";

    let pass = "";
    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ch);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current ? setIsClicked(true) : setIsClicked(false);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, numAllowed, charAllowed, passGenerator]);
  return (
    <>
      <div className=" max-w-md mx-auto fixed top-20 px-2 py-4 justify-center inset-x-2 shadow-lg rounded-3xl text-orange-500 bg-gray-800 ">
        <h1 className=" text-white text-center my-3">Password Generator</h1>

        <div className=" flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`outline-none ${
              isClicked ? "bg-green-400" : "bg-blue-400"
            } text-white px-3 py-0.5 shrink-0  ${
              isClicked
                ? "hover:bg-green-400 active:bg-green-400 active:scale-95"
                : ""
            }`}
          >
            Copy
          </button>
        </div>
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg  rounded-3xl py-3 px-3">
          <div className=" flex text-sm gap-x-2">
            <div className=" flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className=" flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numInput"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numInput">Numbers</label>
            </div>
            <div className=" flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
