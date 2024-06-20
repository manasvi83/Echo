import React from 'react';

const GenderRadio = ({ onRadioChange, selectedGender }) => {
  return (
    <div className="mb-4 py-2 flex items-center">
      <label className="text-gray-400 pr-20">
        <input
          type="radio"
          name="gender"
          className="mr-2"
          checked={selectedGender === "male"}
          onChange={() => onRadioChange("male")}
        />
        Male
      </label>
      <label className="text-gray-400 px-2">
        <input
          type="radio"
          name="gender"
          className="mr-2"
          checked={selectedGender === "female"}
          onChange={() => onRadioChange("female")}
        />
        Female
      </label>
    </div>
  );
};

export default GenderRadio;
