import React from "react";

function TextCardComponent({ title, text,titleClass,actions, children }) {
	return (
		<div>
			<div className="card bg-white shadow-lg lg:card-side mb-4">
				<div className="card-body">
					{title && <h2 className={`card-title ${titleClass} text-base sm:text-lg`}>{title}</h2>}
					<p>{text}</p>
					<div className="justify-center card-actions">
						{actions}
					</div>
				</div>
			</div>
			{children}
		</div>
	);
}

export default TextCardComponent;
