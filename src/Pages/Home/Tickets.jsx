import React from "react";
//import image from "../../assets/images/love.webp";
//

/*

            <div className="h-screen sm:col-span-2 md:col-span-1 bg-dark flex flex-wrap justify-center items-center">
               <div className='w-full'>
                    <h2 className='text-5xl w-full text-center'>Book A Ticket</h2>
                    <h4 className='w-full text-center mt-6'> ~ Check out our place ~ </h4>

               </div>
                
                <form className='grid gap-10 '>
            
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            className='sm:w-96 md:w-68 border-0'
                        />

                         <input
                            type="password"
                            required
                            placeholder="Password"
                            className='w-68 border-0'
                        />

                              <input 
                                        type="password"
                                        required
                                        placeholder="Password"
                                        className='w-68 border-0'
                                    />


                               <input
                                        type="password"
                                        required
                                        placeholder="Password"
                                        className='w-68 border-0'
                                    />


                                  <input
                                        type="password"
                                        required
                                        placeholder="Password"
                                        className='w-68 border-0'
                                    />


                                 <input
                                        type="password"
                                        required
                                        placeholder="Password"
                                        className='w-68 border-0'
                                 />


                 
                     <button className="btn btn-active btn-warning mt-10 col-span-2 w-76 m-auto">Apply</button>


                    </form>    
               

                
                
            </div>
*/
export const Tickets = () => {
  return (
    <section className="bg-base-300 w-full my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="w-full col-span-1 h-screen loveImage text-center hidden md:block"></div>

        <div className="h-screen bg-dark flex flex-wrap justify-center items-center">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl w-full text-center">
              Book A Ticket
            </h2>
            <h4 className="w-full text-center mt-6">
              {" "}
              ~ Check out our place ~{" "}
            </h4>
          </div>

          <form className="grid gap-x-8 gap-y-24 grid-cols-1 p-3 md:grid-cols-2 bg-amber-10 w-full">
            <input
              type="text"
              required
              placeholder="Name"
              className="border-0"
            />
            <input
              type="text"
              required
              placeholder="Phone"
              className="border-0"
            />
            <input
              type="text"
              required
              placeholder="Email"
              className="border-0"
            />

            <label className="select">
              <select>
                <option className="bg-amber-200 w-full">Personal</option>
                <option>Business</option>
              </select>
            </label>

            <label className="select">
              <select>
                <option>Personal</option>
                <option>Business</option>
              </select>
            </label>

            <input type="date"/>

          </form>
        </div>
      </div>
    </section>
  );
};
