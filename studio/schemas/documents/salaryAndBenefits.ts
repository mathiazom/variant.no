import { defineField, defineType } from "sanity";
import { titleSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import { title } from "../fields/text";
import { SalariesInput } from "../../components/SalaryCsvInput/SalariesInput";
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
      name: "yearlySalaries",
      title: "Yearly Salaries",
      description: "Salary tiers for each year",
      type: "array",
      options: {
        sortable: false,
      },
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "year",
              title: "Year",
              type: "number",
              validation: (Rule) => Rule.required().min(2018),
            }),
            defineField({
              name: "salaries",
              title: "Salaries",
              type: "string",
              components: {
                input: SalariesInput,
              },
            }),
          ],
          preview: {
            select: {
              title: "year",
              salaries: "salaries",
            },
          },
        },
      ],
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
