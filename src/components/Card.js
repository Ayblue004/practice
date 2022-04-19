import React from 'react';


const Card =({id,name,email})=>{
	return(
<div className ="tc bg-dark-red dib br3 pa3 ma2 grow bw2 shadow-5">
	<img alt ="photot not available" src ={`https://robohash.org/${id}?size=200x200`}/>
	<div>
		<h2> {name}</h2>
		<p>{email}</p>
		<p>{id}</p>
	</div>
</div>
		);
}

export default Card;