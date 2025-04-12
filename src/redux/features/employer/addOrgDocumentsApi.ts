import { baseApi } from "../../api/baseApi";

const addOrgDocumentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addOrgDocuments: builder.mutation({
      query: (formData) => ({
        url: "/employer/add-org-documents",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});
export const { useAddOrgDocumentsMutation } = addOrgDocumentsApi;
