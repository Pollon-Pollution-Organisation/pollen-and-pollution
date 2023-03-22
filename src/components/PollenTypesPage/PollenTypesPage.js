import React from 'react';

//Hayfever symptoms
//Pollen Type
//Pollen Seasons
//Pollen Calendar
//Tips 

function PollenTypesPage() {
    return (

        <main className='bg-gray-900 px-10 font-mono'>


            <div className="flex justify-center">
                <h3 className='text-5xl py-8 text-white font-medium'>
                    Types of Pollen
                </h3>
            </div>


            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-black bg-yellow-400 uppercase border-b border-black py-3 px-6">
                                    <th className="px-4 py-3">Tree</th>
                                    <th className="px-4 py-3">Grass</th>
                                    <th className="px-4 py-3">Weed</th>
                                </tr>
                            </thead>

                            <tbody className="bg-yellow-400">
                                <tr clasNames="text-gray-700">
                                    <td className="px-4 py-3 text-sm border">Season: March - June. Peak: May</td>
                                    <td className="px-4 py-3 text-sm border">Season: May - September. Peak: June - July</td>
                                    <td className="px-4 py-3 text-sm border">Season: April - September. Peak: July - August</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


            <div id="pollenGrid" className="grid grid-cols-3 gap-4 text-white gap-y-4 place-content-center">
                <div>

                    <div
                        className="block max-w-xs rounded-lg bg-yellow-400  text-center shadow-lg mx-5 my-10">

                        <div

                            className="border-b-2 font-semibold text-black border-black py-3 px-6">
                            Types of tree pollen

                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Birch Pollen (this is the most common)
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Pine
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Alder
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Hazel
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Yew
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Elm
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Willow
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Poplar
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Ash
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Plane
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Lime
                        </div>
                    </div>
                </div>






                <div>
                    <div
                        className="block max-w-xs rounded-lg bg-yellow-400  text-center shadow-lg mx-5 my-10">

                        <div

                            className="border-b-2 font-semibold text-black border-black py-3 px-6">
                            Types of grass pollen

                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            There is only one grass pollen despite there being many types of grass
                        </div>
                    </div>
                </div>





                <div>
                    <div
                        className="block max-w-xs rounded-lg bg-yellow-400  text-center shadow-lg mx-5 my-10">

                        <div

                            className="border-b-2 font-semibold text-black border-black py-3 px-6">
                            Types of weed pollen

                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Ragweed
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Nettle
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Dock
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Mugwort
                        </div>
                        <div
                            className="border-t-2 text-black border-black py-3 px-6">
                            Plantain
                        </div>
                    </div>
                </div>
            </div>

        </main>


    )

}

export default PollenTypesPage