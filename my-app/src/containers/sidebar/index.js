import React, { useState } from 'react';
import './sidebar.css';

const agricultureData = [
	{
		name: "Ngô"
	},
	{
		name: "Đậu tương"
	},
	{
		name: "Khô đậu tương"
	},
	{
		name: "Dầu đậu tương"
	},
	{
		name: "Lúa mỳ"
	}
]

const resources = [
	{
		name: "Cà phê"
	},
	{
		name: "Ca cao"
	},
	{
		name: "Bông"
	},
	{
		name: "Đường"
	},
	{
		name: "Cao su"
	}
]
const energy = [
	{
		name: "Dầu khô"
	},
	{
		name: "Khí tự nhiên"
	},
	{
		name: "Xăng"
	}
]

const metal = [
	{
		name: "Bạc"
	},
	{
		name: "Bạch kim"
	},
	{
		name: "Đồng"
	},
	{
		name: "Quặng sắt"
	}
]
const Sidebar = () => {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(0);

	return (
		<div id="layoutSidenav_nav">
			<nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
				<div className="header_sidebar">
					DANH MỤC TIN TỨC
                </div>
				<div className=""></div>
				<div className="sb-sidenav-menu">
					<div className="nav">
						<a className="nav-link" href="index.html">
							<div className="sb-nav-link-icon icon_all"></div>
                Tất cả
              </a>
						<a className="nav-link" href="index.html">
							<div className="sb-nav-link-icon icon_love"></div>
                Yêu thích
              </a>
						<a className="nav-link" href="index.html">
							<div className="sb-nav-link-icon icon_agriculture"></div>
                Nông sản
              </a>
						{agricultureData.map((item, index) =>
							<a className=" products_agriculture" href="index.html" key={index}>
								{item.name}
							</a>
						)}
						<a className="nav-link" href="index.html">
							<div className="sb-nav-link-icon icon_resources"></div>
                Nguyên liệu công nghiệp
              </a>
						{resources.map((item, index) =>
							<a className=" products_agriculture" href="index.html" key={index}>
								{item.name}
							</a>
						)}
						<a className="nav-link" href="index.html">
							<div className="sb-nav-link-icon icon_energy"></div>
                Năng lượng
              </a>
						{energy.map((item, index) =>
							<a className=" products_agriculture" href="index.html" key={index}>
								{item.name}
							</a>
						)}
							<a className="nav-link" href="index.html">
							<div className="sb-nav-link-icon icon_metal"></div>
                Kim loaị
              </a>
						{metal.map((item, index) =>
							<a className=" products_agriculture" href="index.html" key={index}>
								{item.name}
							</a>
						)}
						<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
							<div className="sb-nav-link-icon icon_star"></div>
                Mức độ quan trọng
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
						</a>
						<div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
							<nav className="sb-sidenav-menu-nested nav">
								<a className="nav-link" href="layout-static.html">Nghiêm trọng</a>
								<a className="nav-link" href="layout-sidenav-light.html">Bình thường</a>
							</nav>
						</div>
						<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
							<div className="sb-nav-link-icon icon_calendar"></div>
                Xem theo ngày
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
						</a>
						<div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
							<nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
								<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
									Hiện tại
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
								</a>
								<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
									Lịch sử
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
								</a>
							</nav>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Sidebar;