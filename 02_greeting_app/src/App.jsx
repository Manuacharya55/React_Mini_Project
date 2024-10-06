import { useState, useRef } from "react";

function App() {
  const [user ,setUserName] = useState(null)
  const userName = useRef();
  const handleClick = () =>{
   setUserName(userName.current.value);
  }
  console.log(user)
  return (
    <>
    <h1 id="welcome-msg">{user !== null ? `welcome ${user}` : ""}</h1>
      <form action="" onSubmit={(e)=> e.preventDefault()}>
        <h1>Custom Greeting</h1>
        <input type="text" placeholder="Enter The Name" ref={userName}/>
        <input type="submit" value="Greet" onClick={handleClick} />
      </form>
    </>
  );
}

export default App;
