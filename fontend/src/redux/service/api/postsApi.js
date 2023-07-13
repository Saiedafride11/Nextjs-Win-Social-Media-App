import { apiSlice } from "./apiSlice";

const PostsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all Posts
    getPostsApi: builder.query({
      query: () => "/posts",
      providesTags: ["posts"],
    }),
    // get single Post
    getPostApi: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ["posts"],
    }),
    // post Apply
    postPostsApi: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["posts"],
    }),
    // update Post
//     updatePost: builder.mutation({
//       query: ({ _id, updateStatus }) => ({
//         url: `/posts/${_id}`,
//         method: "PATCH",
//         body: updateStatus,
//       }),
//       invalidatesTags: (result, error, arg) => [
//         "posts",
//         { type: "posts", id: arg.id },
//       ],
//     }),
    // delete Posts
    deletePosts: builder.mutation({
      // delete single member ------------------->
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsApiQuery, useGetPostApiQuery, usePostPostsApiMutation } = PostsApi;
