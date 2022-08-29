import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import SafePalWallet from "./icons/SafePalWallet";
import BitKeep from "./icons/BitKeep";
import OntoWallet from "./icons/OntoWallet";
import OnekeyWallet from "./icons/Onekey";
import BitpieWallet from "./icons/Bitpie";
import Coin98Wallet from "./icons/Coin98";
import CoinbaseWallet from "./icons/CoinbaseWallet";

import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "Coinbase Wallet",
    icon: CoinbaseWallet,
    connectorId: ConnectorNames.CoinbaseWallet,
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "SafePal Wallet",
    icon: SafePalWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "ONTO Wallet",
    icon: OntoWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "BitKeep",
    icon: BitKeep,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "OneKey",
    icon: OnekeyWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Bitpie",
    icon: BitpieWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Coin98",
    icon: Coin98Wallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Binance Chain Wallet",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
  }
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
