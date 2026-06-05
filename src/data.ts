import productImage from "./assets/product/product1.jpg";
import productThumbOne from "./assets/images/home/section1.jpg";
import productThumbTwo from "./assets/images/home/section2.jpg";
import productThumbThree from "./assets/images/home/section3.jpg";

export type ProductKeyElement = {
  icon: string;
  label: string;
  value: string;
};

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductImage = {
  src: string;
  imagePath: string;
  alt: string;
};

export type SolarProduct = {
  code: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  datasheetLabel: string;
  showcaseImage: ProductImage;
  detailHeroImage: ProductImage;
  thumbnails: ProductImage[];
  keyElements: ProductKeyElement[];
  specifications: Array<[string, string]>;
  applications: string[];
  summarySpecs: Array<[string, string]>;
  technicalSpecs: Array<[string, string]>;
  features: ProductFeature[];
  installationGuide: string;
  warrantyInfo: string;
};

const sharedApplications = [
  "Nautical",
  "Caravanning",
  "Agrivoltaics",
  "Off-grid",
  "Telecom towers",
  "Rural infrastructure",
];

const createProduct = (
  code: string,
  wattage: string,
  weight: string,
  footprint: string,
  efficiency: string,
  images: {
    showcaseImage: ProductImage;
    detailHeroImage: ProductImage;
    thumbnails: ProductImage[];
  },
): SolarProduct => ({
  code,
  name: `Mebar ${code}`,
  category: "Flexible solar panel",
  shortDescription: `Up to ${wattage} and available in stripe format`,
  description:
    "This model is versatile, slim, compact and capable of preventing the risks of adverse weather conditions and wear and tear by being waterproof and rustproof.",
  datasheetLabel: "Technical data sheet IT/EN",
  showcaseImage: images.showcaseImage,
  detailHeroImage: images.detailHeroImage,
  thumbnails: images.thumbnails,
  keyElements: [
    { icon: "W", label: "Peak power Pmax (Wp)", value: wattage },
    { icon: "1.7", label: "Ultra thin", value: "1.7mm" },
    { icon: "kg", label: "Super light", value: weight },
    { icon: "m2", label: "Minimum footprint", value: footprint },
  ],
  specifications: [
    ["Tolerance (%)", "up to 5% only positive"],
    ["Open circuit voltage, Voc (V)", code === "HF45" ? "20.2" : "23.6"],
    ["Short circuit current, Isc (A)", code === "HF45" ? "2.9" : "5.4"],
    ["Voltage at Pmax, Vmp (V)", code === "HF45" ? "17" : "19.8"],
    ["Current at Pmax, Imp (A)", code === "HF45" ? "2.7" : "4.9"],
    ["Temp. coefficient of Isc, a (%/C)", "0.05"],
    ["Temperature coefficient of Voc, b (%/C)", "-0.31"],
    ["Temperature coefficient Pmax (%/C)", "-0.41"],
    ["Fill Factor (FF) (%)", "78.4"],
    ["Operating temperature (C)", "from -40 to +80"],
    ["NOCT (C)", "47.5"],
    ["Module material", "UVA-resistant Plastic Polymer"],
    ["Dimensions (wxh) (m)", code === "HF45" ? "0.536 x 0.604" : "0.610 x 1.120"],
    ["Thickness (mm)", "1.7"],
    ["Weight (kg)", weight.replace("kg", "")],
    ["Maximum system voltage (V)", "600"],
    ["Photovoltaic cells", "mono Si cut cells"],
    ["Output terminals", "1m Cables with MC4 connectors"],
    ["Bypass diode (A)", "1 inside JB, 12A"],
  ],
  applications: sharedApplications,
  summarySpecs: [
    ["Wattage", wattage],
    ["Efficiency", efficiency],
    ["Warranty", "25 years"],
    ["Best Use", "Residential & Commercial"],
  ],
  technicalSpecs: [
    ["Model", `Mebar ${code}`],
    ["Max Power", wattage],
    ["Efficiency", efficiency],
    ["Dimensions", code === "HF45" ? "536 x 604 x 1.7 mm" : "610 x 1120 x 1.7 mm"],
    ["Weight", weight],
    ["Cell Type", "Monocrystalline PERC"],
    ["Frame", "Frameless flexible polymer"],
    ["Operating Temp", "-40C to +85C"],
    ["Warranty", "25-year performance"],
  ],
  features: [
    {
      title: "High Efficiency",
      description: `${efficiency} conversion for dependable output.`,
    },
    {
      title: "Durable Build",
      description: "Waterproof and rustproof for exposed installations.",
    },
    {
      title: "Low Degradation",
      description: "Strong performance for 25+ years.",
    },
    {
      title: "Easy Install",
      description: "Lightweight format for fast mounting.",
    },
  ],
  installationGuide:
    "Our certified team handles mounting, wiring, inverter setup, and full system testing. A typical residential install takes 2-4 days.",
  warrantyInfo:
    "Backed by a 25-year performance warranty and workmanship coverage on installation, for complete peace of mind.",
});

const defaultProductImages = {
  showcaseImage: {
    src: productImage,
    imagePath: "src/assets/product/product1.jpg",
    alt: "Aerial view of solar panel rows installed over green ground",
  },
  detailHeroImage: {
    src: productThumbThree,
    imagePath: "src/assets/images/home/section3.jpg",
    alt: "Large solar panels across a bright green field",
  },
  thumbnails: [
    {
      src: productImage,
      imagePath: "src/assets/product/product1.jpg",
      alt: "Close aerial view of solar panel rows over green ground",
    },
    {
      src: productThumbOne,
      imagePath: "src/assets/images/home/section1.jpg",
      alt: "Solar panel rows reflecting bright daylight",
    },
    {
      src: productThumbTwo,
      imagePath: "src/assets/images/home/section2.jpg",
      alt: "Solar panels installed beside green grass",
    },
  ],
};

export const products: SolarProduct[] = [
  createProduct("HF45", "45W", "0.8kg", "0.32m2", "20.1%", defaultProductImages),
  createProduct("HF82", "82W", "1.2kg", "0.58m2", "20.8%", defaultProductImages),
  createProduct("HF100", "100W", "1.5kg", "0.72m2", "21.1%", defaultProductImages),
  createProduct("HF145", "145W", "2.1kg", "1.04m2", "21.5%", defaultProductImages),
  createProduct("HF165", "165W", "2.4kg", "1.18m2", "21.8%", defaultProductImages),
];

export const defaultProduct = products[0];
