import React from 'react';

function UpvotesSection({name ,setarticleData,upvotes }) {
   // const  {name , upvotes , setarticleData} = props;
    async function fetchupvotes() {
        try {
          const response = await fetch(`/api/article/${name}/upvotes`,{method :'post'});
          if (response.ok) {
            const body = await response.json();
            console.log(body);
            setarticleData(body);
          } else {
          }
        } catch (error) {}
      }
  return(
    <div>
        <button onClick={fetchupvotes}>
            💖
        </button>
        <p>This article Has {upvotes} Upvotes </p>
    </div>
  ) ;
}

export default UpvotesSection;
