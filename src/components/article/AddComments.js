import React, { useState } from "react";

function AddComments(props) {

    const {name , setarticleData} = props;
  //storing comments
  const [commentValues, setCommentValues] = useState({
    username: "",
    comment: "",
  });

  function handleChange(event) {
    console.log(event.target);
    const { name, value } = event.target;
    setCommentValues({...commentValues,[name]:value})
  }
  // ... is spread syntax which means upending (+=)

  async function fetchComments(){
      const username = commentValues.username;
      const text = commentValues.comment;
      const response = await fetch(`/api/article/${name}/comments`,{
          method :'post',
      body:JSON.stringify({username,text}),
      headers:{
          'Content-Type' :'application/json'
              }
      })
      const body = await  response.json();
      setarticleData(body);
      setCommentValues({username :" ", comment:" "});
  }
  return (
    <div>
      <div className="add-comment">
        <h3>Add a comment</h3>
        <label>
          Name :<br></br>
          <input
            type="text"
            name="username"
            value={commentValues.username}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <label>
          comment:
          <br></br>
          <textarea
            rows="4"
            cols="50"
            name="comment"
            value={commentValues.comment}
            onChange={handleChange}
          ></textarea>
        </label>
        <br></br>
        <button onClick={fetchComments}>Submit</button>
      </div>
    </div>
  );
}

export default AddComments;
