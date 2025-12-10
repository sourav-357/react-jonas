import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const state = useState(1); // Creating state variable // "useState(input)" - here input is the default value
  // function to see the current number of step and update it
  const [step, setStep] = useState(1); // "setStep" is a function to update the state
  const [isopen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        (X)
      </button>

      {isopen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""} `}>1</div>
            <div className={`${step >= 2 ? "active" : ""} `}>2</div>
            <div className={`${step >= 3 ? "active" : ""} `}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
