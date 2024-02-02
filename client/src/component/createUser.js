import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [userData,setUserdata] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  
  const handleSubmit = async () => {
    console.log({ name, email, age, location })
    const result = await axios.post("http://localhost:8080/users", { name, email, age, location });
    setUserdata(result);
    console.log(result);
  };

  return (
    <div>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder='Enter Name'
          onChange={(e) => setName(e.target.value)}
          required />
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
          required />
        <br /><br />
        <input
          type="number"
          name="age"
          placeholder='Enter age'
          onChange={(e) => setAge(e.target.value)}
          required />
        <br /><br />
        <input
          type='text'
          name='location'
          placeholder='Enter location'
          onChange={(e) => setLocation(e.target.value)}
          required />
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
export default CreateUser;
