import React from 'react';

export default function Comments(props) {
    const {comments} = props;
  return (
  <div>
      {comments.map((i,key)=>(
          <div key = {key}>
              <h4>{i.username}</h4>
              <p>{i.text}</p>
          </div>
      )

      )}

  </div>
  );
}
