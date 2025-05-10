import { baseApi } from "../../api/baseApi";

const addEmployeeDocumentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addEmployeeDocuments: builder.mutation({
      query: (formData) => ({
        url: "/employee/add-employee-documents",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});
export const { useAddEmployeeDocumentsMutation } = addEmployeeDocumentsApi;
