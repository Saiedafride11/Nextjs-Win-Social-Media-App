"use client";
import Error from "@/app/components/utils/Error";
import { useGetPostApiQuery } from "@/redux/service/api/postsApi";
import SinglePost from "./SinglePost";

const MediaDetails = ({params}) => {
      const { isError, isLoading, isSuccess, data:singlePost } = useGetPostApiQuery(params.id);

      let content = null;
      if (isLoading) {
          content = "Loading..."
      }
  
      if (!isLoading && isError) {
          content = <Error message="There was an error" />;
      }
  
      if (!isLoading && !isError && singlePost?.length === 0) {
          content = <Error message="No post found!" />;
      }
  
      if (!isLoading && !isError && singlePost) {
          content = <SinglePost singlePost={singlePost}/>;
      }
      return (
            <main className="w-full h-screen">
                  <section className="container px-2 lg:px-96 mx-auto pt-4">
                        <div className="py-5 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80 mb-3">
                              {content}
                        </div>
                  </section>
            </main>
      );
};

export default MediaDetails;
