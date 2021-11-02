import React from "react";
import { Link } from "react-router-dom";

function NavBarComponent() {
	return (
		<div className="z-50 w-full navbar mb-2 shadow-lg bg-primary-gradient text-neutral-content">
			<div className="flex-none">
				<label htmlFor="drawerMenu" className="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-6 h-6 stroke-current">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</label>
			</div>
			<div className="flex-1 px-2 mx-2 flex justify-center items-center">
				<div className="text-center">
					<Link to={"/welcome"}>
						<span className="text-sm sm:text-2xl font-bold">
							Algoritmo Interactivo - urticaria - angioedema
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavBarComponent;
