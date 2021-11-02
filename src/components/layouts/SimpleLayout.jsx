import React from "react";
import NavBarComponent from "../navigation/NavBarComponent";
import SideBarMenuComponent from "../navigation/SideBarMenuComponent";

function SimpleLayout({ children }) {
	return (
		<div className={"w-screen min-h-screen relative pb-2"}>
			<div className={"drawer min-h-screen"}>
				<input id="drawerMenu" type="checkbox" className="drawer-toggle" />
				<div className={"flex flex-col items-center justify-start drawer-content relative"}>
					<NavBarComponent hasStepper={false}/>
					<div className={"flex-1 items-stretch justify-center w-full relative flex"}>
						<div className={"flex-1 flex items-stretch justify-center"}>
							<div className={"flex justify-center items-start md:container md:mx-auto"}>
								{children}
							</div>
						</div>
					</div>
				</div>
				<SideBarMenuComponent />
			</div>
		</div>
	);
}

export default SimpleLayout;
