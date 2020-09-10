import React, {Component, Fragment} from 'react';
import './NavbarComp.css';
import {connect} from 'react-redux';
import {loginUserAPI} from '../config/redux/action';

class NavbarComp extends Component {

  render(){
    if(!reduxState.isLogin) {
   return (
  <nav className="navbar  navbar-expand-lg  bg-light navbar-light sticky-top">
  <div className="container"> 
  <a className="navbar-brand" href="#">GreenEarth</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sticky-nav">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="sticky-nav">
    <div className="navbar-nav ml-auto">
      <a className="nav-link" href="/">Beranda</a>                                                                          
      <a className="nav-link" href="/aboutme">Tentang Kami</a>
      <a href="/registrasi"><button  type="button" className="btn about"  > Masuk </button></a>                              
    </div>
    </div>
  </div>
</nav>

    )
}

return (  
   <nav className="navbar  navbar-expand-lg  bg-light navbar-light sticky-top">
  <div className="container"> 
  <a className="navbar-brand" href="#">GreenEarth</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sticky-nav">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="sticky-nav">
    <div className="navbar-nav ml-auto">
      <a className="nav-link" href="/">Beranda</a>                                                                           
      <a className="nav-link" href="/aboutme">Tentang Kami</a>
      <a className="nav-link" href="/aboutme">Solusi</a>                                                                     
      <a href="/registrasi"><button  type="button" className="btn about" >Logout</button></a>      
    </div>
    </div>
  </div>
</nav>

    )

  }
}
const reduxState = (state) => ({
    isLogin: state.isLogin
  })

const reduxDispatch = (dispath) => ({
    loginAPI: (data) => dispath(loginUserAPI(data))
  }) 

export default connect (reduxState, reduxDispatch) (NavbarComp);