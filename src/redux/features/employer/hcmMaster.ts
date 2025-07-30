import { baseApi } from "../../api/baseApi";

const hcmMasterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrganisationDepartments: builder.query({
      query: () => ({
        url: "/department/departments",
        method: "GET",
      }),
    }),
    getOrganisationDesignations: builder.query({
      query: () => ({
        url: "/designation/designations",
        method: "GET",
      }),
    }),
    getOrganisationEmploymentTypes: builder.query({
      query: () => ({
        url: "/employment-type/employment-types",
        method: "GET",
      }),
    }),
    getOrganisationPayGroups: builder.query({
      query: () => ({
        url: "/pay-group/pay-groups",
        method: "GET",
      }),
    }),
    getOrganisationAnnualPays: builder.query({
      query: () => ({
        url: "/annual-pay/annual-pays",
        method: "GET",
      }),
    }),
    getOrganisationBankMasters: builder.query({
      query: () => ({
        url: "/bank-master/bank-masters",
        method: "GET",
      }),
    }),
    getOrganisationBankSortCodes: builder.query({
      query: () => ({
        url: "/bank-sort-code/bank-sort-codes",
        method: "GET",
      }),
    }),
    getOrganisationTaxMasters: builder.query({
      query: () => ({
        url: "/tax-master/tax-masters",
        method: "GET",
      }),
    }),
    getOrganisationPaymentTypes: builder.query({
      query: () => ({
        url: "/payment-type/payment-types",
        method: "GET",
      }),
    }),
    getOrganisationWedgesPayModes: builder.query({
      query: () => ({
        url: "/wedges-pay-mode/wedges-pay-modes",
        method: "GET",
      }),
    }),
    createOrganisationDepartment: builder.mutation({
      query: ({ data }) => ({
        url: "/department/create-department",
        method: "POST",
        body: data,
      }),
    }),
    createOrganisationDesignation: builder.mutation({
      query: ({ data }) => ({
        url: "/designation/create-designation",
        method: "POST",
        body: data,
      }),
    }),
    createOrganisationEmploymentType: builder.mutation({
      query: ({ data }) => ({
        url: "/employment-type/create-employment-type",
        method: "POST",
        body: data,
      }),
    }),
    createOrganisationPayGroup: builder.mutation({
      query: ({ data }) => ({
        url: "/pay-group/create-pay-group",
        method: "POST",
        body: data,
      }),
    }),
    createOrganisationAnnualPay: builder.mutation({
      query: ({ data }) => ({
        url: "/annual-pay/create-annual-pay",
        method: "POST",
        body: data,
      }),
    }),
    createOrganisationBankMaster: builder.mutation({
      query: ({ data }) => ({
        url: "/bank-master/create-bank-master",
        method: "POST",
        body: data,
      }),
    }),
    createOrganisationBankSortCode: builder.mutation({
      query: ({ data }) => ({
        url: "/bank-sort-code/create-bank-sort-code",
        method: "POST",
        body: data,
      }),
    }),
    createOrganisationTaxMaster: builder.mutation({
      query: ({ data }) => ({
        url: "/tax-master/create-tax-master",
        method: "POST",
        body: data,
      }),
    }),
    createOrganisationPaymentType: builder.mutation({
      query: ({ data }) => ({
        url: "/payment-type/create-payment-type",
        method: "POST",
        body: data,
      }),
    }),
    createOrganisationWedgesPayMode: builder.mutation({
      query: ({ data }) => ({
        url: "/wedges-pay-mode/create-wedges-pay-mode",
        method: "POST",
        body: data,
      }),
    }),
    updateOrganisationHCMMaster: builder.mutation({
      query: ({ route, id, data }) => ({
        url: `/${route}/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    // updateOrganisationDesignation: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/designation/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    // }),
    // updateOrganisationEmploymentType: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/employment-type/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    // }),
    // updateOrganisationPayGroup: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/pay-group/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    // }),
    // updateOrganisationAnnualPay: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/annual-pay/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    // }),
    // updateOrganisationBankMaster: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/bank-master/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    // }),
    // updateOrganisationBankSortCode: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/bank-sort-code/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    // }),
    // updateOrganisationTaxMaster: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/tax-master/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    // }),
    // updateOrganisationPaymentType: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/payment-type/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    // }),
    // updateOrganisationWedgesPayMode: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/wedges-pay-mode/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    // }),
  }),
});
export const {
  useGetOrganisationDepartmentsQuery,
  useGetOrganisationDesignationsQuery,
  useGetOrganisationEmploymentTypesQuery,
  useGetOrganisationPayGroupsQuery,
  useGetOrganisationAnnualPaysQuery,
  useGetOrganisationBankMastersQuery,
  useGetOrganisationBankSortCodesQuery,
  useGetOrganisationTaxMastersQuery,
  useGetOrganisationPaymentTypesQuery,
  useGetOrganisationWedgesPayModesQuery,
  useCreateOrganisationDepartmentMutation,
  useCreateOrganisationDesignationMutation,
  useCreateOrganisationEmploymentTypeMutation,
  useCreateOrganisationPayGroupMutation,
  useCreateOrganisationAnnualPayMutation,
  useCreateOrganisationBankMasterMutation,
  useCreateOrganisationBankSortCodeMutation,
  useCreateOrganisationTaxMasterMutation,
  useCreateOrganisationPaymentTypeMutation,
  useCreateOrganisationWedgesPayModeMutation,
  useUpdateOrganisationHCMMasterMutation,
  // useUpdateOrganisationDepartmentMutation,
  // useUpdateOrganisationDesignationMutation,
  // useUpdateOrganisationEmploymentTypeMutation,
  // useUpdateOrganisationPayGroupMutation,
  // useUpdateOrganisationAnnualPayMutation,
  // useUpdateOrganisationBankMasterMutation,
  // useUpdateOrganisationBankSortCodeMutation,
  // useUpdateOrganisationTaxMasterMutation,
  // useUpdateOrganisationPaymentTypeMutation,
  // useUpdateOrganisationWedgesPayModeMutation,
} = hcmMasterApi;
