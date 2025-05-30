import { baseApi } from "../../api/baseApi";

const createOrganisationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrganisation: builder.mutation({
      query: (formData) => ({
        url: "/employer/create-organisation",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});
export const { useCreateOrganisationMutation } = createOrganisationApi;
