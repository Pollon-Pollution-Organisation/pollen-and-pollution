import React from 'react';

//Hayfever symptoms
//Pollen Type
//Pollen Seasons
//Pollen Calendar
//Tips 

function PollenTypesPage() {
    return (

        <main className='bg-yellow-400 px-10'>


            <div className="flex justify-center">
                <h3 className='text-5xl py-2 text-gray-600 font-medium'>
                    Types of Pollen
                </h3>
            </div>


            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Tree</th>
                                    <th className="px-4 py-3">Grass</th>
                                    <th className="px-4 py-3">Weed</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white">
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

            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Types of Tree Pollen</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white">
                                <tr clasNames="text-gray-700">
                                    <td className="px-4 py-3 text-sm border">Birch Pollen (most common) followed by Pine, Alder, Hazel, Yew, Elm, Willow, Poplar, Ash, Plane and Lime</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Types of Grass Pollen</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white">
                                <tr clasNames="text-gray-700">
                                    <td className="px-4 py-3 text-sm border">There is only one grass pollen despite there being many types of grass</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Types of Weed Pollen</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white">
                                <tr clasNames="text-gray-700">
                                    <td className="px-4 py-3 text-sm border">Ragweed (causes Autumnal hayfever), Nettle, Dock, Mugwort, Plantain</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </main>


    )

}

export default PollenTypesPage