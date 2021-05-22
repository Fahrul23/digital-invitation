import React,{useState} from 'react';
import { Footer, Header, Sidebar } from '../componenets';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";



function PerjalananCinta(props) {
    
    const [on, setOn] = useState(false)
    const[dateFirst,setDateFirst] = useState(new Date());
    const[dateSecond,setDateSecond] = useState(new Date());
    const[dateThird,setDateThird] = useState(new Date());
    const[dateFourth,setDateFourth] = useState(new Date());
    function toogleSidebar(){
        setOn(!on);
    }
    const navaction = on == true ? "menu-toggle" : null;
  

    return (

        <>
            <div id="main-wrapper" class={`${navaction} show`}>
                            
                {/* Header */}
                    <Header toogleSidebar={toogleSidebar} />

                {/* Sidebar */}
                    <Sidebar />
                {/* Content */}
                <div class="content-body">
                    <div class="container-fluid">
                        <div class="row page-titles mx-0">
                            <div class="col-sm-6 p-md-0">
                                <div class="welcome-text">
                              
                                    <h4>Hi, welcome back!</h4>
                                    <span>Element</span>
                                </div>
                            </div>
                            <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:void(0)">Form</a></li>
                                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Element</a></li>
                                </ol>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-6 col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Pertama Kenal</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="basic-form">
                                            <form>
                                                <div class="form-row"> 	                                
                                                    <div class="form-group col-md-12 mt-3">
                                                        <label>Tanggal</label>
                                                        <DatePicker  
                                                            className="form-control" 
                                                            dateFormat="dd/MM/yyyy" 
                                                            selected={dateFirst} 
                                                            onChange={date => setDateFirst(date)} />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Tempat (Lokasi)</label>
                                                        <input type="text" class="form-control"  />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Deskripsi</label>
                                                        <textarea class="form-control" ></textarea>
									
                                                       </div>
                                                </div>
                                            </form>
                                        </div>                                                                                    
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Menyatakan Cinta</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="basic-form">
                                            <form>
                                                <div class="form-row"> 	                                
                                                    <div class="form-group col-md-12 mt-3">
                                                        <label>Tanggal</label>
                                                        <DatePicker  
                                                            className="form-control" 
                                                            dateFormat="dd/MM/yyyy" 
                                                            selected={dateSecond} 
                                                            onChange={date => setDateSecond(date)} />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Tempat (Lokasi)</label>
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Deskripsi</label>
                                                        <textarea class="form-control" ></textarea>
									
                                                       </div>
                                                </div>
                                            </form>
                                        </div>                                                                                    
                                    </div>
                                </div>
                            </div>        
                        </div>
                        <div class="row">
                            <div class="col-xl-6 col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Melamar</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="basic-form">
                                            <form>
                                                <div class="form-row"> 	                                
                                                    <div class="form-group col-md-12 mt-3">
                                                        <label>Tanggal</label>
                                                        <DatePicker  
                                                            className="form-control" 
                                                            dateFormat="dd/MM/yyyy" 
                                                            selected={dateThird} 
                                                            onChange={date => setDateThird(date)} />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Tempat (Lokasi)</label>
                                                        <input type="text" class="form-control"  />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Deskripsi</label>
                                                        <textarea class="form-control" ></textarea>
									
                                                       </div>
                                                </div>
                                            </form>
                                        </div>                                                                                    
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Tunangan</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="basic-form">
                                            <form>
                                                <div class="form-row"> 	                                
                                                    <div class="form-group col-md-12 mt-3">
                                                        <label>Tanggal</label>
                                                        <DatePicker  
                                                            className="form-control" 
                                                            dateFormat="dd/MM/yyyy" 
                                                            selected={dateFourth} 
                                                            onChange={date => setDateFourth(date)} />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Tempat (Lokasi)</label>
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Deskripsi</label>
                                                        <textarea class="form-control" ></textarea>
									
                                                       </div>
                                                </div>
                                            </form>
                                        </div>                                                                                    
                                    </div>
                                </div>
                            </div>        
                        </div>
                        <div className="row page-titles mx-0">
                            <div className="col-md-12 p-md-0">
                                <div className="welcome-text d-flex">
                                    <div className="m-auto">
                                        <button type="submit" className="btn mr-2 btn-primary" >Simpan</button>
                                        <button type="submit" className="btn btn-light">Batal</button>
                                    </div>       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </>
            
    );
}

export default PerjalananCinta;