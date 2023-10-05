import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home/Home";
// import Contact from "../pages/Contact";
// import Services from "../pages/Services";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import Doctors from "../pages/Doctors/Doctors";
// import DoctorDetails from "../pages/Doctors/DoctorDetails";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			// {
			// 	path: "/contact",
			// 	element: <Contact />,
			// },
			// {
			// 	path: "/services",
			// 	element: <Services />,
			// },
			// {
			// 	path: "/doctors",
			// 	element: <Doctors />,
			// },
			// {
			// 	path: "/doctors/:id",
			// 	element: <DoctorDetails />,
			// },
			// {
			// 	path: "/login",
			// 	element: <Login />,
			// },
			// {
			// 	path: "/signup",
			// 	element: <Signup />,
			// },
		],
	},
]);
