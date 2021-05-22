import React,{forwardRef, useState} from 'react';
import { Footer, Header, Sidebar } from '../componenets';
import avatar from '../assets/img/avatar/profile.png';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";

function Acara(props) {
    const [dateAkad, setDateAkad] = useState(new Date());
    const [startTimeAkad, setStartTimeAkad] = useState(new Date());
    const [endTimeAkad, setEndTimeAkad] = useState(new Date());

    const [dateResepsi, setDateResepsi] = useState(new Date());
    const [startTimeResepsi, setStartTimeResepsi] = useState(new Date());
    const [endTimeResepsi, setEndTimeResepsi] = useState(new Date());

    const [on, setOn] = useState(false)

    function toogleSidebar(){
        setOn(!on);
    }
    
    const navaction = on == true ? "menu-toggle" : null;
  

    return (

        <>
            <div id="main-wrapper" class={`${navaction} show`}>
                            
                {/* Header */}
                    <Header toogleSidebar={toogleSidebar}/>

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
                                        <h4 class="card-title">Akad</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="basic-form">
                                            <form>
                                                <div class="form-row"> 	
                                                    <div class="form-group tanggal col-md-12 mt-3">
                                                        <label>Tangal</label>
                                                        <DatePicker  
                                                            className="form-control" 
                                                            placeholder="Nama Lengkap" 
                                                            dateFormat="dd/MM/yyyy" 
                                                            selected={dateAkad} 
                                                            onChange={date => setDateAkad(date)} />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>WaKtu Mulai</label>
                                                        <DatePicker
                                                            selected={startTimeAkad}
                                                            onChange={date => setStartTimeAkad(date)}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={5}
                                                            className="form-control"
                                                            timeCaption="Time"
                                                            dateFormat="h:mm aa"
                                                        />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Waktu Selesai</label>
                                                        <DatePicker
                                                            selected={endTimeAkad}
                                                            onChange={date => setEndTimeAkad(date)}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={5}
                                                            className="form-control"
                                                            timeCaption="Time"
                                                            dateFormat="h:mm aa"
                                                        />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Tempat</label>
                                                        <input type="text" class="form-control" placeholder="Tempat Akad" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Alamat</label>
                                                        <input type="text" class="form-control" placeholder="Alamat Akad" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>                                                                                    </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Resepsi</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="basic-form">
                                        <form>
                                                <div class="form-row"> 	
                                                    <div class="form-group tanggal col-md-12 mt-3">
                                                        <label>Tangal</label>
                                                        <DatePicker  
                                                        className="form-control" 
                                                        placeholder="Nama Lengkap" 
                                                        dateFormat="dd/MM/yyyy" 
                                                        selected={dateResepsi} 
                                                        onChange={date => setDateResepsi(date)} />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>WaKtu Mulai</label>
                                                        <DatePicker
                                                            selected={startTimeResepsi}
                                                            onChange={date => setStartTimeResepsi(date)}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={5}
                                                            className="form-control"
                                                            timeCaption="Time"
                                                            dateFormat="h:mm aa"
                                                        />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Waktu Selesai</label>
                                                        <DatePicker
                                                            selected={endTimeResepsi}
                                                            onChange={date => setEndTimeResepsi(date)}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={5}
                                                            className="form-control"
                                                            timeCaption="Time"
                                                            dateFormat="h:mm aa"
                                                        />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Tempat</label>
                                                        <input type="text" class="form-control" placeholder="Tempat Resepsi" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Alamat</label>
                                                        <input type="text" class="form-control" placeholder="Alamat Resepsi" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>                                                                                    </div>
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

export default Acara;