import React from "react";

const Question = ({ question, options, selectedOption, onSelect }) => {
  const handleOptionSelect = (optionIndex) => {
    onSelect(optionIndex);
  };

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li style={{listStyle:'none'}} key={index}>
            <label>
              <input
                type="radio"
                checked={selectedOption === index}
                onChange={() => handleOptionSelect(index)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
