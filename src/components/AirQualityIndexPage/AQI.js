import React from "react";

//Air Quality Index to display levels 
export default function AQI() {
    return (
        <div>
            <main className='bg-yellow-400 px-10'>
                
                    
                        <div className="flex justify-center">
                            <h3 className='text-5xl py-2 text-gray-600 font-medium'>
                                Air Quality Index
                            </h3>
                        </div>
                    
                
                <section className="container mx-auto p-6 font-mono">
                    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                        <th className="px-4 py-3">Band</th>
                                        <th className="px-4 py-3">Index</th>
                                        <th className="px-4 py-3">Ozone ----- (µg m−3)</th>
                                        <th className="px-4 py-3">Nitrogen Dioxide --- (µg m−3)</th>
                                        <th className="px-4 py-3">Sulphur Dioxide --- (µg m−3)</th>
                                        <th className="px-4 py-3">PM2.5 Particles --- (µg m−3)</th>
                                        <th className="px-4 py-3">PM10 Particles --- (µg m−3)</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white">
                                    <tr clasNames="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">


                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border"></td>
                                        <td className="px-4 py-3 text-sm border">Running 8 hourly mean</td>
                                        <td className="px-4 py-3 text-sm border">Hourly mean</td>
                                        <td className="px-4 py-3 text-sm border">15 minute mean</td>
                                        <td className="px-4 py-3 text-sm border">24 hour mean</td>
                                        <td className="px-4 py-3 text-sm border">24 hour mean</td>
                                    </tr>
                                    <tr className="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">
                                                Low
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 0 - 33 </span>
                                        </td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 0 - 67 </span>
                                        </td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 0 - 88 </span>
                                        </td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 0 - 11 </span>
                                        </td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 0 - 16 </span>
                                        </td>
                                    </tr>

                                    <tr clasNames="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">

                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">2</td>
                                        <td className="px-4 py-3 text-sm border">34 - 66</td>
                                        <td className="px-4 py-3 text-sm border">68 - 134</td>
                                        <td className="px-4 py-3 text-sm border">89 - 177</td>
                                        <td className="px-4 py-3 text-sm border">12 - 23</td>
                                        <td className="px-4 py-3 text-sm border">17 - 33</td>

                                    </tr>
                                    <tr clasNames="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">


                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">3</td>
                                        <td className="px-4 py-3 text-sm border">67 - 100</td>
                                        <td className="px-4 py-3 text-sm border">135 - 200</td>
                                        <td className="px-4 py-3 text-sm border">178 - 266</td>
                                        <td className="px-4 py-3 text-sm border">24 - 35</td>
                                        <td className="px-4 py-3 text-sm border">34 - 50</td>
                                    </tr>
                                    <tr clasNames="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">
                                                Medium

                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">4</td>
                                        <td className="px-4 py-3 text-sm border">101 - 120</td>
                                        <td className="px-4 py-3 text-sm border">201 - 267</td>
                                        <td className="px-4 py-3 text-sm border">267 - 354</td>
                                        <td className="px-4 py-3 text-sm border">36 - 41</td>
                                        <td className="px-4 py-3 text-sm border">51 - 58</td>
                                    </tr>
                                    <tr clasNames="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">


                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">5</td>
                                        <td className="px-4 py-3 text-sm border">121 - 140</td>
                                        <td className="px-4 py-3 text-sm border">268 - 334</td>
                                        <td className="px-4 py-3 text-sm border">355 - 443</td>
                                        <td className="px-4 py-3 text-sm border">42 - 47</td>
                                        <td className="px-4 py-3 text-sm border">59 - 66</td>
                                    </tr>
                                    <tr clasNames="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">


                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">6</td>
                                        <td className="px-4 py-3 text-sm border">141 - 160</td>
                                        <td className="px-4 py-3 text-sm border">335 - 400</td>
                                        <td className="px-4 py-3 text-sm border">444 - 532</td>
                                        <td className="px-4 py-3 text-sm border">48 - 53</td>
                                        <td className="px-4 py-3 text-sm border">67 - 75</td>
                                    </tr>
                                    <tr clasNames="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">
                                                High

                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">7</td>
                                        <td className="px-4 py-3 text-sm border">161 - 187</td>
                                        <td className="px-4 py-3 text-sm border">401 - 467</td>
                                        <td className="px-4 py-3 text-sm border">533 - 710</td>
                                        <td className="px-4 py-3 text-sm border">54 - 58</td>
                                        <td className="px-4 py-3 text-sm border">76 - 83</td>
                                    </tr>
                                    <tr clasNames="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">


                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">8</td>
                                        <td className="px-4 py-3 text-sm border">188 - 213</td>
                                        <td className="px-4 py-3 text-sm border">468 - 534</td>
                                        <td className="px-4 py-3 text-sm border">711 - 887</td>
                                        <td className="px-4 py-3 text-sm border">59 - 64</td>
                                        <td className="px-4 py-3 text-sm border">84 - 91</td>
                                    </tr>
                                    <tr clasNames="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">


                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">9</td>
                                        <td className="px-4 py-3 text-sm border">214 - 240</td>
                                        <td className="px-4 py-3 text-sm border">535 - 600</td>
                                        <td className="px-4 py-3 text-sm border">888 - 1064</td>
                                        <td className="px-4 py-3 text-sm border">65 - 70</td>
                                        <td className="px-4 py-3 text-sm border">92 - 100</td>
                                    </tr>

                                    <tr className="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">
                                                Very High
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">10</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> 241 or more </span>
                                        </td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> 601 or more </span>
                                        </td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> 1065 or more </span>
                                        </td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> 71 or more </span>
                                        </td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> 101 or more </span>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </main>

        </div >
    )

}