import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const StyleButtonBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }
`;

const StyledText = styled.div`
  color: ${({ theme }) => theme.isDark ? '#8D9FB5' : '#e89d39'};
`

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    <StyleButtonBox>
      {config.map((entry, index) => (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 1 ? "8px" : "0"}
        />
      ))}
    </StyleButtonBox>
    <HelpLink href="https://docs.babyswap.finance/get-started/connect-your-wallet" external>
      <HelpIcon color="primary" mr="6px" />
      <StyledText>Learn how to connect</StyledText>
    </HelpLink>
  </Modal>
);

export default ConnectModal;
