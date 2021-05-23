import React,{useState} from 'react';
import { Footer, Header, Sidebar } from '../componenets';
import avatar from '../assets/img/avatar/profile.png';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';


function Pasangan(props) {
    
    const {
        register,
        handleSubmit,
        formState: { errors }, 
    } = useForm({
        defaultValues :{
            NamaLengkap: null,
            NamaPanggila: null,
            NamaAyah:null,
            NamaIbu:null,
            Alamat:null,
            AkunInstagram:null
        }
    });

    const onSubmit =(data)=>{
        console.log(data)
    }

    // Toogle Sidebar
    const dispatch = useDispatch();

    const {toogle} = useSelector(state => state.globalReducer);

    function toogleSidebar(){
        dispatch({type:'UPDATE_TOOGLE'})
    }
    const menutoogle = toogle == true ? "menu-toggle" : null;
  

    return (

        <>
            <div id="main-wrapper" class={`${menutoogle} show`}>
                            
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
                                        <h4 class="card-title">Mempelai Pria</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="basic-form">
                                            <form>
                                                <div class="profile-photo photo-section mb-3">
                                                    <img src={avatar} class="img-fluid rounded-circle d-flex m-auto" width="270" alt="" />
                                                </div>
                                                <div class="form-row"> 	
                                                    <div class="input-group">
                                                        <div class="custom-file">
                                                            <input type="file" class="custom-file-input" />
                                                            <label class="custom-file-label">Choose file</label>
                                                        </div>											
                                                    </div>
                                                    
                                                    <div class="form-group col-md-12 mt-3">
                                                        <label>Nama Lengkap</label>
                                                        <input 
                                                            type="text" 
                                                            class="form-control" 
                                                            placeholder="Nama Lengkap" 
                                                            autoComplete="off"
                                                            {...register('NamaLengkap', {
                                                                required: "nama lengkap tidak boleh kosong",
                                                                minLength: {
                                                                  value: 3,
                                                                  message: "nama lengkap minimal 3 karakter"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        {errors.NamaLengkap &&  <small className="text-danger mt-2" >{errors.NamaLengkap.message}</small>}
                               
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Panggilan</label>
                                                        <input type="text" class="form-control" placeholder="Nama Panggilan" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Ayah</label>
                                                        <input type="text" class="form-control" placeholder="Nama Ayah" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Ibu</label>
                                                        <input type="text" class="form-control" placeholder="Nama Ibu" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Alamat</label>
                                                        <input type="text" class="form-control" placeholder="Nama Panggilan" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Akun Instagram</label>
                                                        <input type="text" class="form-control" placeholder="@user" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>                                                                                    </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Mempelai Wanita</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="basic-form">
                                            <form>
                                                <div class="profile-photo photo-section mb-3">
                                                    <img src={avatar} class="img-fluid rounded-circle d-flex m-auto" width="270" alt="" />
                                                </div>
                                                <div class="form-row"> 	
                                                    <div class="input-group">
                                                        <div class="custom-file">
                                                            <input type="file" class="custom-file-input" />
                                                            <label class="custom-file-label">Choose file</label>
                                                        </div>											
                                                    </div>
                                                    
                                                    <div class="form-group col-md-12 mt-3">
                                                        <label>Nama Lengkap</label>
                                                        <input type="text" class="form-control" placeholder="Nama Lengkap" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Panggilan</label>
                                                        <input type="text" class="form-control" placeholder="Nama Panggilan" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Ayah</label>
                                                        <input type="text" class="form-control" placeholder="Nama Ayah" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Ibu</label>
                                                        <input type="text" class="form-control" placeholder="Nama Ibu" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Alamat</label>
                                                        <input type="text" class="form-control" placeholder="Nama Panggilan" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Akun Instagram</label>
                                                        <input type="text" class="form-control" placeholder="@user" />
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
                                            <button onClick={handleSubmit(onSubmit)} className="btn mr-2 btn-primary" >Simpan</button>
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

export default Pasangan;