import { baseApi } from "../../api/baseApi";

const hcmMasterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrganisationDepartments: builder.query({
      query: () => ({
        url: "/department/departments",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetOrganisationDepartmentsQuery } = hcmMasterApi;
