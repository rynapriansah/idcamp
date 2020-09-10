import React from 'react';

const Button = ({title,onClick, loading}) =>{
	if (loading){
		return <button  className="btn btn-disabled">Loading...  </button>
	}

	return (
			<button type="submit" className="btn btn-regis" onClick={onClick}> {title} </button>
		)

	}

export default Button;