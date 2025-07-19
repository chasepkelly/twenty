import {
  CallToActionContainer,
  LinkNextToCTA,
  StyledButton,
} from '@/app/_components/ui/layout/header/styled';

export const CallToAction = () => {
  return (
    <CallToActionContainer>
      <LinkNextToCTA href="https://20crm-git-main-chases-projects-4b700c94.vercel.app">Sign in</LinkNextToCTA>
      <a href="https://20crm-git-main-chases-projects-4b700c94.vercel.app">
        <StyledButton>Get Started</StyledButton>
      </a>
    </CallToActionContainer>
  );
};
