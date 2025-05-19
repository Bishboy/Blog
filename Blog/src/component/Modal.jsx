import React from 'react'

       
const Modal = ({ isModalOpen ,closeModal}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div>
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-sm">
          <h2 className="text-xl font-bold mb-4 mt-6 uppercase">
            Please Login here
          </h2>
          <form>
            <div>
              <input
                type="email"
                name="email "
                id="email"
                placeholder="exmaple@.com"
                className="w-full p-2 mb-4 outline-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <input
                type="password"
                name="password "
                id="password"
                placeholder="Input your password"
                className="w-full p-2 mb-4 outline-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button className='hover:shadow-md hover:bg-orange-500 font-semibold bg-[#6a64f1] py-3 px-8 rounded-md outline-none'>Login</button>
            </div>
          </form>
          <button onClick={closeModal} className='bg-gray-300 mt-4 hover:bg-gray-400 text-gray-800 inline-flex items-center  font-semibold py-3 px-8 rounded-md outline-none'> 
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal
