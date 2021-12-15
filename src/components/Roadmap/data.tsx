interface dataTypes {
  data: {
    percent: string;
    text: string;
    key?: any;
  }[];
}
const something = {};
const Data: dataTypes["data"] = [
  { percent: "10%", text: "We pay back our dads (don’t forget your dad)!" },
  { percent: "20%", text: "Collaborations with artists and other projects." },
  {
    percent: "30%",
    text: "$25.000,00 donation to Share The Meal to help fight Global Hunger.",
  },
  {
    percent: "40%",
    text: "5 ETH added to the Community Wallet  which will be used for giveaways to loyal hodlers.",
  },
  {
    percent: "50%",
    text: "Exclusive Superlative Apes Merch Store gets unlocked, featuring Limited Edition tees, hoodies, and other exclusives.",
  },
  {
    percent: "60%",
    text: "Start Global Tour & 15 ETH added to the Community Wallet.",
  },
  { percent: "70%", text: "Superlative Apes liquidity pool is initiated." },
  {
    percent: "80%",
    text: "Superlative Mutant Apes NFT Breeding Capsule gets fixed. Hodlers will receive a present.",
  },
  {
    percent: "90%",
    text: `Superlative Apes party in the MetaVerse! Several famous DJ’s will play their music LIVE on air.`,
    key: <strong>Let’s get WILD!</strong>,
  },
  {
    percent: "100%",
    text: "25% of all fee profits made on OpenSea will be added to the Community Wallet.  Every week, with no end date.",
  },
];
export default Data;
