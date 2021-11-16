import React from "react";
import NavBarComponent from "../navigation/NavBarComponent";
import SideBarMenuComponent from "../navigation/SideBarMenuComponent";
import StepperContainerComponent from "../navigation/StepperContainerComponent";

// Complex layout components
function ComplexLayout({ children, steps }) {
	return (
		<div className={"w-full min-h-screen relative pb-20 mb-2"}>
			<div className={"drawer min-h-screen"}>
				<input id="drawerMenu" type="checkbox" className="drawer-toggle" />
				<div className={"flex flex-col items-center justify-start drawer-content relative"}>
					<NavBarComponent hasStepper={true} />
					<div className={"flex-1 items-stretch justify-center w-full flex flex-col sm:flex-row"}>
						<div className={"flex-1 flex items-stretch justify-center px-2"}>
							<div className={"flex justify-center items-start md:container md:mx-auto"}>
							{children}
							</div>
						</div>
						<StepperContainerComponent steps={steps} />
					</div>
				</div>
				<SideBarMenuComponent />
			</div>
		</div>
	);
}

export default ComplexLayout;
