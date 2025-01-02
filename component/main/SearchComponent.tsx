import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchComponent() {
    return (
        <div className='w-full'>
            <div className='w-full relative z-50 lg:-mt-8 mt-0'>
                <div className='lg:h-16 lg:py-1 py-10  h-fit lg:w-[98%] w-full mx-auto bg-secondary rounded'>
                    <div className='h-full'>
                        <form action="" className='h-full'>
                            <div className='flex lg:flex-row flex-col gap-5 items-center justify-center size-full px-10 sm:px-20 lg:px-10'>
                                <div className='w-full lg:w-fit'>
                                    <select className='select select-bordered rounded-sm w-full md:px-10'>
                                        <option disabled selected>---------Apartment-----------</option>
                                    </select>
                                </div>
                                <div className='w-full lg:w-fit'>
                                    <select className='select select-bordered md:px-10 rounded-sm w-full'>
                                        <option disabled selected>---------State-----------</option>
                                    </select>
                                </div>
                                <div className='w-full lg:w-fit'>
                                    <select className='select select-bordered md:px-10 rounded-sm w-full'>
                                        <option disabled selected>---------Region-----------</option>
                                    </select>
                                </div>
                                    <button className='btn btn-accent  rounded-sm w-full lg:w-fit md:px-20'>search <FontAwesomeIcon icon={faSearch} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
