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
} = hcmMasterApi;
