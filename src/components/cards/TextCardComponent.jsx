import React from "react";

function TextCardComponent({ title, text, textClass, titleClass, actions, children }) {
	return (
		<div className={"h-full space-y-3 flex flex-col justify-between"}>
			<div className="card bg-white shadow-lg lg:card-side min-h-16 flex-grow">
				<div className="card-body text-center justify-center p-2">
					{title && <h2 className={`card-title ${titleClass} text-base sm:text-lg`}>{title}</h2>}
					<p className={"text-center"}>{text}</p>
					{actions && <div className="justify-center card-actions">
						{actions}
					</div>}
				</div>
			</div>
			<div className={""}>
				{children}
			</div>
		</div>

	);
}

export default TextCardComponent;
