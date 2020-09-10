import React, {Component} from 'react';

import NavbarComp from '../NavbarComp';
import Content from './Content';
import ContentTwo from './ContentTwo';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './BerandaContent.css';

class BerandaContent extends Component {
	render(){
		return(
			<div>
			<NavbarComp/>			
            <Sidebar/>
            
			<Content
			image="https://drive.google.com/uc?export=view&id=1egLzv1DMR4-jiv85Ncpxw-sogCexIfx6"
			judul="Langkah Awal"
			name="Melindungi, memulihkan dan mendukung penggunaan yang berkelanjutan terhadap ekosistem daratan, mengelola hutan secara berkelanjutan, memerangi desertifikasi (penggurunan), dan menghambat dan membalikkan degradasi tanah dan menghambat hilangnya keanekaragaman hayati"
         />
		 	<ContentTwo/>
		 	<Content
			judul="Bagaiman GreenEarth Membantu ?"
		 	name="mendukung pengimplementasian manajemen yang berkelanjutan untuk semua tipe hutan, menghambat deforestasi, merestorasi hutan terdegradasi dan secara substansial meningkatkan aforestasi dan reforestasi secara global"
		 	image="https://drive.google.com/uc?export=view&id=1GPxNt6RdIcPYy6EsuFxJ9kBtGrLh3Sra"
            />
            <Footer/>
		 </div>
			

		)
	}
}

export default BerandaContent;