import React from 'react';

const Content = (props) => {
	return <div> <section id="content">
  <div className="content-left">
    <img src={props.image}/>
  </div>
  <div className="content-right">
  <div className="content-text">
  <h2>{props.judul}</h2>
  <h5>{props.name}</h5>
  
  </div>
  </div>
</section> 
</div>
}

export default Content;