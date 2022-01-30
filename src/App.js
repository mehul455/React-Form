import React, { useState } from 'react'
function App() {
 const [text,setText]=useState("");
 const [body,setBody]=useState("");
 const [userid,setUser]=useState("");
const saveData=(e)=>{
  e.preventDefault()
  let data={text,body,userid}

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div style={{position:"relative",left:"40%",top:"100px"}}>
    <form onSubmit={saveData}>
      <h1>Task</h1>
      <input type="text" name="text" value={text} onChange={(e)=>{setText(e.target.value)}}  required/> <br /> <br />
      <input type="text" name="body"  value={body} onChange={(e)=>{setBody(e.target.value)}} required/> <br /> <br />
      <input type="text" name="userid"  value={userid} onChange={(e)=>{setUser(e.target.value)}} required/> <br /> <br />
      <button  >Save New User</button>
    </form>
    </div>
  );
}
export default App;