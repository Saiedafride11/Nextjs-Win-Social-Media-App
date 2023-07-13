"use client";
import { useRouter as UseRouter } from "next/navigation";
import { useState } from "react";

import Image from "next/image";
import feelingsIcon from "../../../assets/feelings.png";
import profileImage from "../../../assets/me.jpg";
import photoIcon from "../../../assets/photos.png";
import videoIcon from "../../../assets/video.png";

const CreatePost = () => {

      const createPostIcons = [
            { "icon": videoIcon, "title": "Live video" },
            { "icon": photoIcon, "title": "Photo/video" },
            { "icon": feelingsIcon, "title": "Feeling/activity" },
      ]

      const email = JSON.parse(localStorage.getItem("email"));
  const router = UseRouter();

  const [formData, setFormData] = useState({
    email: email,
    title: "",
    location: "",
    jobType: "",
    jobCategory: "",
    description: "",
  });
  const [createPostOpen, setCreatePostOpen] = useState(true);
  const [imgLoading, setImgLoading] = useState(false);
  const [imgSuccess, setImgSuccess] = useState(false);
  const jobTypes = [
    "Unspecified",
    "Pet Sitter",
    "Dog Sitter",
    "Cat Sitter",
    "Fish Walker",
    "Bird Sitter",
  ];
  const jobCategories = [
    "Unspecified",
    "Pet Feeding",
    "Cat Feeding",
    "Bird Feeding",
  ];
  //  handle input data
  const handleOnChange = (e) => {
   
  };
  // submit input data
  const handleLoginSubmit = (e) => {
   
  };



  // handle image input field
  const imageUploadHandler = (e) => {
   
  };
      return (
            <main className="w-full">
                  <section className="container px-2 lg:px-96 mx-auto py-4">
                        {
                              createPostOpen ?
                              <div className="py-5 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80">
                                    <div className="flex items-center mb-4">
                                          <div className="rounded-full">
                                                <Image src={profileImage} width={50} height={50} alt="icon" className="rounded-full"/>
                                          </div>
                                          <button onClick={() => setCreatePostOpen(!createPostOpen)} className="rounded-full bg-[#f0f2f5] w-full text-gray-500 text-left pl-3 py-2 ml-2">What's on your mind, Saied?</button>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between mt-3 mb-2 px-5">
                                          {
                                                createPostIcons?.map( (postIcon, i) => (
                                                      <div className="flex items-center" key={i}>
                                                            <Image src={postIcon?.icon} width={25} height={25} alt="icon"/>
                                                            <h4 className="text-sm font-bold text-gray-500 ml-2">{postIcon?.title}</h4>
                                                      </div>
                                                ))
                                          }
                                    </div>
                              </div>
                              :
                              <div className="py-10 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80">
                                    <form onSubmit={handleLoginSubmit}>
                                          <div className="flex justify-between mb-2">
                                                <h4 className="text-lg text-gray-700">Create post</h4>
                                                <h4 onClick={() => setCreatePostOpen(!createPostOpen)} className="text-lg text-gray-700 cursor-pointer">✖</h4>
                                          </div>
                                          <textarea
                                                rows="5"
                                                name="post"
                                                required
                                                onChange={handleOnChange}
                                                className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                                placeholder="What's on your mind?"
                                                value={formData?.post}
                                          />
                                          <input
                                                type="file"
                                                name="file"
                                                className="mb-1 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                                placeholder="Enter your title here"
                                                onChange={imageUploadHandler}
                                                required
                                          />
                                          <button
                                                type="submit"
                                                disabled={imgLoading && !imgSuccess}
                                                className="w-full bg-[#1b74e4] shadow-lg shadow-lime-200/10 text-white font-bold py-2 px-6 rounded"
                                                >
                                                <span className="inline-block mr-2">
                                                      {/* {(imgLoading && !imgSuccess) || isLoading & !isSuccess ? (
                                                      <div className="flex justify-center items-center flex-row">
                                                      <BiLoaderAlt className="animate-spin mr-3" />
                                                      Processing...
                                                      </div>
                                                      ) : (
                                                      "Submit Job"
                                                      )} */}
                                                      Post
                                                </span>
                                          </button>
                                    </form>
                              </div>
                        }
                  </section>
            </main>
      );
};

export default CreatePost;