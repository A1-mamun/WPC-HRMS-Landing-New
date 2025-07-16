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
    getEmployeeById: builder.query({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "GET",
      }),
    }),
    updateEmployee: builder.mutation({
      query: ({ employeeId, data }) => ({
        url: `/employee/${employeeId}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});
export const {
  useCreateEmployeeMutation,
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
} = createEmployeeApi;
