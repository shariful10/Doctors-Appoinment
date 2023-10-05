import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";

const DoctorDetails = () => {
	return (
		<section>
			<div className="max-w-[1170px] px-5 mx-auto">
				<div className="grid md:grid-cols-3 gap-[50px]">
					<div className="md:col-span-2">
						<div className="flex items-center gap-5">
							<figure className="max-w-[200px] max-h-[200px]">
								<img src={doctorImg} className="w-full" alt="Doctor Image" />
							</figure>
							<div>
								<span className="bg-[#CCF0FC] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
									Neurologist
								</span>
								<h3 className="text-headingsColor text-[22px]  leading-9 mt-3 font-bold">
									Dr. Edward Geltman
								</h3>
								<div className="flex items-center gap-[6px]">
									<span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingsColor">
										<img src={starIcon} alt="" /> 4.8
									</span>
                                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingsColor">(272)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DoctorDetails;
