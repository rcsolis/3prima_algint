import React from "react";

function  FullScreenModalComponent({children}){
    return <div className={"w-screen h-screen bg-gray-500 bg-opacity-50 p-2 sm:p-4"}>
        {children}
    </div>;
}
export default FullScreenModalComponent;