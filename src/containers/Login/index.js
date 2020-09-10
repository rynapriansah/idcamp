import React, {Component, Fragment} from 'react';
import Button from '../../component/Button';
import {connect} from 'react-redux';
import {loginUserAPI} from '../../config/redux/action';

class Login extends Component {
state = {
  email: '',
  password: ''
}
handleChangeText = (e) => {
  this.setState ({
    [e.target.id] : e.target.value 
  })
}
handleLoginSubmit = async () => {
  const {email, password} = this.state;
  const {history} = this.props;
  const res = await this.props.loginAPI({email,password}).catch(err => err)
  if(res){
  console.log('login sukses', res);
  this.setState({ 
    email : '', 
    password : ''
  })
  history.push('/dashboard')
  } else {
    console.log('login gagal')
  }
}

	render(){
		return(	
      <Fragment><a className="nav-link" style={{color:"green"}} href="/">Beranda</a> <img className="wave" src="https://drive.google.com/uc?export=view&id=1q1RV0KttoKky_crzNm2Y4_msDQzLX6X9"/>
  <div className="containerr">
    <div className="img">
      <img src="https://drive.google.com/uc?export=view&id=1qQx7dsbku0-VFw69pTmnUUS6i1X1Ja6P"/>
    </div>
    <div className="login-content">
      <div >
        <img src="https://drive.google.com/uc?export=view&id=1b-CC22zLY-NTIwCfmsLoxGP3nEjDEHC9"/>
        <h2 className="title">Halaman Login</h2>
              <div className="input-div one">
                 <div className="i">
                    <i className="fas fa-user"></i>
                 </div>
                 <div className="div">
                    <input type="email" id="email" className="form-control"  placeholder="Masukan email" onChange={this.handleChangeText} value={this.state.email}  />
                 </div>
              </div>
              <div className="input-div pass">
                 <div className="i"> 
                    <i className="fas fa-lock"></i>
                 </div>
                 <div className="div">
                    <input type="password" id="password" className="form-control"  placeholder="Masukan password" onChange={this.handleChangeText} value={this.state.password} />
                 </div>
              </div>
              <div>
            <Button onClick={this.handleLoginSubmit} title="Masuk" loading={this.props.isLoading}/>
            <a className="nav-link" href="/registrasi"  style={{color: "black"}} >Kamu Belum punya akun ? <span >Daftar disini</span>  </a>
            </div>
            </div>
        </div>
    </div>
</Fragment>
		)
	}
}
  const reduxState = (state) => ({
    isLoading: state.isLoading
  })

  const reduxDispatch = (dispath) => ({
    loginAPI: (data) => dispath(loginUserAPI(data))
  }) 

export default connect (reduxState, reduxDispatch) (Login);