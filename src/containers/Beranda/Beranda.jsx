import React, {Component, Fragment} from 'react';
import BerandaContent from '../../component/BerandaContent/BerandaContent';
import TentangKamiContent from '../../component/TentangKamiContent/TentangKamiContent';
import Login from '../Login';
import Registrasi from '../Registrasi';
import Dashboard from '../Dashboard';
import { BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {store}  from '../../config/redux';
import {Provider} from 'react-redux';


class Beranda extends Component {
	render(){
		return ( 
			<Provider store={store}>  
			<BrowserRouter>
			<Fragment>
					<Route path="/" exact component={BerandaContent}/>
					<Route path="/aboutme"  component={TentangKamiContent}/>
					<Route path="/registrasi"  component={Registrasi}/>
					<Route path="/login"  component={Login}/>
					<Route path="/dashboard"  component={Dashboard}/>
			</Fragment>
			</BrowserRouter >
			</Provider>

		)
	}
}
export default Beranda;