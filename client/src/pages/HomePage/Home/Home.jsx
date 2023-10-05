import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import MedicalService from "../MedicalService/MedicalService";
import AboutSection from "../AboutSection/AboutSection";
import Services from "../Services/Services";
import Features from "../FeaturesSection/Features";
import GreatDoctors from "../GreatDoctors/GreatDoctors";

const Home = () => {
	return (
		<>
			<HeroSection />
			<MedicalService />
			<AboutSection />
			<Services />
			<Features />
			<GreatDoctors />
		</>
	);
};

export default Home;
