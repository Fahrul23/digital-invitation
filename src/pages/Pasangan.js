import React,{useState} from 'react';
import { Footer, Header, Sidebar } from '../componenets';
import avatar from '../assets/img/avatar/profile.png';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


function Pasangan(props) {
    
    const [dataPasangan, setDataPasangan] = useState([]);
    const [fotoPria, setFotoPria] = useState();    
    const [imgPreviewPria, setImgPreviewPria] = useState(null);    
    const [fotoWanita, setFotoWanita] = useState();    
    const [imgPreviewWanita, setImgPreviewWanita] = useState(null);    
    
    
    // React-hook-Form
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }, 
    } = useForm({
        defaultValues :{
            NamaLengkapPria: null,
            NamaPanggilanPria: null,
            FotoPria:  null, 
            NamaAyahPria:null,
            NamaIbuPria:null,
            AlamatPria:null,
            AkunInstagramPria:null,
            NamaLengkapWanita: null,
            NamaPanggilanWanita: null,
            FotoWanita:null,
            NamaAyahWanita:null,
            NamaIbuWanita:null,
            AlamatWanita:null,
            AkunInstagramWanita:null
        }
    });

    const changeFotoPria =(e) =>{
        const file = e.target.files[0]; 
        setImgPreviewPria(URL.createObjectURL(file))
        setFotoPria(file);
        
    }
    const cek =() =>{
        console.log(fotoPria);
    }
    const changeFotoWanita =(e) =>{
        const file = e.target.files[0]; 
        setImgPreviewWanita(URL.createObjectURL(file))
        setFotoWanita(file);
    }
    

    const onSubmit = (data)=>{

        // const dataform1 = new FormData();
        // dataform1.append('title','title');
        // dataform1.append('NamalengkapPria',data.NamaLengkapPria);
        // dataform1.append('NamaPanggilanPria',data.NamaPanggilanPria);
        // dataform1.append('FotoPria',fotoPria);
        // dataform1.append('NamaAyahPria',data.NamaAyahPria);
        // dataform1.append('NamaIbuPria',data.NamaIbuPria);
        // dataform1.append('AlamatPria',data.AlamatPria);
        // dataform1.append('AkunInstagramPria',data.AkunInstagramWanita);        
        // dataform1.append('NamalengkapPria',data.NamaLengkapWanita);
        // dataform1.append('NamaPanggilanPria',data.NamaPanggilanWanita);
        // dataform1.append('FotoPria',fotoWanita);
        // dataform1.append('NamaAyahPria',data.NamaAyahWanita);
        // dataform1.append('NamaIbuPria',data.NamaIbuWanita);
        // dataform1.append('AlamatPria',data.AlamatWanita);
        // dataform1.append('AkunInstagramPria',data.AkunInstagramWanita);

        // const array = Object.entries(data)
        // const dataForm = Object.fromEntries(array);
        // console.log('data baru :',dataForm);
            const formData = new FormData();
            formData.append('NamalengkapPria',data.NamaLengkapPria);
            formData.append('NamaPanggilanPria',data.NamaPanggilanPria);
            formData.append('FotoPria',fotoPria);
            formData.append('NamaAyahPria',data.NamaAyahPria);
            formData.append('NamaIbuPria',data.NamaIbuPria);
            formData.append('AlamatPria',data.AlamatPria);
            formData.append('AkunInstagramPria',data.AkunInstagramPria); 
            formData.append('NamalengkapWanita',data.NamaLengkapWanita);
            formData.append('NamaPanggilanWanita',data.NamaPanggilanWanita);
            formData.append('FotoWanita',fotoWanita);
            formData.append('NamaAyahWanita',data.NamaAyahWanita);
            formData.append('NamaIbuWanita',data.NamaIbuWanita);
            formData.append('AlamatWanita',data.AlamatWanita);
            formData.append('AkunInstagramWanita',data.AkunInstagramWanita); 
            
                axios.post('http://127.0.0.1:8000/api/pasangan',formData,{
                    headers:{
                        'content-type' : 'multipart/form-data'
                    }
                }).then(res => {
                    console.log('post success', res);
                })
                .catch(err => {
                    console.log('err : ',err)
                })
        
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
                                                    <img src={imgPreviewPria ? imgPreviewPria : avatar} class="img-fluid rounded-circle d-flex m-auto" width="270" alt="" />
                                                </div>
                                                <div class="form-row"> 	
                                                    <div class="input-group">
                                                        <div class="custom-file">
                                                            <input 
                                                                type="file" 
                                                                class="custom-file-input"
                                                                onChange={(e)=>{ changeFotoPria(e) }} 
                                                            />
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
                                                            {...register('NamaLengkapPria', {
                                                                required: "nama lengkap tidak boleh kosong",
                                                                minLength: {
                                                                  value: 3,
                                                                  message: "nama lengkap minimal 3 karakter"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        {errors.NamaLengkapPria &&  <small className="text-danger mt-2" >{errors.NamaLengkapPria.message}</small>}
                               
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Panggilan</label>
                                                        <input 
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Nama Panggilan" 
                                                            {...register('NamaPanggilanPria', {
                                                                required: "nama panggilan tidak boleh kosong",
                                                                minLength: {
                                                                  value: 3,
                                                                  message: "nama panggilan minimal 3 karakter"
                                                                },
                                                                })
                                                            }
                                                        
                                                        />
                                                        {errors.NamaPanggilaPria &&  <small className="text-danger mt-2" >{errors.NamaPanggilaPria.message}</small>}
                               
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Ayah</label>
                                                        <input 
                                                            type="text" 
                                                            class="form-control" 
                                                            placeholder="Nama Ayah" 
                                                            {...register('NamaAyahPria', {
                                                                required: "Nama Ayah tidak boleh kosong",
                                                                minLength: {
                                                                  value: 3,
                                                                  message: "Nama Ayah minimal 3 karakter"
                                                                },
                                                                })
                                                            }
                                                        
                                                        />
                                                        {errors.NamaAyahPria &&  <small className="text-danger mt-2" >{errors.NamaAyahPria.message}</small>}
                               
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Ibu</label>
                                                        <input 
                                                            type="text" 
                                                            class="form-control" 
                                                            placeholder="Nama Ibu" 
                                                            {...register('NamaIbuPria', {
                                                                required: "Nama ibu tidak boleh kosong",
                                                                minLength: {
                                                                  value: 3,
                                                                  message: "Nama ibu minimal 3 karakter"
                                                                },
                                                                })
                                                            }
                                                        
                                                        />
                                                        {errors.NamaIbuPria &&  <small className="text-danger mt-2" >{errors.NamaIbuPria.message}</small>}
                               
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Alamat</label>
                                                        <input 
                                                            type="text" 
                                                            class="form-control" 
                                                            placeholder="Nama Panggilan" 
                                                            {...register('AlamatPria', {
                                                                required: "Alamat tidak boleh kosong",
                                                                minLength: {
                                                                  value: 5,
                                                                  message: "Alamat minimal 5 karakter"
                                                                },
                                                                })
                                                            }
                                                        
                                                        />
                                                        {errors.AlamatPria &&  <small className="text-danger mt-2" >{errors.AlamatPria.message}</small>}
                               
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Akun Instagram</label>
                                                        <input 
                                                            type="text" 
                                                            class="form-control" 
                                                            placeholder="@instagram" 
                                                            {...register('AkunInstagramPria', {
                                                                required: "Akun Instagram tidak boleh kosong",
                                                                minLength: {
                                                                  value: 5,
                                                                  message: "Akun Instagram minimal 5 karakter"
                                                                },
                                                                })
                                                            }
                                                        
                                                        />
                                                        {errors.AkunInstagramPria &&  <small className="text-danger mt-2" >{errors.AkunInstagramPria.message}</small>}
                               
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
                                        <h4 class="card-title">Mempelai Wanita</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="basic-form">
                                            <form>
                                                <div class="profile-photo photo-section mb-3">
                                                    <img src={imgPreviewWanita ? imgPreviewWanita : avatar} class="img-fluid rounded-circle d-flex m-auto" width="270" alt="" />
                                                </div>
                                                <div class="form-row"> 	
                                                    <div class="input-group">
                                                        <div class="custom-file">
                                                            <input 
                                                                type="file" 
                                                                class="custom-file-input" 
                                                                onChange={(e)=>{changeFotoWanita(e);setValue("FotoWanita", e.target.files[0].name)}} 
                                                                
                                                            
                                                            />
                                                            {errors.FotoWanita &&  <small className="text-danger mt-2" >{errors.FotoWanita.message}</small>}
                                   
                                                            <label class="custom-file-label">Choose file</label>
                                                        </div>											
                                                    </div>
                                                    
                                                    <div class="form-group col-md-12 mt-3">
                                                        <label>Nama Lengkap</label>
                                                        <input 
                                                            type="text" 
                                                            class="form-control" 
                                                            placeholder="Nama Lengkap" 
                                                            {...register('NamaLengkapWanita', {
                                                                required: "nama lengkap tidak boleh kosong",
                                                                minLength: {
                                                                  value: 3,
                                                                  message: "nama lengkap minimal 3 karakter"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        {errors.NamaLengkapWanita &&  <small className="text-danger mt-2" >{errors.NamaLengkapWanita.message}</small>}
                               
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Panggilan</label>
                                                        <input 
                                                            type="text" 
                                                            class="form-control" 
                                                            placeholder="Nama Panggilan" 
                                                            {...register('NamaPanggilanWanita', {
                                                                required: "Nama panggilan tidak boleh kosong",
                                                                minLength: {
                                                                  value: 3,
                                                                  message: "Nama Panggilan minimal 3 karakter"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        {errors.NamaPanggilanWanita &&  <small className="text-danger mt-2" >{errors.NamaPanggilanWanita.message}</small>}
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Ayah</label>
                                                        <input 
                                                            type="text" 
                                                            class="form-control" 
                                                            placeholder="Nama Ayah" 
                                                            {...register('NamaAyahWanita', {
                                                                required: "Nama ayah tidak boleh kosong",
                                                                minLength: {
                                                                  value: 3,
                                                                  message: "Nama ayah minimal 3 karakter"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        {errors.NamaAyahWanita &&  <small className="text-danger mt-2" >{errors.NamaAyahWanita.message}</small>}
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nama Ibu</label>
                                                        <input 
                                                            type="text" 
                                                            class="form-control" 
                                                            placeholder="Nama Ibu"
                                                            {...register('NamaIbuWanita', {
                                                                required: "Nama ibu tidak boleh kosong",
                                                                minLength: {
                                                                  value: 3,
                                                                  message: "Nama ibu minimal 3 karakter"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        {errors.NamaIbuWanita &&  <small className="text-danger mt-2" >{errors.NamaIbuWanita.message}</small>}
                                                     
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Alamat</label>
                                                        <input 
                                                            type="text" 
                                                            class="form-control" 
                                                            placeholder="Nama Panggilan" 
                                                            {...register('AlamatWanita', {
                                                                required: "Alamat  tidak boleh kosong",
                                                                minLength: {
                                                                  value: 5,
                                                                  message: "Alamat minimal 5 karakter"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        {errors.AlamatWanita &&  <small className="text-danger mt-2" >{errors.AlamatWanita.message}</small>}
                                                     
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Akun Instagram</label>
                                                        <input 
                                                            type="text" 
                                                            class="form-control" 
                                                            placeholder="@user" 
                                                            placeholder="Nama Panggilan" 
                                                            {...register('AkunInstagramWanita', {
                                                                required: "Akun Instagram  tidak boleh kosong",
                                                                minLength: {
                                                                  value: 5,
                                                                  message: "Akun Instagram minimal 5 karakter"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        {errors.AkunInstagramWanita &&  <small className="text-danger mt-2" >{errors.AkunInstagramWanita.message}</small>}
                                                     
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
                                            <button className="btn btn-light">Batal</button>
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