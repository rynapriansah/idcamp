import React, {Component, Fragment} from 'react';
import NavbarComp from '../NavbarComp';
import './TentangKami.css';
import '../BerandaContent/BerandaContent.css';
import Footer from '../BerandaContent/Footer';

class TentangKamiContent extends Component {
	render(){ 
return <Fragment> 
<NavbarComp/>
<div className="container"><br/><br/><br/>
<h1>  F.A.Q Seputar GreenEarth</h1> <br/>
	<div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn  btn-block text-left"  type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Apa Itu GreenEarth ?
        </button>
      </h2>
    </div>
    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
        GreenEarth adalah platform digital yang bertujuan untuk memudahkan masyarakat dalam menemukan solusi menjaga hutan, dimana hutan merupakan salah satu unsur penyumbang oksigen didunia.
      </div>
    </div>
  </div>
  <br/>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Apa Tujuan dari GreenEarth ?
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
        Dalam rangka memperingati Hari Kebangkitan Teknologi Nasional (Harteknas) ke-25 tanggal 10 Agustus 2020. GreenEarth dibangun untuk  solusi inovatif, nyata, mudah diadopsi dan sejalan dengan rencana aksi global sesuai kesepakatan para pemimpin dunia termasuk Indonesia, yang dikenal dengan United Nations (UN) Sustainable Development Goals (SDGs).UN SDGs berisi 17 Tujuan dan 169 Target untuk mengakhiri kemiskinan, mengurangi kesenjangan, melindungi lingkungan, dll yang diharapkan akan tercapai pada tahun 2030.
      </div>
    </div>
  </div>
  <br/>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Apa yang bisa Lakukan GreenEarth  ?
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>

  </div>
</div>
	</div>
	<br/><br/><br/>
	<Footer/>
</Fragment>
	}
}
   
export default TentangKamiContent;




