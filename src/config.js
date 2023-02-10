const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "";
const description = "The metaverse a place where judgment is forgotten. We eradicate monotony and create a world where all kind of different ideas are what propels our reality. A place for creators, innovators and disruptors. Introducing MPC a community focused NFT project, which aims to build an exciting and eccentric metaverse world. Let’s build a world, a better world :).";
const baseUri = "ipfs://QmZZXjJQJkEaQ7qC1zxGWqXntfrRa9MUJ3vJ1xZYsBjcHZ";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

//without back items
const layerConfigurations = [
  {
    growEditionSizeTo: 700,
    layersOrder: [
      { name: "background", options: {
          bypassDNA: true
        }
      },
      {name:"shadow"},
      {name: "base"},
      {name: "body"},
      {name: "hat"},
      {name: "weapon"},     

    ],
  },
  //with Back items
    {
    growEditionSizeTo: 1111,
    layersOrder: [
      { name: "background", options: {
          bypassDNA: true
        }
      },
      {name:"shadow"},
      {name:"back"},
      {name: "base"},
      {name: "body"},
      {name: "hat"},
      {name: "weapon"},     

    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 560,
  height: 720,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  artist:"Tomas Dukoski",
  techGuru:"kanef",
  projectLeader:"Vladimir Dukoski",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};

