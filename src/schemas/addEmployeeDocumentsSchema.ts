import { z } from "zod";
import {
  annualPays,
  bankNames,
  employmentTypes,
  kinRelationships,
  maritalStatus,
  nationalies,
  payGroups,
  paymentCurrencies,
  payModes,
  payTypes,
  taxCodes,
  wadgesPayModes,
} from "../constants/employee";
import { countries } from "../constants/organisation";

const educationalDetailsSchema = z.object({
  qualification: z.string().optional(),
  subject: z.string().optional(),
  institutionName: z.string().optional(),
  awardingBody: z.string().optional(),
  yearOfPassing: z.string().optional(),
  percentage: z.string().optional(),
  grade: z.string().optional(),
  transcriptDocument: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Transcript is required",
    })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Only JPG, PNG or PDF  allowed",
      }
    )
    .optional(),
  certificateDocument: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Document is required",
    })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Only JPG,PNG or PDF  allowed",
      }
    )
    .optional(),
});

const jobDetailsSchema = z.object({
  title: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  experience: z.string().optional(),
  description: z.string().optional(),
  responsibilities: z.string().optional(),
});

const trainingDetailsSchema = z.object({
  title: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  description: z.string().optional(),
});

export const addEmployeeDocumentsSchema = z.object({
  employeeCode: z.string().min(1, "Employee code is required"),
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .regex(/^[A-Z]/, {
      message: "First name must start with a capital letter",
    }),
  middleName: z
    .string()
    .optional()
    .refine((val) => !val || /^[A-Z]/.test(val), {
      message: "Middle name must start with a capital letter",
    }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .regex(/^[A-Z]/, {
      message: "Last name must start with a capital letter",
    }),
  gender: z.enum(["Male", "Female", "Others"]).optional(),
  niNumber: z.string().optional(),
  dateOfBirth: z.string().optional(),
  maritalStatus: z.enum([...maritalStatus] as [string, ...string[]]).optional(),
  nationality: z.enum([...nationalies] as [string, ...string[]]).optional(),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email({ message: "Invalid email address" }),
  contactNumber: z.string().min(1, "Contact number is required"),
  alternativeNumber: z.string().optional(),
  department: z.string().optional(),
  designation: z.string().optional(),
  dateOfJoining: z.string().optional(),
  employeeType: z
    .enum([...employmentTypes] as [string, ...string[]])
    .optional(),
  dateOfConfirmation: z.string().optional(),
  contractStartDate: z.string().optional(),
  contractEndDate: z.string().optional(),
  jobLocation: z.string().optional(),
  profilePicture: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "This is required",
    })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Only JPG or PNG  allowed",
    })
    .optional(),
  educationalDetails: z.array(educationalDetailsSchema).optional(),
  jobDetails: z.array(jobDetailsSchema).optional(),

  trainingDetails: z.array(trainingDetailsSchema).optional(),
  nextOfKinContactName: z.string().optional(),
  nextOfKinContactRelationship: z
    .enum([...kinRelationships] as [string, ...string[]])
    .optional(),
  nextOfKinContactEmail: z
    .string()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),
  nextOfKinContactNumber: z.string().optional(),
  nextOfKinContactAddress: z.string().optional(),
  titleCertifiedLicense: z.string().optional(),
  licenseNumber: z.string().optional(),
  issueDate: z.string().optional(),
  expiryDate: z.string().optional(),
  postCode: z.string().optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  addressLine3: z.string().optional(),
  city: z.string().optional(),
  country: z.enum([...countries] as [string, ...string[]]).optional(),
  proofOfAddress: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "This is required",
    })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Only JPG,PNG or PDF  allowed",
      }
    )
    .optional(),
  passportNumber: z.string().optional(),
  passportNationality: z
    .enum([...nationalies] as [string, ...string[]])
    .optional(),
  placeOfBirth: z.string().optional(),
  passportIssuedBy: z.string().optional(),
  passportIssueDate: z.string().optional(),
  passportExpiryDate: z.string().optional(),
  passportEligibleReviewDate: z.string().optional(),
  passportDocument: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Document is required",
    })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Only JPG,PNG or PDF  allowed",
      }
    )
    .optional(),
  passportRemarks: z.string().optional(),
  passportStatus: z.enum(["yes", "no"]).optional(),
  visaNumber: z.string().optional(),
  visaNationality: z.enum([...nationalies] as [string, ...string[]]).optional(),
  countryOfResidence: z
    .enum([...countries] as [string, ...string[]])
    .optional(),
  visaIssuedBy: z.string().optional(),
  visaIssueDate: z.string().optional(),
  visaExpiryDate: z.string().optional(),
  visaEligibleReviewDate: z.string().optional(),
  visaDocumentFrontSide: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Document is required",
    })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Only JPG,PNG or PDF  allowed",
      }
    )
    .optional(),
  visaDocumentBackSide: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Document is required",
    })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Only JPG,PNG or PDF  allowed",
      }
    )
    .optional(),
  visaRemarks: z.string().optional(),
  visaStatus: z.enum(["yes", "no"]).optional(),
  eussReferenceNumber: z.string().optional(),
  eussNationality: z.enum([...nationalies] as [string, ...string[]]).optional(),
  eussIssueDate: z.string().optional(),
  eussExpiryDate: z.string().optional(),
  eussEligibleReviewDate: z.string().optional(),
  eussDocument: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Document is required",
    })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Only JPG,PNG or PDF  allowed",
      }
    )
    .optional(),
  eussRemarks: z.string().optional(),
  eussStatus: z.enum(["yes", "no"]).optional(),
  dbsType: z.enum(["Basic", "Standard", "Advanced"]).optional(),
  dbsReferenceNumber: z.string().optional(),
  dbsNationality: z.enum([...nationalies] as [string, ...string[]]).optional(),
  dbsIssueDate: z.string().optional(),
  dbsExpiryDate: z.string().optional(),
  dbsEligibleReviewDate: z.string().optional(),
  dbsDocument: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Document is required",
    })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Only JPG,PNG or PDF  allowed",
      }
    )
    .optional(),
  dbsRemarks: z.string().optional(),
  dbsStatus: z.enum(["yes", "no"]).optional(),
  nationalIdNumber: z.string().optional(),
  nationalIdNationality: z
    .enum([...nationalies] as [string, ...string[]])
    .optional(),
  nationalIdCountryOfResidence: z
    .enum([...countries] as [string, ...string[]])
    .optional(),
  nationalIdIssueDate: z.string().optional(),
  nationalIdExpiryDate: z.string().optional(),
  nationalIdEligibleReviewDate: z.string().optional(),
  nationalIdDocument: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Document is required",
    })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Only JPG,PNG or PDF  allowed",
      }
    )
    .optional(),
  nationalIdRemarks: z.string().optional(),
  nationalIdStatus: z.enum(["yes", "no"]).optional(),
  othersDocumentName: z.string().optional(),
  othersDocumentReferenceNumber: z.string().optional(),
  othersNationality: z
    .enum([...nationalies] as [string, ...string[]])
    .optional(),
  othersIssueDate: z.string().optional(),
  othersExpiryDate: z.string().optional(),
  othersEligibleReviewDate: z.string().optional(),
  othersUploadDocument: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Document is required",
    })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Only JPG,PNG or PDF  allowed",
      }
    )
    .optional(),
  remarks: z.string().optional(),
  othersStatus: z.enum(["yes", "no"]).optional(),
  payGroup: z.enum([...payGroups] as [string, ...string[]]).optional(),
  wedgesPayMode: z
    .enum([...wadgesPayModes] as [string, ...string[]])
    .optional(),
  annualPay: z.enum([...annualPays] as [string, ...string[]]).optional(),
  paymentType: z.enum([...payTypes] as [string, ...string[]]).optional(),
  basicDailyWedges: z.string().optional(),
  minWorkingHour: z.string().optional(),
  rate: z.string().optional(),
  taxCode: z.enum([...taxCodes] as [string, ...string[]]).optional(),
  taxReference: z.string().optional(),
  taxPercentage: z.string().optional(),
  paymentMode: z.enum([...payModes] as [string, ...string[]]).optional(),
  bankName: z.enum([...bankNames] as [string, ...string[]]).optional(),
  branchName: z.string().optional(),
  accountNo: z.string().optional(),
  sortCode: z.string().optional(),
  paymentCurrency: z
    .enum([...paymentCurrencies] as [string, ...string[]])
    .optional(),
  taxables: z.array(z.string()).optional(),
  deductions: z.array(z.string()).optional(),
});

export type EmployeeFormSchemaType = z.infer<typeof addEmployeeDocumentsSchema>;
