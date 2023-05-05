import React from "react";
import { Link, useNavigate } from "react-router-dom";

import useAppContext from "../store/AppContext.js";

export const Navbar = () => {

	const { store, actions } = useAppContext();

	const navigate = useNavigate();

	const handleLogout = (e) => {
		e.preventDefault();

		actions.handleLogOut();

		navigate("/");
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{store.usuario.token 
						? <button className="btn btn-primary" onClick={handleLogout}>Logout</button>

						: <div> <Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary">Register</button>
					</Link>
					</div>
					}
					
				</div>
			</div>
		</nav>
	);
};
