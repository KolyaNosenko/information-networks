import { Root, Text, Icon } from './styled.tsx';

export type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Root to="/" className={className}>
      <Icon />
      <Text>CS Papers</Text>
    </Root>
  );
};

export default Logo;
