
import React from "react";
import './../styles/App.css';

const App = () => {
  let [gender,setGender] = useState('');
  return (
    <div>
        <h2>Select Your Gender</h2>
        <input type="radio" name="gender" value="male" onChange={()=>{setGender='male'}}/>
        <input type="radio" name="gender" value="female" onChange={()=>{setGender='female'}}/>
        <h2>Select Your Shirt Size</h2>
       {
        (gender=='male')&&(
          <select name="opt" id="opt">
          <option value="large">Large</option>
          <option value="medium">Mediam</option>
          <option value="Small">Small</option>
        </select>
        )
       }
        {
          (gender=='female')&&(
            <select name="opt" id="opt">
              <option value="large">Large</option>
              <option value="medium">Mediam</option>
              <option value="Small">Small</option>
            </select>
          )
        }
    </div>
  )
}

export default App
