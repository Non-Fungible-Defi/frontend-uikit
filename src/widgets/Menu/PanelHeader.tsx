import React from "react";
import styled from "styled-components";
import { MENU_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";
import { MountainBigIcon } from "./icons";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props extends PanelProps, PushedProps {
  togglePush: () => void;
}

const Container = styled.div`
  height: ${MENU_HEIGHT}px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;,
  font-size: 50px;
  border-bottom: solid 6px #82b2c5;
`;

const PanelHeader: React.FC<Props> = ({ isPushed, togglePush }) => {
  if (!isPushed) {
    return <Container></Container>;
  }
console.log(togglePush);
  return (
    <Container>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mt="12px">
        {isPushed ? (
          <HamburgerCloseIcon width="50px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="50px" color="textSubtle" />
        )}
      </MenuButton>
    </Container>
  );
};

export default PanelHeader;
