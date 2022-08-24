import React from "react";
import './Footer.css';

function Footer() {
    return (
        <>
            <div id="footer" class="footer-1">
                <div class="main-footer widgets-dark typo-light">
                    <div class="container-fluide">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget subscribe no-box">
                                    <h5 class="widget-title">Open Library<span></span></h5>
                                    <p>Thư viện Open Library, với chức năng chính là quản lý và cho mượn sách, báo. Những năm đầu
                                        khi mới thành lập, cơ sở vật chất và vốn tài liệu còn hạn chế. Đến cuối nhiệm kỳ 1, Thư viện
                                        chỉ có khoảng hơn 1.500 đầu sách, chủ yếu là sách tiếng Việt, công tác quản lý còn thô sơ,
                                        thủ công.
                                        Từ cuối năm 2006, Thư viện chính thức trực thuộc Trung tâm Thông tin Tư liệu (với các chức
                                        năng chính là: quản lý Thư viện, lập trình và quản lý hệ thống mạng toàn trường). Cùng với
                                        sự phát triển không ngừng của Nhà trường và được sự quan tâm, đầu tư thích đáng từ Ban Giám
                                        Hiệu, Thư viện ngày càng hoàn thiện và lớn mạnh theo hướng chất lượng và hiện đại.</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget no-box">
                                    <h5 class="widget-title">Quick Links<span></span></h5>
                                    <ul class="thumbnail-widget">
                                        <li>
                                            <div class="thumb-content"><a href="#.">&nbsp;Get Started</a></div>
                                        </li>
                                        <li>
                                            <div class="thumb-content"><a href="#.">&nbsp;Top Leaders</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget no-box">
                                    <h5 class="widget-title">Follow up<span></span></h5>
                                    <a href="#"> <i class="fa fa-facebook"> </i> </a>
                                    <a href="#"> <i class="fa fa-twitter"> </i> </a>
                                    <a href="#"> <i class="fa fa-youtube"> </i> </a>
                                </div>
                            </div>

                            <br></br>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget no-box">
                                    <h5 class="widget-title">Liên hệ với chúng tôi<span></span></h5>
                                    <p>Địa chỉ: Số 36, Hoàng Cầu, Đống Đa, Tp. Hà Nội.</p>
                                    <div class="emailfield">
                                        <input type="text" name="email" value="Email" />
                                        <input name="uri" type="hidden" value="arabiantheme" />
                                        <input name="loc" type="hidden" value="en_US" />
                                        <input class="submitbutton ripplelink" type="submit" value="Subscribe" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="footer-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <p>Copyright Design by Group 4. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;
