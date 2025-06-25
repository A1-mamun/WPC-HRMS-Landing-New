import { baseApi } from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrgaisations: builder.query({
      query: () => ({
        url: "/employer/organisations",
        method: "GET",
      }),
    }),
    getOrganisationById: builder.query({
      query: (id) => ({
        url: `/employer/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetOrgaisationsQuery, useGetOrganisationByIdQuery } =
  adminApi;
