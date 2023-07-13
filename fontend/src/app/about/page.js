"use client";
import { useState } from "react";

const aboutData = [
      { "title": "Name", "body": "Saied Afride"},
      { "title": "Email", "body": "developer.afride@gmail.com"},
      { "title": "University", "body": "Bangladesh University of Business and Technology (BUBT)"},
      { "title": "Address", "body": "Mirpur, Dhaka, Bangladesh"},
]
const About = () => {

      const [formData, setFormData] = useState({
            name: aboutData[0].body,
            email: aboutData[1].body,
            university: aboutData[2].body,
            address: aboutData[3].body
      });
      const [editOpen, setEditOpen] = useState(true);

      const handleLoginSubmit = (e) => {
            e.preventDefault();
      }
      
      return (
            <>    
                 <main className="w-full h-screen">
                        <section className="container px-2 lg:px-96 mx-auto pt-4">
                              {
                                    editOpen ? 
                                    <div className="py-5 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80 mb-3">
                                          <div className="flex justify-between mb-10">
                                                <h4 className="text-xl text-gray-700">About Section</h4>
                                                <h4 className="text-lg text-gray-700 cursor-pointer" onClick={() => setEditOpen(!editOpen)}>Edit</h4>
                                          </div>
                                          {
                                                aboutData?.map((about, i) => (
                                                      <div className="flex items-center" key={i}>
                                                            <h4 className="text-lg font-bold text-gray-500 w-[100px]">{about.title}:</h4>
                                                            <h4 className="text-lg text-gray-500">{about.body}</h4>
                                                      </div>
                                                ))
                                          }
                                    </div>
                                    :
                                    <div className="py-5 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80 mb-3">
                                          <div className="flex justify-between mb-2">
                                                <h4 className="text-lg text-gray-700">Edit About</h4>
                                                <h4 onClick={() => setEditOpen(!editOpen)} className="text-lg text-gray-700 cursor-pointer">✖</h4>
                                          </div>
                                          <form onSubmit={handleLoginSubmit}>
                                                <h4 className="text-sm text-gray-700 mb-2">Your Name</h4>
                                                <input
                                                      type="text"
                                                      required
                                                      name="name"
                                                      value={formData?.name}
                                                      onChange={() => setFormData(formData?.name)}
                                                      placeholder="Enter your name here"
                                                      className="mb-5 py-3 px-4 block w-full outline-none border-[1px] focus:border-black border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                                />
                                                <h4 className="text-sm text-gray-700 mb-2">Your Email</h4>
                                                <input
                                                      type="email"
                                                      required
                                                      name="email"
                                                      value={formData?.email}
                                                      onChange={() => setFormData(formData?.email)}
                                                      placeholder="Enter your email here"
                                                      className="mb-5 py-3 px-4 block w-full outline-none border-[1px] focus:border-black border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                                />
                                                <h4 className="text-sm text-gray-700 mb-2">Your University</h4>
                                                <input
                                                      type="text"
                                                      required
                                                      name="university"
                                                      value={formData?.university}
                                                      onChange={() => setFormData(formData?.university)}
                                                      placeholder="Enter your university here"
                                                      className="mb-5 py-3 px-4 block w-full outline-none border-[1px] focus:border-black border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                                />
                                                <h4 className="text-sm text-gray-700 mb-2">Your Address</h4>
                                                <input
                                                      type="text"
                                                      required
                                                      name="address"
                                                      value={formData?.address}
                                                      onChange={() => setFormData(formData?.address)}
                                                      placeholder="Enter your address here"
                                                      className="mb-5 py-3 px-4 block w-full outline-none border-[1px] focus:border-black border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                                />
                              
                              
                                                <button
                                                      type="submit"
                                                      className="w-full bg-[#1b74e4] shadow-lg shadow-lime-200/10 text-white font-bold py-2 px-6 rounded"
                                                >
                                                Save
                                                </button>
                                          </form>
                                    </div>
                              }

                        </section>
                  </main>
            </>
      );
};

export default About;