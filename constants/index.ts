import OG_MERKLE from "../merkle/og.json";
import EARLY_MERKLE from "../merkle/early.json";
import VIP_MERKLE from "../merkle/vip.json";
import WAITLIST_MERKLE from "../merkle/waitlist.json";
import WHITELIST_MERKLE from "../merkle/whitelist.json";

export const ADDRESSES = {
  1: {
    citizenshipNft: "0x8BaBDaf7F6eeaB0cF12750F5f4cf894Bc9DADD7c",
    citizenshipMinter: "0x51B811270Ae5FA1a378f08a37FA6ce08400c42E4",
    vipNft: "0x0D755ee09864ac3370C77155c71A5525D5001629",
    vipMinter: "0x9BF4B647150Ccb540ac4F1E528498591a168deD8",
  },
  4: {
    citizenshipNft: "0x9C1015FB9746b19C84F68C630cE7Ce6F3F1D77Df",
    citizenshipMinter: "0x569aE4D28C59fCf4Baadff7cAE78E3942788FaD6",
    vipNft: "0x1f7c3Fc1d7B8C18c43d9ffd279e5AE1230494b4c",
    vipMinter: "0x6F6d03AabCaBA207Bd5973f9115Cd8B5A1490213",
  },
};

export const MERKLE = {
  0: OG_MERKLE,
  1: EARLY_MERKLE,
  2: WHITELIST_MERKLE,
  3: WAITLIST_MERKLE,
  4: VIP_MERKLE,
};
