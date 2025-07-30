import { baseApi } from "../../api/baseApi";

const organisationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrganisation: builder.mutation({
      query: (formData) => ({
        url: "/employer/create-organisation",
        method: "POST",
        body: formData,
      }),
    }),
    getOrgaisationEmployees: builder.query({
      query: () => ({
        url: "/employee/organisation-employees",
        method: "GET",
      }),
    }),
    updateOrganisation: builder.mutation({
      query: ({ organisationId, data }) => ({
        url: `/employer/${organisationId}`,
        method: "PATCH",
        body: data,
      }),
    }),
    getOrgainsationHCMMaster: builder.query({
      query: () => ({
        url: "/employer/hcm-master-data",
        method: "GET",
      }),
    }),
  }),
});
export const {
  useCreateOrganisationMutation,
  useGetOrgaisationEmployeesQuery,
  useUpdateOrganisationMutation,
  useGetOrgainsationHCMMasterQuery,
} = organisationApi;
