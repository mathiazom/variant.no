import { defineField, defineType } from "sanity";
import { titleSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import { title } from "../fields/text";
import { benefitId } from "./benefit";
import MultiLineDescription from "../../components/MultiLineDescription";

export const salaryAndBenefitsId = "salaryAndBenefits";

const salaryAndBenefits = defineType({
  name: salaryAndBenefitsId,
  type: "document",
  title: "Salary and Benefits",
  fields: [
    title,
    titleSlug,
    seo,
    defineField({
      name: "showSalaryCalculator",
      title: "Show Salary Calculator",
      description: MultiLineDescription({
        lines: [
          "Should the salary calculator be visible on the page?",
          "🇳🇴 Only for Norway",
        ],
        style: { paddingBottom: "0.35rem" },
      }),
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      description: "Manage benefits for the salary and benefits page",
      type: "array",
      of: [{ type: benefitId }],
    }),
  ],
});

export default salaryAndBenefits;
