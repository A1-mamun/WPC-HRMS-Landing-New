import { baseApi } from "../../api/baseApi";

const createEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployee: builder.mutation({
      query: (formData) => ({
        url: "/employee/create-employee",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});
export const { useCreateEmployeeMutation } = createEmployeeApi;
