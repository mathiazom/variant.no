import { LogoSaladSection } from "studio/lib/payloads/pages";
import sparebanknord from "../../../stories/assets/logoSalad/sparebank1-nord-norge.png";
import sevenoffice from "../../../stories/assets/logoSalad/24sevenoffice.png";
import credoPartners from "../../../stories/assets/logoSalad/credo-partners.png";
import skift from "../../../stories/assets/logoSalad/skift.png";
import virke from "../../../stories/assets/logoSalad/virke.png";

const logos = [
  {
    _key: "5b1236abdc4c",
    _type: "image",
    alt: "Sparebank1 Nord Norge logo",
    src: sparebanknord,
  },
  {
    _key: "2052ec0aea39",
    _type: "image",
    alt: "24SevenOffice logo",
    src: sevenoffice,
  },
  {
    _key: "2052ec0aea39",
    _type: "image",
    alt: "Credo Partners logo",
    src: credoPartners,
  },
  {
    _key: "2052ec0aea39",
    _type: "image",
    alt: "Skift logo",
    src: skift,
  },
  {
    _key: "2052ec0aea39",
    _type: "image",
    alt: "Virke logo",
    src: virke,
  },
];

export const mockLogoSaladSection: LogoSaladSection = {
  _key: "1a33ab36f595",
  _type: "logoSalad",
  logos: logos,
  supporting:
    "More than 7000 companies are already using EnergiAI to stay compliant and save valuable time.",
};

export const extendedMockLogoSaladSection: LogoSaladSection = {
  _key: "1a33ab36f595",
  _type: "logoSalad",
  logos: logos,
  supporting:
    "More than 7000 companies are already using EnergiAI to stay compliant and save valuable time.",
  richText: [
    {
      _type: "block",
      _key: "272e06bbca76",
      children: [
        {
          _key: "dcf62ae1c1f10",
          _type: "span",
          marks: [],
          text: "We connect with a diverse group of organizations and individuals who share our commitment to making a ",
        },
        {
          _key: "ef465a0bfdf8",
          _type: "span",
          marks: ["strong"],
          text: "positive impact",
        },
        {
          _key: "c07a9714cacb",
          _type: "span",
          marks: [],
          text: " on the world.",
        },
      ],
      style: "normal",
    },
  ],
};
