import React from 'react'
import getSingleEmail from '@/app/controllers/singleEmail';
import DelmailBtn from '@/components/DelmailBtn';
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";

async function Cdetails({ params: { id } }) {
  const email = await getSingleEmail(id); 
  console.log(email);
  return (
    <div className="w-full px-4">
        <div className="relative min-h-[75vh] flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-50 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between"><Link href={`/admin/contact`} title="back">
                    <IoChevronBack className="text-black" size={25}/>
                  </Link> 
                    <h6 className="text-black text-xl font-bold">{email.subject}</h6>
            
              <DelmailBtn id={email._id} />
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10">
          
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                  <div
                    className="block uppercase text-gray-600 text-sm font-bold my-3"
                    
                  >
                    Full Name : <label className=' font-normal'>{email.fullname}</label> 
                  </div>
                  <hr/>
                  <div
                    className="block uppercase text-gray-600 text-sm font-bold my-3"
                    
                  >
                    Email : <label className=' font-normal'>{email.email}</label> 
                  </div>
                  <hr/>
                  <div
                    className="block uppercase text-gray-600 text-sm font-bold my-3"
                    
                  >
                    Subject : <label className=' font-normal'>{email.subject}</label> 
                  </div>
                  <hr/>
                  <div
                    className="block uppercase text-gray-600 text-sm font-bold my-3"
                    
                  >
                    Details : <label className=' font-normal'>{email.details}</label>
                  </div>
                </div>
              </div>
            </div>
           </div>
           </div>
  )
}

export default Cdetails