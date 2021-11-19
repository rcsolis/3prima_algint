import React from "react";

function StepperContainerComponent({ steps }) {
	return (
		<div className="bg-primary-gradient text-white -top-2 pt-4 min-h-40 md:min-h-screen md:w-1/4 lg:w-1/5 text-xs lg:text-sm relative">
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
