import React, { useState } from 'react';
import './header.css'
import { Register } from '../loginForm/index'

const Header = () => {

    return (
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-brand" href="index.html">
                    <ul className="navbar-nav ml-auto ml-md-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">Settings</a>
                                <a className="dropdown-item">
                                    <div data-toggle="modal" data-target="#exampleModalCenter">Login</div>
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="navbar-brand mx-auto logo_header" />
                {/* Navbar Search*/}
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Tìm kiếm..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button"><i className="fas fa-search" /></button>
                        </div>
                    </div>
                </form>
                {/* Navbar*/}
                {/* <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">Settings</a>
                            <a className="dropdown-item" href="#">Activity Log</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="login.html">Logout</a>
                        </div>
                    </li>
                </ul> */}
            </nav>
            <nav className="sb-bottomnav">
            </nav>
            {/* {
                isModal && <Modal isModal={isModal} closeModal={closeModal}/>
            } */}
            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header title_login">
                            <div className="login_logo"></div>
                            <div className="left_title">
                                “ Bệ phóng mới” cho thị trường kỳ hạn Việt Nam
                                </div>
                            <div className="left_content_1">
                                Với vai trò là tổ chức đầu tiên thực hiện việc giao dịch hàng hoá một cách quy mô, hiện đại,
                                MXV có sứ mệnh trở thành cổng kết nối trung gian uy tín và duy nhất của Việt Nam ra thị trường hàng hoá quốc tế.
                                </div>
                            <div className="left_content_1">
                                MXV tin rằng việc tăng cường kiểm soát rủi ro và tăng cường
                                tính quốc tế hóa thị trường giao dịch hàng hóa Việt Nam phát huy những lợi thế cạnh tranh ngành nông sản,
                                nguyên liệu, thúc đẩy thị trường kỳ hạn tại Việt Nam bước vào một kỷ nguyên mới.
                                </div>
                        </div>
                        <div className="modal-body">
                            <div className="header_login">
                                <div className="form_logo"></div>
                                <div className="form_name_en"></div>
                                <div className="seperate"></div>
                                <div className="text_name_login">SỞ GIAO DỊCH <br /> HÀNG HÓA VIỆT NAM</div>
                            </div>
                            <div className="seperate_width"></div>
                            <div className="title_login_form">ĐĂNG NHẬP TÀI KHOẢN</div>
                            <Register />
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Header;