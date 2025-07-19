import {
  CallToActionContainer,
  LinkNextToCTA,
  StyledButton,
} from '@/app/_components/ui/layout/header/styled';

export const CallToAction = () => {
  return (
    <CallToActionContainer>
      <LinkNextToCTA href="https://server-production-0382.up.railway.app">
        Sign in
      </LinkNextToCTA>
      <a href="https://server-production-0382.up.railway.app">
        <StyledButton>Get Started</StyledButton>
      </a>
    </CallToActionContainer>
  );
};
