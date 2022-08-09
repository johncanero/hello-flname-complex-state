import { useState } from "react";

const Hello = () => {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    
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