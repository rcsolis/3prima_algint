import React from "react";

function StepperContainerComponent({ steps }) {
	return (
		<div className="bg-primary-gradient text-white -top-2 pt-4 min-h-40 sm:min-h-screen  sm:w-1/3 md:w-1/4  text-xs sm:text-sm relative">
			<ul className="steps steps-vertical pr-2">
				{steps.map((step, index) => (
					<li key={`stepper${index}`} data-content="●" className={`step ${step.active && "step-secondary"} `}>
						<span className="text-left">{step.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default StepperContainerComponent;
