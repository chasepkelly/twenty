import {
  CallToActionContainer,
  LinkNextToCTA,
  StyledButton,
} from '@/app/_components/ui/layout/header/styled';

export const CallToAction = () => {
  return (
    <CallToActionContainer>
      <LinkNextToCTA href="https://twentypostgres-production-0306.up.railway.app">
        Sign in
      </LinkNextToCTA>
      <a href="https://twentypostgres-production-0306.up.railway.app">
        <StyledButton>Get Started</StyledButton>
      </a>
    </CallToActionContainer>
  );
};
