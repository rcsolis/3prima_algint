import React from "react"
import SimpleLayout from "../../components/layouts/SimpleLayout";


function MaterialPage(){
    return <SimpleLayout>
        <div className={"w-full"}>
            <div className={"text-center text-xl sm:text-3xl m-5 text-primary"}>
                <p>Material PDF</p>
            </div>
            <div className={"p-2 flex flex-col gap-2 items-start"}>
                <div className={"bg-white p-4 flex min-w-full rounded-2xl"}>
                    <div className={"text-primary-dark"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className={"flex-1 align-middle px-2 text-lg sm:text-xl leading-relaxed"}>
                            UCT. Urticarial Control Test
                    </div>
                    <div className={"text-primary-dark text-base sm:text-xl"}>
                        <a href={"/files/UCT.pdf"} target={"_blank"} download>
                            Descargar
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-left" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={"bg-white p-4 flex min-w-full rounded-2xl"}>
                    <div className={"text-primary-dark"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className={"flex-1 align-middle px-2 text-lg sm:text-xl leading-relaxed"}>
                        UAS7. Urticarial Activity Score
                    </div>
                    <div className={"text-primary-dark text-base sm:text-xl"}>
                        <a href={"/files/UAS7.pdf"} target={"_blank"} download>
                            Descargar
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-left" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={"bg-white p-4 flex min-w-full rounded-2xl"}>
                    <div className={"text-primary-dark"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className={"flex-1 align-middle px-2 text-lg sm:text-xl leading-relaxed"}>
                        CU-Q2oL. Chronic Urticaria Quatlity of Life Questionnaire
                    </div>
                    <div className={"text-primary-dark text-base sm:text-xl"}>
                        <a href={"/files/CU-Q2oL.pdf"} target={"_blank"} download>
                            Descargar
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-left" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={"bg-white p-4 flex min-w-full rounded-2xl"}>
                    <div className={"text-primary-dark"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className={"flex-1 align-middle px-2 text-lg sm:text-xl leading-relaxed"}>
                        AECT. The Angioedema Control Test
                    </div>
                    <div className={"text-primary-dark text-base sm:text-xl"}>
                        <a href={"/files/AECT.pdf"} target={"_blank"} download>
                            Descargar
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-left" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={"bg-white p-4 flex min-w-full rounded-2xl"}>
                    <div className={"text-primary-dark"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className={"flex-1 align-middle px-2 text-lg sm:text-xl leading-relaxed"}>
                        AAS. Angioedema Activity Score
                    </div>
                    <div className={"text-primary-dark text-base sm:text-xl"}>
                        <a href={"/files/AAS.pdf"} target={"_blank"} download>
                            Descargar
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-left" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={"bg-white p-4 flex min-w-full rounded-2xl"}>
                    <div className={"text-primary-dark"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className={"flex-1 align-middle px-2 text-lg sm:text-xl leading-relaxed"}>
                        AE-QoL.  Angioedema Quality of Life Questionnaire
                    </div>
                    <div className={"text-primary-dark text-base sm:text-xl"}>
                        <a href={"/files/AE-QoL.pdf"} target={"_blank"} download>
                            Descargar
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-left" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>


            </div>
        </div>

    </SimpleLayout>
}

export default React.memo(MaterialPage);