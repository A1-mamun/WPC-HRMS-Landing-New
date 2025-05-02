import { z } from "zod";
import {
  countries,
  OrganisationTypes,
  SectorsName,
  TradingPeriod,
} from "../constants/organisation";

export const addOrgDocumentsSchema = (logedInEmail: string | undefined) =>
  z.object({
    // organisation deails validation area
    organisationName: z
      .string()
      .min(1, { message: "Name is required" })
      .regex(/^[A-Z]/, { message: "Name must start with a capital letter" }),
    organisationType: z.enum([...OrganisationTypes] as [string, ...string[]], {
      required_error: "Organisation type is required",
    }),
    registrationNumber: z.string().optional(),
    contactNumber: z.string().min(1, "Contact number is required"),
    loginEmail: z
      .string({ required_error: "Login email is required" })
      .min(1, "Login email is required")
      .email({
        message: "Invalid email address",
      })
      .refine((email) => email === logedInEmail, {
        message: "Login email must match your user email",
      }),
    organisationEmail: z
      .string({ required_error: "Organisation email is required" })
      .min(1, "Organisation email is required")
      .email({ message: "Invalid email address" }),
    websiteURL: z.string().optional(),
    landlineNumber: z.string().optional(),
    tradingName: z
      .string()
      .min(1, "Trading name is required")
      .regex(/^[A-Z]/, { message: "Name must start with a capital letter" }),
    tradingPeriod: z.enum([...TradingPeriod] as [string, ...string[]], {
      required_error: "Trading period is required",
    }),
    sector: z.enum([...SectorsName] as [string, ...string[]], {
      required_error: "Sector name is required",
    }),
    logo: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "File is required",
      })
      .refine((file) => file.size <= 200 * 1024, {
        message: "Max file size is 200KB",
      })
      .refine((file) => ["image/jpg", "image/png"].includes(file.type), {
        message: "Only JPG or PNG allowed",
      }),
    nameChangeLast5Years: z.string({
      required_error: "Name change in last 5 years is required",
    }),
    penaltyLast3Years: z.string({
      required_error: "Penalty in last 3 years is required",
    }),

    // authorised person validation area
    firstName: z
      .string()
      .min(1, { message: "First name is required" })
      .regex(/^[A-Z]/, {
        message: "First name must start with a capital letter",
      }),
    lastName: z
      .string()
      .min(1, { message: "Last name is required" })
      .regex(/^[A-Z]/, {
        message: "Last name must start with a capital letter",
      }),
    designation: z
      .string()
      .min(1, { message: "Designation is required" })
      .regex(/^[A-Z]/, {
        message: "Designation must start with a capital letter",
      }),
    phoneNo: z.string().min(1, { message: "Phone number is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email({
        message: "Invalid email address",
      }),
    proofOfId: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "Proof Of Id is required",
      })
      .refine((file) => file.size <= 200 * 1024, {
        message: "Max file size is 200KB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      ),
    criminalHistory: z.enum(["Yes", "No"] as [string, ...string[]], {
      required_error: "Criminal history is required",
    }),

    // key conact person validation area
    keyPersonFirstName: z
      .string()
      .min(1, { message: "First name is required" })
      .regex(/^[A-Z]/, {
        message: "First name must start with a capital letter",
      }),
    keyPersonLastName: z
      .string()
      .min(1, { message: "Last name is required" })
      .regex(/^[A-Z]/, {
        message: "Last name must start with a capital letter",
      }),
    keyPersonDesignation: z
      .string()
      .min(1, { message: "Designation is required" })
      .regex(/^[A-Z]/, {
        message: "Designation must start with a capital letter",
      }),
    keyPersonPhoneNo: z
      .string()
      .min(1, { message: "Phone number is required" }),
    keyPersonEmail: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email({
        message: "Invalid email address",
      }),
    keyPersonProofOfId: z
      .custom<File | null>((val) => val instanceof File && val.size > 0, {
        message: "Proof Of Id is required",
      })
      .refine((file) => file === null || file.size <= 200 * 1024, {
        message: "Max file size is 200KB",
      })
      .refine(
        (file) =>
          file === null ||
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      ),
    keyPersonCriminalHistory: z.enum(["Yes", "No"] as [string, ...string[]], {
      required_error: "Criminal history is required",
    }),

    // level 1 person validation area
    level1PersonFirstName: z
      .string()
      .min(1, { message: "First name is required" })
      .regex(/^[A-Z]/, {
        message: "First name must start with a capital letter",
      }),
    level1PersonLastName: z
      .string()
      .min(1, { message: "Last name is required" })
      .regex(/^[A-Z]/, {
        message: "Last name must start with a capital letter",
      }),
    level1PersonDesignation: z
      .string()
      .min(1, { message: "Designation is required" })
      .regex(/^[A-Z]/, {
        message: "Designation must start with a capital letter",
      }),
    level1PersonPhoneNo: z
      .string()
      .min(1, { message: "Phone number is required" }),
    level1PersonEmail: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email({
        message: "Invalid email address",
      }),
    level1PersonProofOfId: z
      .custom<File | null>((val) => val instanceof File && val.size > 0, {
        message: "Proof Of Id is required",
      })
      .refine((file) => file === null || file.size <= 200 * 1024, {
        message: "Max file size is 200KB",
      })
      .refine(
        (file) =>
          file === null ||
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      ),
    level1PersonCriminalHistory: z.enum(
      ["Yes", "No"] as [string, ...string[]],
      {
        required_error: "Criminal history is required",
      }
    ),

    // organisation validation area
    postCode: z.string().optional(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    addressLine3: z.string().optional(),
    cityCounty: z.string().optional(),
    country: z.enum([...countries] as [string, ...string[]]).optional(),

    // trading hours validation area
    mondayStatus: z.enum(["Close", "Open"]).optional(),
    tuesdayStatus: z.enum(["Close", "Open"]).optional(),
    wednesdayStatus: z.enum(["Close", "Open"]).optional(),
    thursdayStatus: z.enum(["Close", "Open"]).optional(),
    fridayStatus: z.enum(["Close", "Open"]).optional(),
    saturdayStatus: z.enum(["Close", "Open"]).optional(),
    sundayStatus: z.enum(["Close", "Open"]).optional(),
    mondayOpeningTime: z.string().optional(),
    tuesdayOpeningTime: z.string().optional(),
    wednesdayOpeningTime: z.string().optional(),
    thursdayOpeningTime: z.string().optional(),
    fridayOpeningTime: z.string().optional(),
    saturdayOpeningTime: z.string().optional(),
    sundayOpeningTime: z.string().optional(),
    mondayClosingTime: z.string().optional(),
    tuesdayClosingTime: z.string().optional(),
    wednesdayClosingTime: z.string().optional(),
    thursdayClosingTime: z.string().optional(),
    fridayClosingTime: z.string().optional(),
    saturdayClosingTime: z.string().optional(),
    sundayClosingTime: z.string().optional(),

    // documents validation area
    payeeAccountReference: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    latestRti: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    employerLiabilityInsurance: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    proofOfBusinessPremises: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    copyOfLease: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    businessBankStatement: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    signedAnnualAccount: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    vatCertificate: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    healthSafetyRating: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    regulatoryBodyCertificate: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    businessLicense: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    franchiseAgreement: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    governingBodyRegistration: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    auditedAnnualAccount: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
    othersDocuments: z
      .custom<File>((val) => val instanceof File && val.size > 0, {
        message: "This is required",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Max file size is 2MB",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
        {
          message: "Only JPG, PNG or PDF allowed",
        }
      )
      .optional(),
  });

export type EmployerFormSchemaType = z.infer<
  ReturnType<typeof addOrgDocumentsSchema>
>;
