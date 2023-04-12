export const candyMachineAddress = "0x72a1e8c163037bf66abe4e4820250f70fc9ede25fc46bbc457843cafec65e077";
export const collectionName = "Aptos Doodles"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs/QmeaecoSw88o2xyUAP4oZwAY66CWdifkfA1Dkd2YdAYjMG";
export const mode = "dev"; // "dev" or "test" or "mainnet"

export let NODE_URL;
export const CONTRACT_ADDRESS = "0x481efbf0c3cbec627b5f5674287d4ae6ee770da5949dcfe698a8520108236a33";
export const COLLECTION_SIZE = 10
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
