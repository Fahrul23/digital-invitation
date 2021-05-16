import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (
        <div>
            <div class="deznav" style={{backgroundColor: '#9c00e2'}}>
                <div class="deznav-scroll">
                    <ul class="metismenu" id="menu">
                        <li>
                            <Link to="/admin" class="has-arrow ai-icon" aria-expanded="false">
                                <i class="flaticon-381-networking text-white"></i>
                                <span class="nav-text text-white">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/pasangan" class="ai-icon" aria-expanded="false">
                                <i class="flaticon-381-notepad text-white"></i>
                                <span class="nav-text text-white">Pasangan</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/tamuundangan" class="ai-icon" aria-expanded="false">
                                <i class="flaticon-381-notepad text-white"></i>
                                <span class="nav-text text-white">Tamu Undangan</span>
                            </Link>
                        </li>
                        <li><a href="widget-basic.html" class="ai-icon" aria-expanded="false">
                                <i class="flaticon-381-notepad text-white"></i>
                                <span class="nav-text text-white">Widget</span>
                            </a>
                        </li>
                        <li><a href="widget-basic.html" class="ai-icon" aria-expanded="false">
                                <i class="flaticon-381-heart text-white"></i>
                                <span class="nav-text text-white">Widget</span>
                            </a>
                        </li>
                        <li><a href="widget-basic.html" class="ai-icon" aria-expanded="false">
                                <i class="flaticon-381-notepad text-white"></i>
                                <span class="nav-text text-white">Widget</span>
                            </a>
                        </li>
                        <li><a href="widget-basic.html" class="ai-icon" aria-expanded="false">
                                <i class="flaticon-381-heart text-white"></i>
                                <span class="nav-text text-white">Widget</span>
                            </a>
                        </li>
                    
                    </ul>
                
                </div>
            </div>
        </div>
    );
}

export default Sidebar;