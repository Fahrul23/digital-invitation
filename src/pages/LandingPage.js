import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(props) {
    return (
        <div>
            <header id="header-eight" class="main-header-eight">
                <div class="appheader-content">
                    <div class="site-logo float-left">
                        <a href="#"><img src="assets/img/app-landing/logo/logo1.png" alt="" /></a>
                    </div>
                    <nav class="navigation-eight ul-li">
                        <ul>
                            
                            <li><a class="nav-link" href="#">Home</a></li>
                            <li><a class="nav-link" href="#">Fitur</a></li>
                            <li><a class="nav-link" href="#">Harga</a></li>
                            <li><a class="nav-link" href="#">Tema</a></li>
                            <li><a class="nav-link" href="#">Tutorial</a></li>
                            
                        </ul>
                    </nav>
                    <div class="h-eight-social ul-li float-right clearfix">
                        <ul>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>
                    <div class="sign-up-btn-eight text-center float-right clearfix ">
                        <Link to="/login">sign In</Link>
                    </div>
                    
                </div>
                <div class="appi-ei-mobile_menu relative-position">
                    <div class="appi-ei-mobile_menu_button appi-ei-open_mobile_menu">
                        <i class="fas fa-bars"></i>
                    </div>
                    <div class="appi-ei-mobile_menu_wrap">
                        <div class="mobile_menu_overlay appi-ei-open_mobile_menu"></div>
                        <div class="appi-ei-mobile_menu_content">
                            <div class="appi-ei-mobile_menu_close appi-ei-open_mobile_menu">
                                <i class="far fa-times-circle"></i>
                            </div>
                            <div class="m-brand-logo text-center">
                                <img src="assets/img/app-landing/logo/f-logo.png" alt="" />
                            </div>
                            <nav class="appi-ei-mobile-main-navigation  clearfix ul-li">
                                <ul id="main-nav" class="navbar-nav text-capitalize clearfix">
                                    <li><a class="nav-link" href="#">Home</a></li>
                                    <li><a class="nav-link" href="#">Fitur</a></li>
                                    <li><a class="nav-link" href="#">Harga</a></li>
                                    <li><a class="nav-link" href="#">Tema</a></li>
                                    <li><a class="nav-link" href="#">Tutorial</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <section id="eight-banner" class="eight-banner-section position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="eight-banner-content">
                                <div class="banner-content-box appeight-headline pera-content">
                                    <h1 class="cd-headline clip is-full-width">
                                        Undangan Pernikahan Digital
                                        <span class="cd-words-wrapper">
                                            <b class="is-visible">Mudah</b>
                                            <b>Cepat</b>
                                            <b>Murah</b>
                                        </span>
                                    </h1>
                                    <p>Membuat undangan pernikahan digital dalam hitungan detik</p>
                                    <div class="ei-banner-btn">
                                        <a href="#">Buat Undangan</a>
                                    </div>
                                
                                </div>
                                <div class="ei-banner-mbl-mockup wow fadeInRight" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <img src="assets/img/app-landing/mockup/designmobile2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="waveWrapper waveAnimation">
                    <div class="waveWrapperInner bgTop">
                        <div class="wave waveTop" ></div>
                    </div>
                    <div class="waveWrapperInner bgMiddle">
                        <div class="wave waveMiddle" ></div>
                    </div>
                    <div class="waveWrapperInner bgBottom">
                        <div class="wave waveBottom" ></div>
                    </div>
                </div>
            </section>
            {/* Featured */}
            <section id="appseo-service" class="appseo-service-section position-relative">
                <div class="container">
                    <div class="eight-section-title appeight-headline pera-content text-center position-relative" style={{marginTop:50}}>
                        <span class="eg-title-tag">
                            Fetaured services <i class="square-shape"><i></i><i></i> <i></i> <i></i> </i>
                        </span>
                        <h2>Dapatkan Manfaat
                            <span>dari Aplikasi ini </span></h2>
                            </div>
                    <div class="appseo-service-content">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-5 wow fadeFromUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="appseo-service-box position-relative">
                                    <div class="appseo-service-icon-text position-relative">
                                        <div class="appseo-service-icon position-relative text-center">
                                            <svg viewBox="0 -14 512.00001 512" xmlns="http://www.w3.org/2000/svg"><path d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"/><path d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"/><path d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"/><path d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"/><path d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"/><path d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"/></svg>
                                        </div>
                                        <div class="appseo-service-text appseo-headline pera-content text-center">
                                            <h3>Sebar undangan lebih mudah
                                            </h3>
                                            <p>Hanya dengan mengirimkan link undangan anda dapat menghemat waktu dan tenaga</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-5 wow fadeFromUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div class="appseo-service-box position-relative">
                                    <div class="appseo-service-icon-text position-relative">
                                        <div class="appseo-service-icon position-relative text-center">
                                           
                                        </div>
                                        <div class="appseo-service-text appseo-headline pera-content text-center">
                                            <h3>Proses Cepat
                                            </h3>
                                            <p>Hanyan membutuhkan waktu kurang dari 10 menit anda bisa membuat undangan pernikahan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-5 wow fadeFromUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div class="appseo-service-box position-relative">
                                    <div class="appseo-service-icon-text position-relative">
                                        <div class="appseo-service-icon position-relative text-center">
                                            <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m504.5 49.692h-233.736v-42.192c0-4.142-3.357-7.5-7.5-7.5h-46.793c-4.142 0-7.5 3.358-7.5 7.5v42.192h-91.782c-4.142 0-7.5 3.358-7.5 7.5v64.482c-4.95 2.638-9.641 6.106-13.591 10.098v-22.043c0-13.597-13.527-24.762-33.647-28.469v-16.281c0-4.142-3.358-7.5-7.5-7.5-13.278 0-26.778 5.105-37.039 14.006-11.55 10.02-17.912 23.928-17.912 39.161v31.423c0 9.697 15 9.697 15 0v-31.423c0-16.417 12.217-33.998 32.451-37.529v287.704c-11.77 1.471-23.79 6.179-32.421 14.474-.016-10.213-.03-193.372-.03-193.372 0-9.697-15-9.697-15 0v232.965c0 .421.043.831.11 1.233.737 21.999 21.09 38.439 47.939 38.439 12.999 0 24.629-3.7 33.196-9.797l.004 27.573c.004 25.344 25.351 39.664 48.056 39.664 24.1-.004 48.042-13.577 48.042-39.68l-.017-106.038h213.59l-155.632 132.508c-5.203 4.429-1.971 13.21 4.862 13.21h225.868c4.143 0 7.5-3.358 7.5-7.5v-36.382c0-9.697-15-9.697-15 0v28.882h-197.989l197.989-168.569v98.311c0 9.697 15 9.697 15 0v-60.458h30.982c4.143 0 7.5-3.358 7.5-7.5v-104.684-196.908c0-4.142-3.357-7.5-7.5-7.5zm-7.5 15v181.908h-175.652v-181.908zm-241.236-49.692v191.945h-31.793v-19.167h5.446c9.697 0 9.697-15 0-15h-5.446v-19.653h12.446c9.697 0 9.697-15 0-15h-12.446v-19.653h5.446c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-5.446v-19.653h12.446c9.697 0 9.697-15 0-15h-12.446v-19.652h5.446c9.697 0 9.697-15 0-15h-5.446v-19.167zm-137.304 118.78c3.238-1.532 6.634-2.606 10.187-3.223l.046 287.704c-8.355 1.046-21.861 4.328-32.419 14.479-.017-10.073-.033-17.87-.033-18.082l-.04-246.567c-.002-13.439 8.188-27.655 22.259-34.311zm43.884 316.655c-.253-.145-.508-.288-.767-.43-8.602-4.722-19.833-7.356-31.686-7.44l-.001-9.324c3.594-.495 6.008-.458 6.066-.458 4.696-.314 7.275-2.813 7.737-7.497l-.043-271.201c9.942 2.46 18.648 7.5 18.649 13.079zm-81.246-340.706v247.486 35.684c-8.357-4.799-19.65-7.687-32.451-7.773v-9.326c3.596-.495 6.01-.457 6.066-.456 4.696-.314 7.275-2.813 7.738-7.496v-271.249c11.424 2.735 18.647 8.407 18.647 13.13zm0 308.711c0 11.448-15.135 21.12-33.049 21.12-18.798 0-32.974-10.606-32.974-24.672 0-14.244 5.163-27.735 18.572-34.548v12.61c.534 4.906 3.269 7.395 8.204 7.467 10.422-.981 21.943.185 31.261 5.301 5.377 2.953 8.424 6.703 7.986 12.722zm48.205 78.56c-.003 0-.004 0-.008 0-18.793 0-32.969-10.604-32.971-24.666-.002-14.243 5.158-27.737 18.567-34.552l.002 12.611c.535 4.905 3.27 7.394 8.204 7.465 12.723-1.196 39.861.846 39.251 18.016.002 11.449-15.131 21.124-33.045 21.126zm47.996-329.84c-.002-13.502-13.574-24.733-33.652-28.456l-.003-16.288c-.43-4.571-2.93-7.071-7.501-7.499-3.828.001-7.672.439-11.454 1.257v-51.482h84.282v149.752c0 4.142 3.358 7.5 7.5 7.5h46.793c4.143 0 7.5-3.358 7.5-7.5v-149.752h35.584v189.408 97.183h-129.019zm291.864 138.226c-2.656-1.227-5.781-.799-8.008 1.098l-52.617 44.799h-87.19v-89.683h175.652v89.683h-23.482v-39.088c0-2.924-1.7-5.582-4.355-6.809z"/><path d="m357.34 214.917h69.105c1.974 0 3.918-.808 5.311-2.205l34.552-34.525c1.408-1.407 2.199-3.316 2.199-5.306l-.01-69.007c0-4.058-3.443-7.499-7.501-7.499l-69.114.008c-1.987 0-3.895.79-5.3 2.195l-34.538 34.511c-1.394 1.39-2.205 3.344-2.205 5.311v69.017c.001 4.143 3.359 7.5 7.501 7.5zm7.5-69.017h54.105v54.017h-54.105zm69.106 43.421v-47.812l19.556-19.54.007 47.806zm-38.956-77.938 47.89-.006-19.539 19.523h-47.885z"/><path d="m392.813 314.087h-24.851c-9.697 0-9.697 15 0 15h24.851c9.697 0 9.697-15 0-15z"/><path d="m431.639 284.242h-63.677c-9.697 0-9.697 15 0 15h63.677c9.697 0 9.697-15 0-15z"/><path d="m424.727 385.308-90.555 77.1c-5.201 4.429-1.97 13.21 4.862 13.21h90.555c4.143 0 7.5-3.358 7.5-7.5v-77.1c0-5.702-7.202-10.105-12.362-5.71zm-2.638 75.31h-62.677l62.677-53.364z"/></g></svg>
                                        </div>
                                        <div class="appseo-service-text appseo-headline pera-content text-center">
                                            <h3>Fitur Lengkap
                                            </h3>
                                            <p>Semua Fitur lengkap mulai dari fitur peta lokasi, galeri foto, tamu undangan dan masih banyak lagi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </section>
            {/* Service */}
            <section id="eight-service" class="eight-service-section position-relative">
                <div class="container">
                    <div class="eight-service-slide   clearfix wow fadeFromLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div class="ei-service-slide-btn ul-li-block clearfix">
                            <div class="banner-pager clearfix" id="banner-pager">
                                <a class="pager" data-slide-index="0">
                                    <div class="ei-service-icon-text text-right appeight-headline pera-content">
                                        <div class="ei-service-icon float-right text-center">
                                            <i class="flaticon-bug"></i>
                                        </div>
                                        <div class="ei-service-text">
                                            <h3>Mudah dan cepat</h3>
                                            <p>Hanya dengan mendaftar dan anda langsung bisa membuat undangan sesuka hati anda dengan menggunakan fitur-fitur lengkap</p>
                                        </div>
                                    </div>
                                </a>
                                <a class="pager" data-slide-index="1">
                                    <div class="ei-service-icon-text text-right appeight-headline pera-content">
                                        <div class="ei-service-icon float-right text-center">
                                            <i class="flaticon-crop"></i>
                                        </div>
                                        <div class="ei-service-text">
                                            <h3>Harga Terjangkau</h3>
                                            <p>Tidak mengeluarkan budget besar untuk membuat undangan pernikahan, disini anda tinggal memilih harga sesuai keinginan anda mulai dari 65k sampai dengan 120k</p>
                                        </div>
                                    </div>
                                </a>

                                <a class="pager" data-slide-index="2">
                                    <div class="ei-service-icon-text text-right appeight-headline pera-content">
                                        <div class="ei-service-icon float-right text-center">
                                            <i class="flaticon-web-development"></i>
                                        </div>
                                        <div class="ei-service-text">
                                            <h3>Tim Support 24 Jam</h3>
                                            <p>Bila Anda mengalami kendala pada saat membuat undangan kami disini siap 24 jam membantu</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="eight-service-text position-relative appeight-headline wow fadeFromRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div class="ei-service-slide-mbl" data-background="assets/img/app-landing/mockup/smu1.png">
                            <div class="slide-inner">
                                <div class="ei-service-slide">
                                    <div class="slide-item">
                                        <div class="image">
                                            <img src="assets/img/app-landing/screenshoot/undanganmobile.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="slide-item">
                                        <div class="image">
                                            <img src="assets/img/app-landing/template/design1.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="slide-item">
                                        <div class="image">
                                            <img src="assets/img/app-landing/template/design2.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="slide-item">
                                        <div class="image">
                                            <img src="assets/img/app-landing/template/design3.png" alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <h2>Mengapa Pakai Aplikasi Ini ?</h2>
                    </div>
                </div>
                <div class="s-shape-bg1" data-parallax='{"x" : -70}'>
                    <img src="assets/img/app-landing/shape/s-shape3.png" alt="" />
                </div>
                <div class="s-shape-bg2 text-center">
                    <img src="assets/img/app-landing/shape/s-shape4.png" alt="" />
                </div>
            </section>

            <section id="saas_two_about" class="saas_two_about_section relative-position">
                <div class="container">
                    <div class="about_content_s2">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 wow fadeFromLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div class="s2-about_img">
                                    <img src="assets/img/ilustration/s_ab1.png" alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 wow fadeFromRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div class="s2-about_text_icon">
                                    <div class="s2-about_icon text-center">
                              
                                    </div>
                                    <div class="s2-about_text saas2-headline pera-content">
                                        <h3>Sebar Undangan digital ke semua sosial mediamu</h3>
                                        <p> Sudah ngga jaman Sebar undangan pernikahan masih pake cara datengin orang satu persatu, sekarang jamannya digital dan kamu bisa sebar undanganmu disini ke semua sosial media yang kamu punya</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about_content_s2">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 wow fadeFromLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div class="s2-about_text_icon">
                                    <div class="s2-about_icon text-center">
                                        <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"> <path d="m90.050781 395.949219c-7.167969 0-14.058593 1.789062-20.171875 5.148437-32.203125-41.28125-49.878906-92.5625-49.878906-145.097656 0-130.132812 105.867188-236 236-236 15.820312 0 31.632812 1.574219 47 4.679688 5.40625 1.09375 10.6875-2.40625 11.78125-7.820313s-2.40625-10.6875-7.820312-11.785156c-16.667969-3.367188-33.8125-5.074219-50.960938-5.074219-68.378906 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531 0 57.519531 19.53125 113.652344 55.089844 158.652344-4.578125 6.839844-7.039063 14.878906-7.039063 23.296875 0 11.21875 4.371094 21.765625 12.304688 29.695312 7.929687 7.933594 18.476562 12.304688 29.695312 12.304688s21.765625-4.371094 29.699219-12.304688c7.933594-7.929687 12.300781-18.480469 12.300781-29.699219 0-11.214843-4.367187-21.765624-12.300781-29.695312-7.933594-7.933594-18.480469-12.300781-29.699219-12.300781zm15.554688 57.554687c-4.152344 4.15625-9.679688 6.445313-15.554688 6.445313s-11.398437-2.289063-15.554687-6.445313-6.445313-9.679687-6.445313-15.554687c0-5.878907 2.289063-11.402344 6.445313-15.558594 4.152344-4.15625 9.679687-6.441406 15.554687-6.441406s11.398438 2.289062 15.554688 6.441406c4.15625 4.15625 6.445312 9.679687 6.445312 15.558594 0 5.875-2.289062 11.398437-6.445312 15.554687zm0 0"/> <path d="m456.902344 97.335938c10.871094-16.308594 9.125-38.605469-5.253906-52.984376-7.933594-7.929687-18.480469-12.300781-29.699219-12.300781s-21.765625 4.371094-29.699219 12.300781c-7.933594 7.933594-12.300781 18.480469-12.300781 29.699219s4.367187 21.765625 12.300781 29.699219 18.480469 12.300781 29.699219 12.300781c7.167969 0 14.058593-1.789062 20.171875-5.148437 32.203125 41.285156 49.878906 92.5625 49.878906 145.097656 0 130.132812-105.867188 236-236 236-15.664062 0-31.328125-1.542969-46.550781-4.589844-5.414063-1.082031-10.683594 2.429688-11.769531 7.84375-1.082032 5.417969 2.429687 10.683594 7.84375 11.769532 16.511718 3.300781 33.496093 4.976562 50.476562 4.976562 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-57.523438-19.535156-113.660156-55.097656-158.664062zm-50.507813-7.726563c-4.15625-4.15625-6.445312-9.679687-6.445312-15.558594 0-5.875 2.289062-11.398437 6.445312-15.554687 4.152344-4.15625 9.679688-6.445313 15.554688-6.445313s11.402343 2.289063 15.558593 6.445313c8.574219 8.578125 8.574219 22.535156 0 31.113281-4.15625 4.152344-9.683593 6.441406-15.558593 6.441406-5.878907 0-11.402344-2.289062-15.554688-6.441406zm0 0"/> <path d="m214.734375 428c0 5.523438 4.480469 10 10 10h62.527344c5.523437 0 10-4.476562 10-10v-19.386719c13.148437-3.539062 25.71875-8.75 37.53125-15.554687l13.6875 13.6875c1.875 1.875 4.417969 2.929687 7.074219 2.929687 2.648437 0 5.195312-1.054687 7.070312-2.933593l44.195312-44.226563c3.902344-3.90625 3.902344-10.238281 0-14.140625l-13.671874-13.671875c6.804687-11.8125 12.015624-24.382813 15.554687-37.53125h19.3125c5.523437 0 10-4.476563 10-10v-62.527344c0-5.523437-4.476563-10-10-10h-19.316406c-3.539063-13.144531-8.746094-25.714843-15.550781-37.527343l13.597656-13.597657c1.875-1.875 2.929687-4.421875 2.929687-7.074219-.003906-2.652343-1.058593-5.199218-2.933593-7.074218l-44.230469-44.195313c-3.902344-3.902343-10.234375-3.902343-14.140625.003907l-13.578125 13.582031c-11.8125-6.804688-24.382813-12.015625-37.53125-15.554688v-19.207031c0-5.523438-4.476563-10-10-10h-62.527344c-5.519531 0-10 4.476562-10 10v19.210938c-13.144531 3.535156-25.714844 8.746093-37.527344 15.550781l-13.582031-13.582031c-3.902344-3.902344-10.234375-3.90625-14.140625-.003907l-44.226563 44.199219c-1.878906 1.875-2.933593 4.417969-2.933593 7.070312 0 2.652344 1.054687 5.199219 2.929687 7.074219l13.597656 13.597657c-6.804687 11.8125-12.015624 24.378906-15.554687 37.527343h-19.277344c-5.523437 0-10 4.476563-10 9.996094l-.035156 62.527344c-.003906 2.652343 1.050781 5.199219 2.925781 7.074219s4.417969 2.929687 7.074219 2.929687h19.3125c3.539063 13.148437 8.75 25.71875 15.554687 37.53125l-13.671874 13.671875c-3.902344 3.902344-3.90625 10.234375 0 14.140625l44.195312 44.226563c1.875 1.875 4.417969 2.933593 7.070312 2.933593h.003907c2.652343 0 5.195312-1.054687 7.070312-2.929687l13.683594-13.6875c11.816406 6.804687 24.386719 12.015625 37.53125 15.554687zm-33.609375-55.972656c-3.957031-2.558594-9.164062-2.003906-12.5 1.328125l-12.175781 12.175781-30.058594-30.082031 12.164063-12.167969c3.332031-3.332031 3.886718-8.539062 1.328124-12.496094-9.066406-14.03125-15.441406-29.410156-18.941406-45.714844-.992187-4.605468-5.0625-7.898437-9.777344-7.898437h-17.175781l.023438-42.527344h17.152343c4.714844 0 8.785157-3.289062 9.777344-7.898437 3.5-16.300782 9.875-31.679688 18.941406-45.710938 2.558594-3.957031 2.003907-9.164062-1.328124-12.496094l-12.085938-12.089843 30.082031-30.058594 12.074219 12.078125c3.335938 3.332031 8.539062 3.882812 12.5 1.328125 14.027344-9.066406 29.40625-15.441406 45.710938-18.941406 4.605468-.992188 7.898437-5.066407 7.898437-9.777344v-17.078125h42.527344v17.074219c0 4.714843 3.289062 8.789062 7.898437 9.777343 16.300782 3.503907 31.683594 9.875 45.710938 18.941407 3.957031 2.558593 9.164062 2.007812 12.496094-1.328125l12.078124-12.074219 30.082032 30.058594-12.085938 12.085937c-3.335937 3.335938-3.886718 8.542969-1.328125 12.5 9.066407 14.03125 15.4375 29.410156 18.941407 45.710938.988281 4.609375 5.0625 7.898437 9.777343 7.898437h17.183594v42.527344h-17.183594c-4.714843 0-8.785156 3.292969-9.777343 7.898437-3.5 16.300782-9.875 31.683594-18.941407 45.710938-2.558593 3.960938-2.003906 9.167969 1.328125 12.5l12.164063 12.164062-30.058594 30.082032-12.175781-12.171875c-3.335938-3.335938-8.542969-3.886719-12.5-1.328125-14.03125 9.066406-29.410156 15.4375-45.710938 18.941406-4.609375.992188-7.898437 5.0625-7.898437 9.777344v17.253906h-42.527344v-17.253906c0-4.710938-3.292969-8.785156-7.898437-9.777344-16.300782-3.5-31.679688-9.875-45.710938-18.941406zm0 0"/> <path d="m338.628906 256c0-45.5625-37.066406-82.628906-82.628906-82.628906s-82.628906 37.066406-82.628906 82.628906 37.066406 82.628906 82.628906 82.628906 82.628906-37.066406 82.628906-82.628906zm-145.257812 0c0-34.535156 28.09375-62.628906 62.628906-62.628906s62.628906 28.097656 62.628906 62.628906-28.09375 62.628906-62.628906 62.628906-62.628906-28.09375-62.628906-62.628906zm0 0"/> <path d="m348.078125 37.820312c2.632813 0 5.210937-1.070312 7.070313-2.929687 1.859374-1.871094 2.929687-4.449219 2.929687-7.082031 0-2.617188-1.066406-5.199219-2.929687-7.070313-1.859376-1.859375-4.4375-2.929687-7.070313-2.929687-2.640625 0-5.207031 1.070312-7.066406 2.929687-1.863281 1.871094-2.933594 4.441407-2.933594 7.070313 0 2.640625 1.070313 5.210937 2.933594 7.082031 1.859375 1.859375 4.425781 2.929687 7.066406 2.929687zm0 0"/> <path d="m164.359375 474.359375c-2.628906 0-5.210937 1.070313-7.070313 2.929687-1.859374 1.859376-2.929687 4.441407-2.929687 7.070313 0 2.640625 1.070313 5.210937 2.929687 7.070313 1.859376 1.859374 4.441407 2.929687 7.070313 2.929687s5.210937-1.070313 7.070313-2.929687c1.859374-1.859376 2.929687-4.441407 2.929687-7.070313s-1.070313-5.210937-2.929687-7.070313c-1.859376-1.859374-4.441407-2.929687-7.070313-2.929687zm0 0"/> </svg>
                                    </div>
                                    <div class="s2-about_text saas2-headline pera-content">
                                        <h3>Edit Undangan digital sesukamu</h3>
                                        <p>Edit undangan sesuka hati, mulai dari menambahkan foto galeri pernikahan, edit tamu undangan, menambahkan cerita perjalanan cinta, menambahkan lokasi pernikahan dengan menggunakan google maps dan masih banyak lagi </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 wow fadeFromRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div class="s2-about_img">
                                    <img src="assets/img/ilustration/s_ab2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="eg-how-work" class="eg-how-work-section position-relative mt-5" >
                <div class="how-work-bg-shape position-absolute">
                    <img src="assets/img/app-landing/shape/hws.png" alt="" />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="ei-how-work-content-item wow fadeFromUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div class="eight-section-title appeight-headline pera-content text-left">
                                    <span class="eg-title-tag">
                                        Bagaimana Cara Mengunakan Aplikasi<i class="square-shape"><i></i><i></i><i></i><i></i></i>
                                    </span>
                                    <h2>Tutorial Menggunakan Aplikasi hanya
                                        <span>Beberapa Langkah!</span>
                                    </h2>
                                </div>

                                <div id="how-workscrollbar" class="how-work-scroller">
                                    <div class="eg-how-work-content">
                                        <div class="eg-how-work-icon-text position-relative">
                                            <span class="scroller-no">1</span>
                                            <div class="eg-how-work-icon float-left text-center">
                                                <i class="flaticon-verified-user"></i>
                                            </div>
                                            <div class="eg-how-work-text appeight-headline pera-content">
                                                <h3>Sign Up</h3>
                                                <p>Buat Akun menggunakan Email Aktif</p>
                                            </div>
                                        </div>
                                        <div class="eg-how-work-icon-text position-relative">
                                            <span class="scroller-no">2</span>
                                            <div class="eg-how-work-icon float-left text-center">
                                                <i class="flaticon-corporate-identity"></i>
                                            </div>
                                            <div class="eg-how-work-text appeight-headline pera-content">
                                                <h3>Konfirmasi Email</h3>
                                                <p>Buka Email dan klik link Konfirmasi Email</p>
                                            </div>
                                        </div>
                                        <div class="eg-how-work-icon-text position-relative">
                                            <span class="scroller-no">3</span>
                                            <div class="eg-how-work-icon float-left text-center">
                                                <i class="flaticon-verified-user"></i>
                                            </div>
                                            <div class="eg-how-work-text appeight-headline pera-content">
                                                <h3>Sign In</h3>
                                                <p>Masuk dengan menggunakan Email dan password</p>
                                            </div>
                                        </div>
                                        <div class="eg-how-work-icon-text position-relative">
                                            <span class="scroller-no">4</span>
                                            <div class="eg-how-work-icon float-left text-center">
                                                <i class="flaticon-text"></i>
                                            </div>
                                            <div class="eg-how-work-text appeight-headline pera-content">
                                                <h3>Edit Undangan</h3>
                                                <p>Edit Undangan Sesuai Keinginan</p>
                                            </div>
                                        </div>
                                        
                                        <div class="eg-how-work-icon-text position-relative">
                                            <span class="scroller-no">5</span>
                                            <div class="eg-how-work-icon float-left text-center">
                                                <i class="flaticon-idea"></i>
                                            </div>
                                            <div class="eg-how-work-text appeight-headline pera-content">
                                                <h3>Sebar Undangan</h3>
                                                <p>Kirim Link Undangan Ke semua Sosial Media</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="how-work-mockup position-relative wow fadeFromUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div class="hw-mockup-img">
                                    <img src="assets/img/app-landing/mockup/designmobile2.png" alt="" />
                                </div>
                                <div class="hw-shape1 position-absolute" data-parallax='{"x" : 40}'>
                                    <img src="assets/img/app-landing/shape/fc1.png" alt="" />
                                </div>
                                <div class="hw-shape2 position-absolute" data-parallax='{"x" : -30}'>
                                    <img src="assets/img/app-landing/shape/fc2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ei-screenshots" class="ei-screenshots-section position-relative" style={{marginTop: -120}}>
                <div class="container">
                    <div class="eight-section-title appeight-headline pera-content text-center">
                        <span class="eg-title-tag"> Themes <i class="square-shape"> <i></i><i></i><i></i><i></i></i></span>
                        <h2>Pilihan Tema
                            <span>Undangan</span></h2>
                        </div>
                        <div class="eight-feature-content">
                            <div class="row justify-content-md-center">
                                <div class="col-lg-4 col-md-6  wow fadeFromUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="eight-feature-box text-center position-relative">
                                        <a href="#">
                                            <img src="assets/img/app-landing/template/template1.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6  wow fadeFromUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="eight-feature-box text-center position-relative">
                                        <a href="#">
                                            <img src="assets/img/app-landing/template/template2.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6  wow fadeFromUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="eight-feature-box text-center position-relative">
                                        <a href="#">
                                            <img src="assets/img/app-landing/template/template3.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
            </section>

            <section id="appseo-pricing" class="appseo-pricing-section">
                <div class="container">
                    <div class="eight-section-title appseo-pricing-title appeight-headline pera-content text-center appseo-headline">
                        <span class="eg-title-tag">
                            Fetaured services <i class="square-shape"><i></i><i></i> <i></i> <i></i> </i>
                        </span>
                        <h2 style={{color:'black'}}>Tentukan pilihan
                            <span>Paket sesuai kebutuhan</span></h2>
                    </div>
                    <div class="appseo-pricing-item">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6  wow fadeFromLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div class="appseo-pricing-inner-box text-center">
                                    <div class="appseo-pricing-img">
                                        <img src="assets/img/ilustration/pv1.png" alt="" />
                                    </div>
                                    <div class="appseo-pricing-text appseo-headline">
                                        <div class="appseo-pricing-price-title">
                                            <h3>Starter Plan</h3>
                                        </div>
                                        <div class="appseo-pricing-shape text-center">
                                            <img src="assets/img/app-landing/shape/ps1.png" alt="" />
                                        </div>
                                        <div class="appseo-pricing-price">
                                            <strong>Free</strong>
                                        </div> 
                                        
                                        <div class="appseo-pricing-list text-center ul-li-block">
                                            <ul>
                                                <li>3 Tema free</li>
                                                <li>Google Maps</li>
                                                <li>3 Foto Galeri</li>
                                                <li>2 Tamu Undangan</li>
                                                <li>Buku Tamu</li>
                                                <li>Hitung Mundur Acara </li>
                                                <li>Massa Aktif 5 hari</li>
                                            </ul>
                                        </div>
                                        <div class="appseo-pricing-btn appseo-btn-hover text-center">
                                            <a href="#">Choose Plane</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeFromLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div class="appseo-pricing-inner-box text-center popular-appseo">
                                    <div class="appseo-pricing-img">
                                        <img src="assets/img/ilustration/pv2.png" alt="" />
                                    </div>
                                    <div class="appseo-pricing-text appseo-headline">
                                        <div class="appseo-pricing-price-title">
                                            <h3>Standard Plan</h3>
                                        </div>
                                        <div class="appseo-pricing-shape text-center">
                                            <img src="assets/img/app-landing/shape/ps1.png" alt="" />
                                        </div>
                                        <div class="appseo-pricing-price">
                                            <strong>65.000</strong><span></span>
                                        </div> 
                                        <div class="appseo-pricing-list text-center ul-li-block">
                                            <ul>
                                                <li>Unlimited Premium</li>
                                                <li>Google Maps</li>
                                                <li>6 Foto Galeri</li>
                                                <li>Backround Musik</li>
                                                <li>150 Tamu Undangan</li>
                                                <li>Buku Tamu</li>
                                                <li>Hitung Mundur Acara </li>
                                                <li>Amplop Digital </li>
                                                <li>Massa Aktif 1 Tahun</li>
                                            </ul>
                                        </div>
                                        <div class="appseo-pricing-btn appseo-btn-hover text-center">
                                            <a href="#">Choose Plane</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeFromLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                <div class="appseo-pricing-inner-box text-center">
                                    <div class="appseo-pricing-img">
                                        <img src="assets/img/ilustration/pv3.png" alt="" />
                                    </div>
                                    <div class="appseo-pricing-text appseo-headline">
                                        <div class="appseo-pricing-price-title">
                                            <h3>Executive Plan</h3>
                                        </div>
                                        <div class="appseo-pricing-shape text-center">
                                            <img src="assets/img/app-landing/shape/ps1.png" alt="" />
                                        </div>
                                        <div class="appseo-pricing-price">
                                            <strong>120.000</strong>
                                        </div> 
                                        
                                        <div class="appseo-pricing-list text-center ul-li-block">
                                            <ul>
                                                <li>Unlimited Tema</li>
                                                <li>Google Maps</li>
                                                <li>16 Foto Galeri</li>
                                                <li>Backround Musik</li>
                                                <li>Unlimited Tamu Undangan</li>
                                                <li>Buku Tamu</li>
                                                <li>Hitung Mundur Acara </li>
                                                <li>Amplop Digital </li>
                                                <li>Massa Aktif 1 Tahun</li>
                                            </ul>
                                        </div>
                                        <div class="appseo-pricing-btn appseo-btn-hover text-center">
                                            <a href="#">Choose Plane</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ei-footer" class="ei-footer-section position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="ei-footer-widget pera-content appeight-headline">
                                <div class="ei-footer-logo">
                                    <img src="assets/img/app-landing/logo/f-logo.png" alt="" />
                                </div>
                                <p>
                                Undangan Pernikahan Digital berbasis Website
                                </p>
                                <div class="ei-payment-mathod">
                                    <img src="assets/img/app-landing/logo/paypal.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="ei-footer-widget appeight-headline ul-li-block">
                                <h3 class="ei-widget-title">Useful link:</h3>
                                <ul>
                                    <li><a  href="#">Home</a></li>
                                    <li><a  href="#">Fitur</a></li>
                                    <li><a  href="#">Harga</a></li>
                                    <li><a  href="#">Tema</a></li>
                                    <li><a  href="#">Tutorial</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="ei-footer-widget appeight-headline  ul-li-block">
                                <h3 class="ei-widget-title">Contact:</h3>
                                <h4>
                                    <i class="fas fa-phone"></i>
                                    Call Us: (210) 123451 
                                    <span>(Sat - Thursday)</span>
                                </h4>
                                <h4>
                                    <i class="fas fa-map-marker-alt"></i>
                                    380 St Kilda Road, 
                                    <span>Melbourne, Australia</span>
                                </h4>
                                <div class="download-btn">
                                    <a href="#"><img src="assets/img/app-landing/logo/app1.png" alt="" /></a>
                                    <a href="#"><img src="assets/img/app-landing/logo/gp1.png" alt="" /></a>
                                </div>
                                <div class="ei-footer-social">
                                    <a href="#"><i class="fab fa-facebook-f "></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-dribbble"></i></a>
                                    <a href="#"><i class="fab fa-behance"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ei-footer-copyright">
                    <div class="container">
                        <div class="ei-footer-copyright-content">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="ei-copyright-text">
                                        <p>© 2020 <a href="#">Themexriver</a></p>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="ei-copyright-menu">
                                        <a href="#">Help</a>
                                        <a href="#">Terms & Conditions </a>
                                        <a href="#">Privacy </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ei-footer-shape1 position-absolute" data-parallax='{"x" : 60}'>
                    <img src="assets/img/app-landing/shape/fo-shape1.png" alt="" />
                </div>
                <div class="ei-footer-shape2 position-absolute" data-parallax='{"y" : 60}'>
                    <img src="assets/img/app-landing/shape/fo-shape2.png" alt="" />
                </div>
                <div class="ei-footer-shape3 position-absolute">
                    <img src="assets/img/app-landing/shape/eimap.png" alt="" />
                </div>
            </section>
        </div>
    );
}

export default LandingPage;