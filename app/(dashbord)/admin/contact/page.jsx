import React, { Suspense } from 'react'
 import { AiOutlineEye } from "react-icons/ai";
import DelmailBtn from '@/components/Delete/DelmailBtn';
import Link from 'next/link';
import { FiMessageSquare } from "react-icons/fi";

import getEmails from '@/controllers/email';
import { TotalEmail } from '@/components/total/Total';
async function Acontact() {
  const emails = await getEmails();
  // console.log('Email loded');
  let i = 1;
  return (
    <>
      
    <div className="w-full flex max-w-[1430px] flex-wrap -mt-10 md:-mt-8 mx-auto pb-4 justify-around">
        <div className="w-full m-4 md:w-8/12 px-4 py-4 rounded-lg ">
          <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-1 shadow-lg rounded-full bg-white">
            <FiMessageSquare size={25} />
          </div>
          <h3
            className={
              "font-semibold text-3xl "}
          >
            Contact request
          </h3>
        </div>
        <div className="w-full m-4 md:w-3/12 px-4 py-4 bg-green-400 rounded-lg flex-grow">
        <TotalEmail/>
          <h3
            className={
              "font-semibold text-2xl "}
          >
            Total Request
            </h3>
            
          </div>
      </div>
    <div className="w-full px-4">
      

      <div
        className={
          "relative flex flex-col min-h-[50vh] min-w-0 break-words w-full mb-6 bg-white rounded "}
      >

        <div className="block w-full overflow-x-auto">
        {
      emails ? (
          <table className="items-center w-full bg-transparent -collapse">
            <thead>
              <tr className='border border-l-0 border-r-0 bg-slate-200'>
                <th
                  className={
                    "pl-6 table-cell pr-1   py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  #
                </th>
                <th
                  className={
                    "px-6 table-cell  py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  Name
                </th>
                <th
                  className={
                    "hidden sm:table-cell  px-6    py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6  py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  Subject
                </th>
                <th
                  className={
                    "hidden sm:table-cell px-6    py-3 text-xs md:text-sm flex-grow uppercase   font-semibold text-left "
                  }
                >
                  Details
                </th>
                <th
                  className={
                    " w-12 px-6    py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  ac
                </th>
              </tr>
            </thead>
            <tbody>
              {emails?.map((email) => {
                return (
                  <tr key={email._id} className='border border-l-0 border-r-0'>
                    <Suspense fallback={<p>Loading</p>}>
                    <td
                      className={
                        " table-cell pl-6 pr-1    py-3 text-xs md:text-sm    text-left "
                      }
                    >
                      {i++}
                    </td>
                    <td
                      className={
                        "table-cell pl-6 pr-1    py-3 text-xs md:text-sm    text-left "
                      }
                    >
                      {email.fullname}
                    </td><td
                      className={
                        "hidden sm:table-cell pl-6 pr-1    py-3 text-xs md:text-sm    text-left "
                      }
                    >
                      {email.email}
                    </td><td
                      className={
                        "table-cell pl-6 pr-1    py-3 text-xs md:text-sm    text-left "
                      }
                    >
                      {(email.subject).substring(0,15)}
                    </td><td
                      className={
                        "hidden sm:table-cell pl-6 pr-1 align-middle   py-3 text-xs md:text-sm    text-left "
                      }
                    >
                      {(email.details).substring(0, 12)}
                    </td>
                    <td
                      className={
                        "table-cell px-6 align-middle   py-3 text-xs md:text-sm flex-grow   text-left "
                      }
                    >
                      <div className='md:flex'>

                      <Link href={`/admin/contact/${email._id}`} title="View " >
                        <AiOutlineEye className='text-green-600' size={25} />
                      </Link>
                      <p className='hidden md:block px-2'></p>
                      <DelmailBtn id={email._id} />
                      </div>
                    </td>
                    </Suspense>
                  </tr>

                )
              })}
            </tbody>
          </table>
      ) : null
            }
        </div>
      </div>

    </div>

    </>
  )
}

export default Acontact