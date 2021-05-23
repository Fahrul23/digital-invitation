import React,{useState} from 'react';
import { Footer, Header, Sidebar } from '../componenets';
import { useForm } from "react-hook-form";


function TamuUndangan(props) {
    
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
                                    <span>Datatable</span>
                                </div>
                            </div>
                            <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:void(0)">Table</a></li>
                                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Datatable</a></li>
                                </ol>
                            </div>
                        </div>
                        <div class="form-head d-flex mb-3  mb-lg-5   align-items-start">
                            <a href="javascript:void(0)" class="btn btn-rounded btn-success" data-toggle="modal" data-target="#addTamuUndangan"><span class="btn-icon-left text-success"><i class="fa fa-plus color-success"></i>
                            </span>Tambah Tamu Undangan</a>
                            <div class="input-group search-area ml-auto d-inline-flex">
                                <input type="text" class="form-control" placeholder="Search here" />
                                <div class="input-group-append">
                                    <a href="javascript:void(0)" class="input-group-text"><i class="flaticon-381-search-2"></i></a>
                                </div>
                            </div>
                            <div class="dropdown ml-3 d-inline-block">
                                <div class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <i class="flaticon-381-controls-3 mr-2"></i> Filter
                                </div>
                                <div class="dropdown-menu dropdown-menu-left" x-placement="bottom-start">
                                    <a class="dropdown-item" href="#">A To Z List</a>
                                    <a class="dropdown-item" href="#">Z To A List</a>
                                </div>
                            </div>		
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Tamu Undangan</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-responsive-md">
                                                <thead>
                                                    <tr>
                                                        <th><strong>No</strong></th>
                                                        <th><strong>NAMA</strong></th>
                                                        <th><strong>HUBUNGAN</strong></th>
                                                        <th><strong>PESAN SINGKAT</strong></th>
                                                        <th><strong>Action</strong></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><strong>1</strong></td>
                                                        <td><div class="d-flex align-items-center"><span class="w-space-no">Dr. Jackson</span></div></td>
                                                        <td>Sodara</td>
                                                        <td>Tolong Datang yah</td>
                                                        <td>
                                                            <div class="d-flex">
                                                                <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                                                <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="addTamuUndangan">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Tambah Tamu Undangan</h5>
                                        <button type="button" class="close" data-dismiss="modal"><span>×</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <label class="text-black font-w500">Nama</label>
                                                <input type="text" class="form-control" placeholder="Nama" />
                                            </div>
                                            <div class="form-group">
                                                <label class="text-black font-w500">Hubungan</label>
                                                <select class="form-control default-select form-control-lg">
                                                    <option>-- Pilih --</option>
                                                    <option>Saudara</option>
                                                    <option>Teman SD</option>
                                                    <option>Teman SMP</option>
                                                    <option>Teman SMA</option>
                                                    <option>Teman Kuliah</option>
                                                    <option>Teman Kerja</option>
                                                    <option>Lainnya</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label class="text-black font-w500">Pesan Singkat (optional)</label>
                                                <textarea class="form-control" placeholder="Jangan Lupa datang yh ..."></textarea>
									
                                            </div>
                                            <div class="form-group">
                                                <button type="button" class="btn btn-primary">Tambah</button>
                                            </div>
                                        </form>
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

export default TamuUndangan;