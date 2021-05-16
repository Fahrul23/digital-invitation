import React,{useState} from 'react';
import { Footer, Header, Sidebar } from '../componenets';


function TamuUndangan(props) {
    
    const [on, setOn] = useState(false)

    function sidebaraction(){
        setOn(!on);
    }
    const navaction = on == true ? "menu-toggle" : null;
  

    return (

        <>
            <div id="main-wrapper" class={`${navaction} show`}>
                            
                {/* Header */}
                    <Header />

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
                            <a href="javascript:void(0)" class="btn btn-success" data-toggle="modal" data-target="#addDoctorModal">+New Data</a>
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
                                        <h4 class="card-title">Exam Toppers</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-responsive-md">
                                                <thead>
                                                    <tr>
                                                        <th><strong>ROLL NO.</strong></th>
                                                        <th><strong>NAME</strong></th>
                                                        <th><strong>Email</strong></th>
                                                        <th><strong>Date</strong></th>
                                                        <th><strong>Status</strong></th>
                                                        <th><strong>Action</strong></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><strong>542</strong></td>
                                                        <td><div class="d-flex align-items-center"><span class="w-space-no">Dr. Jackson</span></div></td>
                                                        <td>example@example.com	</td>
                                                        <td>01 August 2020</td>
                                                        <td><div class="d-flex align-items-center"><i class="fa fa-circle text-success mr-1"></i> Successful</div></td>
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

                        <div class="modal fade" id="addDoctorModal">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Add Doctor</h5>
                                        <button type="button" class="close" data-dismiss="modal"><span>×</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <label class="text-black font-w500">Doctor Name</label>
                                                <input type="text" class="form-control" />
                                            </div>
                                            <div class="form-group">
                                                <label class="text-black font-w500">Doctor ID</label>
                                                <input type="text" class="form-control" />
                                            </div>
                                            <div class="form-group">
                                                <label class="text-black font-w500">Specialist</label>
                                                <input type="text" class="form-control" />
                                            </div>
                                            <div class="form-group">
                                                <label class="text-black font-w500">Appointment Date</label>
                                                <input type="date" class="form-control" />
                                            </div>
                                            <div class="form-group">
                                                <button type="button" class="btn btn-primary">CREATE</button>
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