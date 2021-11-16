import React from "react";

function TextCardComponent({ title, text, textClass, titleClass, actions, children }) {
	return (
		<div className={"h-full"}>
			<div className="card bg-white shadow-lg lg:card-side mb-4 h-3/4">
				<div className="card-body text-center">
					{title && <h2 className={`card-title ${titleClass} text-base sm:text-lg`}>{title}</h2>}
					<p className={"text-center"}>{text}</p>
					<div className="justify-center card-actions">
						{actions}
					</div>
				</div>
			</div>
			<div className={"min-h-12"}>
				{children}
			</div>
		</div>

	);
}

export default TextCardComponent;
