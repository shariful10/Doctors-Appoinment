import React from "react";
import logo from "../../../assets/images/logo.png";
import { socialLinks } from "../../../assets/data/footer";
import { Link } from "react-router-dom";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="pb-16 pt-10">
			<div className="container">
				<div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
					<div>
						<img src={logo} alt="" />
						<p className="text-[16px] leading-7 font-normal text-textColor mt-4">
							Copright &copy; {year} | Developed by Shariful Islam all rights
							reserved.
						</p>
						<div className="flex items-center gap-3 mt-4">
							{socialLinks.map(({ id, path, icon: Icon }) => (
								<Link
									key={id}
									to={path}
									className="w-10 h-10 border border-irisBlueColor rounded-full flex items-center justify-center group hover:text-white text-irisBlueColor hover:bg-primaryColor hover:border-none"
								>
									<Icon className="w-5 h-5" />
								</Link>
							))}
						</div>
					</div>
					<div>
						<h2 className="text-[20px] leading-[30px] font-bold mb-6 text-headingsColor"></h2>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
