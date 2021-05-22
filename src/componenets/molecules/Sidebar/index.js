import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (
        <div>
            <div class="deznav" style={{backgroundColor: '#9c00e2'}}>
                <div class="deznav-scroll">
                    <ul class="metismenu" id="menu">
                        <li>
                            <Link to="/admin/dashboard" class="has-arrow ai-icon" aria-expanded="false">
                                <i class="flaticon-381-networking text-white"></i>
                                <span class="nav-text text-white">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/pasangan" class="ai-icon" aria-expanded="false">
                                <i class="flaticon-381-user-9 text-white"></i>
                                <span class="nav-text text-white">Pasangan</span>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/admin/acara" class="ai-icon" aria-expanded="false">
                                <i class="flaticon-381-calendar-1 text-white"></i>
                                <span class="nav-text text-white">Acara</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/galeri" class="ai-icon" aria-expanded="false">
                                <i class="flaticon-381-photo-camera text-white"></i>
                                <span class="nav-text text-white">Galeri Foto</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/tamuundangan" class="ai-icon" aria-expanded="false">
                                <i class="flaticon-381-user-7 text-white"></i>
                                <span class="nav-text text-white">Tamu Undangan</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/perjalanancinta" class="ai-icon" aria-expanded="false">
                                <i class="flaticon-381-heart text-white"></i>
                                <span class="nav-text text-white">Perjalanan Cinta</span>
                            </Link>
                        </li>
                       
                    
                    </ul>
                
                </div>
            </div>
        </div>
    );
}

export default Sidebar;