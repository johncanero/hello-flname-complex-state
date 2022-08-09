import { useState } from "react";

const Hello = () => {

    // Create a const with fullName and setFullName, Use State Hook with fName and lName
    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    });

    // Create a const handleChange and add an event
    // Create a const with value and name and use it in (if-else if statement)
    const handleChange = (event) => {
        const {value, name} = event.target

        setFullName((prevValue) => {
            if (name === "fName") {
                return {
                    fName: value,
                    lName: prevValue.lName
                }
            } else if (name === "lName") {
                return {
                    fName: prevValue.fName, 
                    lName: value
                }
            }
        });
    }  

  return (
    <div className="container">
        {/* Input the const.[fName] and const[lName] in the Heading */}
        <h1>
            Hello {fullName.fName} {fullName.lName}
        </h1>
        <form>
            {/* Input onChange and value to make the function work */}
            <input
                name="fName"
                onChange={handleChange}
                placeholder="First Name"
                value={fullName.fName}
            />

            <input
                name="lName"
                onChange={handleChange}
                placeholder="Last Name"
                value={fullName.lName}
            />
            <button>Submit</button>
        </form>
  </div>
  );
}

export default Hello