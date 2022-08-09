import { useState } from "react";

const Hello = () => {

    // State Hook
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    
    // Update First Name and Last Name
    const updateFName = (event) => {
        const firstName = event.target.value;
        setFName(firstName);
    };
    
    const updateLName = (event) => {
        const lastName = event.target.value;
        setLName(lastName);
    };

  return (
    <div className="container">
        <h1>
            Hello {fName} {lName}
        </h1>
        <form>
            {/* onChange and value */}
            <input
                name="fName"
                onChange={updateFName}
                placeholder="First Name"
                value={fName}
            />

            <input
                name="lName"
                onChange={updateLName}
                placeholder="Last Name"
                value={lName}
            />
            <button>Submit</button>
        </form>
  </div>
  );
}

export default Hello