import { useState } from "react";

const Hello = () => {

    // Create a const with contact and setContact, Use State Hook with fName, lName and email
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    // Create a const handleChange and add an event
    // Create a const with value and name and use it in (if-else if-else statements)
    const handleChange = (event) => {
        const {value, name} = event.target

    // Input preValues when the Input is not in charged
        setContact((prevValue) => {
            if (name === "fName") {
                return {
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
                }
            } else if (name === "lName") {
                return {
                    fName: prevValue.fName, 
                    lName: value,
                    email: prevValue.email
                }
            } else if (name === "email") {
                return {
                    fName: prevValue.fName, 
                    lName: prevValue.lName,
                    email: value 
                }
            }
        });
    }  

  return (
    <div className="container">
        {/* Input the const.[fName] and const[lName] in the Heading */}
        <h1>
            Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>

        <br></br>
        
        <form>
            {/* Input onChange and value to make the function work */}
            <input
                name="fName"
                onChange={handleChange}
                placeholder="First Name"
                value={contact.fName}
            />

            <input
                name="lName"
                onChange={handleChange}
                placeholder="Last Name"
                value={contact.lName}
            />

            <input
                name="email"
                onChange={handleChange}
                placeholder="Email"
                value={contact.email}
            />
            <button>Submit</button>
        </form>
  </div>
  );
}

export default Hello