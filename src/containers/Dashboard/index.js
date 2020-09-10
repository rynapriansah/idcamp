import React, {Component, Fragment} from 'react';
import NavbarComp from '../../component/NavbarComp';
import {addDataApi} from '../../config/redux/action';
import {connect} from 'react-redux';
class Dashboard extends Component {
	state = {
		judul: '',
		solusi: '',
		date: ''
	}
	
	handlesaveNotes = () => {
		const {judul, solusi} = this.state;
		const data = {
			judul:judul,
			solusi:solusi,
			date: new Date().getTime(),
			userId: this.props.userData.uid
		}
	this.props.saveNotes(data)	
	console.log(data);
	alert("berhasil disimpan")
	this.setState({ 
    judul : '', 
    solusi : ''
  })
	}

	onInputChange = (e) => {
		this.setState ({
    [e.target.id] : e.target.value 
  })
	}

	render(){ 
		const {judul, solusi, date} = this.state;
	return ( 
			<Fragment>
			
			<h1>Selamat Datang</h1>
			<div className="container">
  <div className="form-group">
    <div className="col-4">
    <label> Permasalahan  </label>
    <input type="email" className="form-control" id="judul" onChange={this.onInputChange}   value={judul} placeholder="Masalah"/>
  </div>
  </div>
    <div className="form-group">
    <div className= "col-4">
    <label >Solusi</label>
    <textarea className="form-control" id="solusi" rows="4" onChange={this.onInputChange} value={solusi} ></textarea>
  </div>
  </div>
		<button className="btn btn about" onClick={this.handlesaveNotes}>Solusi</button>	
		</div>
</Fragment>
	 )

	}
}
const reduxState = (state) => ({
	userData: state.user
})

const reduxDispatch = (dispath) => ({
	saveNotes: (data) => dispath(addDataApi(data))
})

export default connect(reduxState, reduxDispatch) (Dashboard);