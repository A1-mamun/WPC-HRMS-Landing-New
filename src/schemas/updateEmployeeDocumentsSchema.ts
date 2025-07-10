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
import { countries } from "../constants/common";

// educational details schema
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

// job details schema
const jobDetailsSchema = z.object({
  title: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  experience: z.string().optional(),
  description: z.string().optional(),
  responsibilities: z.string().optional(),
});

// training details schema
const trainingDetailsSchema = z.object({
  title: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  description: z.string().optional(),
});

// other details schema
const otherDetailsSchema = z.object({
  documentName: z.string().optional(),
  referenceNo: z.string().optional(),
  nationality: z.enum([...nationalies] as [string, ...string[]]).optional(),
  issueDate: z.string().optional(),
  expiryDate: z.string().optional(),
  eligibleReviewDate: z.string().optional(),
  document: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "This Document is required",
    })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "Max file size is 2MB",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Only JPG or PNG allowed",
    })
    .optional(),
  remarks: z.string().optional(),
  isCurrentStatus: z.enum(["yes", "no"]).optional(),
});

export const updateEmployeeDocumentsSchema = z.object({
  // personal details
  employeeCode: z
    .string({ required_error: "Email is required" })
    .min(1, "Employee code is required"),
  firstName: z
    .string({ required_error: "First name is required" })
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

  contactNumber: z.string().min(1, "Contact number is required"),
  alternativeNumber: z.string().optional(),

  // services details
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

  // educational details
  educationalDetails: z.array(educationalDetailsSchema).optional(),

  // job details
  jobDetails: z.array(jobDetailsSchema).optional(),

  // training details
  trainingDetails: z.array(trainingDetailsSchema).optional(),

  // emergency / next of kin contact details
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

  // certified membership details
  titleCertifiedLicense: z.string().optional(),
  licenseNumber: z.string().optional(),
  issueDate: z.string().optional(),
  expiryDate: z.string().optional(),

  // contact information
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

  // passport details
  passportNumber: z.string().min(1, "Passport number is required"),
  passportNationality: z.enum([...nationalies] as [string, ...string[]], {
    required_error: "Nationality is required",
  }),
  placeOfBirth: z.string().min(1, "Place of birth is required"),
  passportIssuedBy: z
    .string()
    .min(1, "Issued by is required")
    .regex(/^[A-Z]/, {
      message: "Must start with a capital letter",
    }),
  passportIssueDate: z.string({ required_error: "Issue date is required" }),
  passportExpiryDate: z.string({ required_error: "Expiry date is required" }),
  passportEligibleReviewDate: z.string({
    required_error: "Eligible review date is required",
  }),
  passportDocument: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Document is required",
    })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "Max file size is 2MB",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Only JPG or PNG  allowed",
    }),
  passportRemarks: z.string().min(1, "Remarks is required"),
  passportStatus: z.enum(["yes", "no"], {
    required_error: "Status is required",
  }),

  // visa details
  visaNumber: z.string().min(1, "Visa number is required"),
  visaNationality: z.enum([...nationalies] as [string, ...string[]], {
    required_error: "Nationality is required",
  }),
  countryOfResidence: z.enum([...countries] as [string, ...string[]], {
    required_error: "Country of residence is required",
  }),
  visaIssuedBy: z
    .string()
    .min(1, "Issued by is required")
    .regex(/^[A-Z]/, {
      message: "Must start with a capital letter",
    }),
  visaIssueDate: z.string({ required_error: "Issue date is required" }),
  visaExpiryDate: z.string({ required_error: "Expiry date is required" }),
  visaEligibleReviewDate: z.string({
    required_error: "Eligible review date is required",
  }),
  visaDocumentFrontSide: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Document is required",
    })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "Max file size is 2MB",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Only JPG or PNG  allowed",
    }),
  visaDocumentBackSide: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "Document is required",
    })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "Max file size is 2MB",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Only JPG or PNG  allowed",
    }),
  visaRemarks: z.string().min(1, "Remarks is required"),
  visaStatus: z.enum(["yes", "no"], { required_error: "Status is required" }),

  // euss / time limit details
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

  // dbs details
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

  // national id details
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

  // others details
  otherDetails: z.array(otherDetailsSchema).optional(),

  // pay details
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

  // pay structure
  taxables: z.array(z.string()).optional(),
  deductions: z.array(z.string()).optional(),
});

export type EmployeeUpdateFormSchemaType = z.infer<
  typeof updateEmployeeDocumentsSchema
>;
