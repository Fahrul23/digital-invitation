import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Footer, Header, Sidebar } from '../componenets';

function Galeri(props) {

    const dispatch = useDispatch();

    const {toogle} = useSelector(state => state.globalReducer);

    function toogleSidebar(){
        dispatch({type:'UPDATE_TOOGLE'})
    }
    const menutoogle = toogle == true ? "menu-toggle" : null;
  
    return (
        <>
            <div id="main-wrapper" class={`${menutoogle}`}>
            
                {/* Header */}
                    <Header toogleSidebar={toogleSidebar}/>

                {/* Sidebar */}
                    <Sidebar/>
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
                            <div class="col-xl-12 col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="basic-form custom_file_input">
                                            <form action="#">
                                                <div class="input-group">
                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input" />
                                                        <label class="custom-file-label">Choose file</label>
                                                    </div>
                                                </div>
                                                <div class="button-upload d-flex mt-3">
                                                    <button type="button" class="btn btn-rounded btn-primary m-auto"><span class="btn-icon-left text-primary"><i class="fa fa-upload color-success"></i>
                                                    </span>Upload</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-xl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-5 col-xxl-12">
                                                <div class="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                                                    <div class="new-arrivals-img-contnent">
                                                        <img class="img-fluid" src="assets/dashboard/images/product/2.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-xl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-5 col-xxl-12">
                                                <div class="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                                                    <div class="new-arrivals-img-contnent">
                                                        <img class="img-fluid" src="assets/dashboard/images/product/3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-12 col-xl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-5 col-xxl-12">
                                                <div class="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                                                    <div class="new-arrivals-img-contnent">
                                                        <img class="img-fluid" src="assets/dashboard/images/product/3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>                                     
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/* Footer */}
                <Footer/>
            </div>
        </>
    );
}

export default Galeri;