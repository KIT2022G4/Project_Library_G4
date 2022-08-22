/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Tên độc giả", accessor: "reader", width: "45%", align: "left" },
      { Header: "Nghề nghiệp", accessor: "function", align: "left" },
      { Header: "Trạng thái", accessor: "status", align: "center" },
      { Header: "Thời gian", accessor: "employed", align: "center" },
      { Header: "Hoạt động", accessor: "action", align: "center" },
    ],

    rows: [
      {
        reader: <Author image={team2} name="Nguyễn Tuấn Anh" email="tuananh@gmail.com" />,
        function: <Job title="Học sinh" description="Công nghệ thông tin" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sửa
          </MDTypography>
        ),
      },
      {
        reader: <Author image={team3} name="Trần Khánh Vy" email="khanhvy@gmail.com" />,
        function: <Job title="Học sinh" description="Quản trị kinh doanh" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sửa
          </MDTypography>
        ),
      },
      {
        reader: <Author image={team4} name="Nguyễn Gia Khiêm" email="giakhiem@gmail.com" />,
        function: <Job title="Giảng viên" description="Tâm lý học" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sửa
          </MDTypography>
        ),
      },
      {
        reader: <Author image={team3} name="Nguyễn Lâm Thảo Tâm" email="thaotam@gmail.com" />,
        function: <Job title="Học sinh" description="Marketing" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sửa
          </MDTypography>
        ),
      },
      {
        reader: <Author image={team3} name="Nguyễn Thạch Trang" email="thachtrang@gmail.com" />,
        function: <Job title="Giảng viên" description="Ngôn ngữ Anh" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sửa
          </MDTypography>
        ),
      },
      {
        reader: <Author image={team4} name="Nguyễn Việt Hoàng" email="viethoang@gmail.com" />,
        function: <Job title="Học sinh" description="Học sinh cấp 3" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sửa
          </MDTypography>
        ),
      },
      {
        reader: <Author image={team4} name="Bùi Anh Tuấn" email="viethoang@gmail.com" />,
        function: <Job title="Học sinh" description="Học sinh cấp 3" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sửa
          </MDTypography>
        ),
      },
      {
        reader: <Author image={team4} name="Nguyễn Trần Trung Quân" email="viethoang@gmail.com" />,
        function: <Job title="Học sinh" description="Học sinh cấp 3" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sửa
          </MDTypography>
        ),
      },
      {
        reader: <Author image={team4} name="Hà Anh Tuấn" email="viethoang@gmail.com" />,
        function: <Job title="Học sinh" description="Học sinh cấp 3" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sửa
          </MDTypography>
        ),
      },
    ],
  };
}
