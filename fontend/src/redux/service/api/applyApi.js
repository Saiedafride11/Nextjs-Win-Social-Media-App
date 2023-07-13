import { apiSlice } from "./apiSlice";

const ApplyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all Apply
    getApplysApi: builder.query({
      query: () => "/apply",
      providesTags: ["apply"],
    }),
    // get single Apply
    getApplyApi: builder.query({
      query: (id) => `/apply/${id}`,
      providesTags: ["apply"],
    }),
    // post Apply
    postApply: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["apply"],
    }),
    // update Apply
    updateApply: builder.mutation({
      // update single member ---------------->
      query: ({ _id, updateStatus }) => ({
        url: `/apply/${_id}`,
        method: "PATCH",
        body: updateStatus,
      }),
      invalidatesTags: (result, error, arg) => [
        "apply",
        { type: "apply", id: arg.id },
      ],
    }),
    // delete Apply
    deleteApply: builder.mutation({
      // delete single member ------------------->
      query: (id) => ({
        url: `/apply/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["apply"],
    }),
  }),
});

export const {
  useGetApplysApiQuery,
  useGetApplyApiQuery,
  usePostApplyMutation,
  useUpdateApplyMutation,
  useDeleteApplyMutation,
} = ApplyApi;
