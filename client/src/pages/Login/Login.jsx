import { useState } from "react";
import BtnSubmit from "../../components/BtnSubmit/BtnSubmit";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<section className="px-5 lg:px-0">
			<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
				<h3 className="text-primaryColor text-[22px] leading-9 font-bold mb-10">
					Hello! <span className="text-irisBlueColor">Welcome</span> Back 🥳
				</h3>
				<form className="py-4 md:py-0">
					<div className="mb-5">
						<input
							type="email"
							name="email"
							placeholder="Enter Your Email"
							value={formData.email}
							onChange={handleInputChange}
							className="w-full px-4 py-3 border-b border-primaryColor focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingsColor placeholder:text-textColor rounded-md cursor-pointer"
							required
						/>
					</div>
					<div className="mb-5">
						<input
							type="password"
							name="password"
							placeholder="Enter Your Password"
							value={formData.password}
							onChange={handleInputChange}
							className="w-full px-4 py-3 border-b border-primaryColor focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingsColor placeholder:text-textColor rounded-md cursor-pointer"
							required
						/>
					</div>
					<div className="mt-12">
						<BtnSubmit title={"Login"} />
					</div>
					<p className="mt-5">Don&apos;t</p>
				</form>
			</div>
		</section>
	);
};

export default Login;
