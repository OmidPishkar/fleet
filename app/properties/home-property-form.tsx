import { ArrowRight, FileUp } from 'lucide-react'

const HomePropertyForm = () => {
    return (
        <form>
            <div className='my-10'>
                <h5 className='text-base font-semibold'>Upload Photo</h5>
                <p className='text-[#777E90] text-xs'>choose your file to upload</p>
                
                <div className='w-full h-[182px] bg-[#F4F5F6] rounded-2xl flex items-center justify-center mt-4'>

                    <div className='flex flex-col items-center justify-center gap-y-3 '>
                        <FileUp size={24} className='text-[#777E90]'/>
                        <p className='text-[#777E90] text-sm'>PNG, JEP, WEBP. Max 10Mb.</p>
                    </div>

                </div>
            </div>

            <div className="">
                <h4 className='font-semibold'>
                    Home details
                </h4>

                <div className='flex flex-col gap-y-3 mt-6'>
                    <h6 className='text-xs uppercase text-[#B1B5C3] font-bold'>
                        title
                    </h6>

                    <input 
                        type="text"
                        className='border-2 border-[#E6E8EC] px-3 py-4 rounded-xl text-sm'
                        placeholder="e.g &#8220;Spectacular views of Queenston&#8220;" 
                    />
                </div>

                <div className='flex items-center justify-between gap-2'>

                    <div className='flex flex-col gap-y-3 mt-6 flex-1'>
                        <h6 className='text-xs uppercase text-[#B1B5C3] font-bold'>
                            price
                        </h6>
                        <input 
                            type="number"
                            className='border-2 border-[#E6E8EC] px-3 py-4 rounded-xl text-sm'
                            placeholder="price per night" 
                        />
                    </div>
                    <div className='flex flex-col gap-y-3 mt-6'>
                        <h6 className='text-xs uppercase text-[#B1B5C3] font-bold'>
                            discount
                        </h6>
                        <input 
                            type="number"
                            className='border-2 border-[#E6E8EC] px-3 py-4 rounded-xl text-sm'
                            placeholder="percent" 
                        />
                    </div>
                </div>


                <div className='flex flex-col relative gap-y-3 mt-6'>
                    <h6 className='text-xs uppercase text-[#B1B5C3] font-bold'>
                        location
                    </h6>
                    <div className='flex items-center justify-between gap-3'>

                        <input 
                            type="text"
                            className='border-2 border-[#E6E8EC] px-3 flex-1 py-4 rounded-xl text-sm'
                            placeholder="e.g &#8220;Queenstown, Otago, New Zealand&#8220;" 
                        />
                        <div className='cursor-pointer py-3 hover:text-[#B1B5C3]'>
                            Google Map
                        </div>
                    </div>

                </div>

                <div className='flex items-center justify-between gap-1'>

                    <div className='flex flex-col gap-y-3 mt-6'>
                        <h6 className='text-xs uppercase text-[#B1B5C3] font-bold'>
                            bed room
                        </h6>
                        <input 
                            type="number"
                            className='border-2 border-[#E6E8EC] px-3 py-4 rounded-xl text-sm' 
                            placeholder='1'
                        />
                    </div>
                    <div className='flex flex-col gap-y-3 mt-6'>
                        <h6 className='text-xs uppercase text-[#B1B5C3] font-bold'>
                            living room
                        </h6>
                        <input 
                            type="number"
                            className='border-2 border-[#E6E8EC] px-3 py-4 rounded-xl text-sm'
                            placeholder="1" 
                        />
                    </div>
                    <div className='flex flex-col gap-y-3 mt-6'>
                        <h6 className='text-xs uppercase text-[#B1B5C3] font-bold'>
                            bath room
                        </h6>
                        <input 
                            type="number"
                            className='border-2 border-[#E6E8EC] px-3 py-4 rounded-xl text-sm'
                            placeholder="1" 
                        />
                    </div>
                </div>


                <div className='flex flex-col gap-y-3 mt-6'>
                    <h6 className='text-xs uppercase text-[#B1B5C3] font-bold'>
                        description
                    </h6>

                    <textarea 
                        cols={10}
                        autoCapitalize='off'
                        className='border-2 border-[#E6E8EC] px-3 py-4 rounded-xl text-sm h-[100px] select-text min-h-[100px]
                        max-h-[200px]'
                        placeholder="e.g &#8220;Spectacular views of Queenston&#8220;" 
                    />
                </div>

            </div>

            <div className='mt-11'>
                <h4 className='font-semibold'>
                    Amenities
                </h4>

                <div className='mt-6 flex flex-wrap gap-5'>
                    <input 
                        type="text"
                        className='border-[#E6E8EC] border-2 rounded-xl px-[10px] py-[12px]
                        outline-none text-[#777E90]' 
                        placeholder='1st'   
                    />
                    <input 
                        type="text"
                        className='border-[#E6E8EC] border-2 rounded-xl px-[10px] py-[12px]
                        outline-none text-[#777E90]'   
                        placeholder='2nd' 
                    />
                    <input 
                        type="text"
                        className='border-[#E6E8EC] border-2 rounded-xl px-[10px] py-[12px]
                        outline-none text-[#777E90]'    
                        placeholder='3d'
                    />
                </div>
            </div>

            <div className='mt-11'>
                <h4 className='font-semibold'>
                    Core features
                </h4>

                <div className='mt-6 flex flex-wrap gap-5'>
                    <input 
                        type="text"
                        className='border-[#E6E8EC] border-2 rounded-xl px-[10px] py-[12px]
                        outline-none text-[#777E90]' 
                        placeholder='1st'   
                    />
                    <input 
                        type="text"
                        className='border-[#E6E8EC] border-2 rounded-xl px-[10px] py-[12px]
                        outline-none text-[#777E90]'   
                        placeholder='2nd' 
                    />
                    <input 
                        type="text"
                        className='border-[#E6E8EC] border-2 rounded-xl px-[10px] py-[12px]
                        outline-none text-[#777E90]'    
                        placeholder='3d'
                    />
                </div>
            </div>

            <div
                className='w-full my-10 bg-[#E6E8EC] h-[1px]'
            >
            </div>

            <div className='flex items-center gap-4 mb-[137px]'>
                <button 
                    className='bg-[#3B71FE] px-3 py-4 rounded-full  text-sm
                    text-white flex items-center gap-x-2 hover:scale-95 transition-all'
                >
                    Submit for review <ArrowRight size={14}/>
                </button>
                <button 
                    className='text-[#23262F] px-3 py-4 rounded-full border-2 border-[#E6E8EC]'
                >
                    Preview
                </button>
            </div>
        </form>
    )
};

export default HomePropertyForm;