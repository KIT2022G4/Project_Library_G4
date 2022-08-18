import React from "react";
import './Footer.css';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="top-footer mid-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="widget-ft">
                                    <h4 className="title-menu tittle_time">Hotline liên hệ:</h4>
                                </div>
                                <div className="time_work">
                                    <div className="list-menu">
                                        <div className="list-menu-item-hotline">
                                            <img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/icon-telephone.png?1654417427508"
                                                alt=""></img>
                                            <div className="contact">
                                                <a href="tel:0869.125.610" className="phone-number">123.467.789</a>
                                                <span className="hour">(Tất cả các ngày trong tuần)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="socials-footer">
                                    <h4 className="title-menu">Kết nối với chúng tôi</h4>
                                    <div className="list-socials">
                                        <div className="list-item">
                                            <a href="https://www.facebook.com/" className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                        </div>
                                        <div className="list-item">
                                            <a href="https://www.google.com.vn/?hl=vi" className="google-plus"><i className="fa-brands fa-google-plus-g"></i></a>
                                        </div>
                                        <div className="list-item">
                                            <a href="https://twitter.com/?lang=vi" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                                        </div>
                                        <div className="list-item">
                                            <a href="https://www.instagram.com/" className="insta"><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 no-padding">
                                <div className="widget-ft">
                                    <h4 className="title-menu">Hệ thống cửa hàng & liên kết</h4>
                                    <div className="item">
                                        <h4 className="item-title">Open Library</h4>
                                        <div className="item-child">36 Hoàng Cầu, Chợ Dừa, Đống Đa, Hà Nội</div>
                                        <div className="item-child">Hotline: 123.467.789</div>
                                    </div>

                                    <div className="item-connect">
                                        <h4 className="item-title">Open Library liên kết</h4>
                                    </div>

                                    <div className="item-address">
                                        <h4 className="item-title">Open Library Văn Quán</h4>
                                        <div className="item-child">32BT8 KDT Văn Quán, Hà Đông (cổng trường Tiểu học Ban Mai)</div>
                                        <div className="item-child">Hotline: 0981.111.328</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 a-center">
                        <span className="text">
                            © Bản quyền thuộc về
                            <b> Group 4 - Open Library</b>.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
