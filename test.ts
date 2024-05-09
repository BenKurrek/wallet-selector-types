import { UnencryptedFileSystemKeyStore } from "@near-js/keystores-node";
import { Account } from "@near-js/accounts";
import { Near } from "@near-js/wallet-account";
import * as path from "path";
import { homedir } from "os";

const NETWORK_ID = "testnet";
const accountId = "benjiman.testnet";

function initNear() {
  const CREDENTIALS_DIR = ".near-credentials";
  const credentialsPath = path.join(homedir(), CREDENTIALS_DIR);

  let keyStore = new UnencryptedFileSystemKeyStore(credentialsPath);

  let nearConfig = {
    networkId: NETWORK_ID,
    keyStore: keyStore,
    nodeUrl: `https://rpc.${NETWORK_ID}.near.org`,
    walletUrl: `https://wallet.${NETWORK_ID}.near.org`,
    helperUrl: `https://helper.${NETWORK_ID}.near.org`,
    explorerUrl: `https://explorer.${NETWORK_ID}.near.org`,
  };

  let near = new Near(nearConfig);
  const accountObj = new Account(near.connection, accountId);
}

initNear();
