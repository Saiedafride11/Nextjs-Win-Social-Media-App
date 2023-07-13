import { apiSlice } from "./apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all job
    getJobsApi: builder.query({
      query: () => "/job",
      providesTags: ["job"],
    }),
    // get single job
    getJobApi: builder.query({
      query: (id) => `/job/${id}`,
      providesTags: ["job"],
    }),
    // post job
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["job"],
    }),
    // update job
    updateJob: builder.mutation({
      // update single member ---------------->
      query: ({ _id, data }) => ({
        url: `/job/${_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "job",
        { type: "job", id: arg.id },
      ],
    }),
    // delete job
    deleteJob: builder.mutation({
      // delete single member ------------------->
      query: (id) => ({
        url: `/job/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["job"],
    }),
  }),
});

export const {
  useGetJobsApiQuery,
  useGetJobApiQuery,
  usePostJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = jobApi;
