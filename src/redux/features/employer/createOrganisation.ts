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
  }),
});
export const {
  useCreateOrganisationMutation,
  useGetOrgaisationEmployeesQuery,
} = organisationApi;
