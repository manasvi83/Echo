// const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
// 	return (
//     <div className="mb-4 py-2 flex items-center">            
//             <label className={`label text-gray-400 pr-20 ${selectedGender === "male" ? "selected" : ""} `}>
//               <input type="radio" name="gender" 
//               className="mr-2" 
//               checked={selectedGender === "male"}
// 						  onChange={() => onCheckboxChange("male")}
//               />
//               Male 
//             </label>
//             <label className={`label px-2 text-gray-400 pr-20 ${selectedGender === "female" ? "selected" : ""} `}>
//               <input type="radio" name="gender" 
//               className="mr-2"  
//               checked={selectedGender === "female"}
// 						  onChange={() => onCheckboxChange("female")}
//             />
//               Female
//             </label>
//           </div>
//     );
// };
// export default GenderCheckbox;

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
      <div className="mb-4 py-2 flex items-center">
        <label className={`label text-gray-400 pr-20 ${selectedGender === "male" ? "selected" : ""}`}>
          <input 
            type="checkbox" 
            name="gender" 
            className='checkbox-xs mr-2' 
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")} 
          />
          Male
        </label>
        <label className={`label px-2 text-gray-400 pr-20 ${selectedGender === "female" ? "selected" : ""}`}>
          <input 
            type="checkbox" 
            name="gender" 
            className='checkbox-xs mr-2' 
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")} 
          />
          Female
        </label>
      </div>
    );
  };
  
  export default GenderCheckbox;
  