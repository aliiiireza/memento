import Image from "next/image";
import { Wrapper, Title, Description } from "./AppLogo.styled";

interface AppLogoProps {
  type?: "vertical" | "horizontal";
}

export const AppLogo = ({ type = "horizontal" }: AppLogoProps) => {
  return (
    <Wrapper type={type}>
      <Image src="/logo.svg" alt="Logo" width={103} height={69} />
      <Title>MEMENTO</Title>
      <Description>PUBLISH WHAT YOU WANT</Description>
    </Wrapper>
  );
};
