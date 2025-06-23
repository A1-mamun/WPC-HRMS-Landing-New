import { baseApi } from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrgaisations: builder.query({
      query: () => ({
        url: "/employer/organisations",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetOrgaisationsQuery } = adminApi;
