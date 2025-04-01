import { useEffect } from 'react';

import { PrimaryButton } from '../components/button/Button';
import {
  ButtonsContainer,
  ComfirmListContainer,
  Container,
  DirectionContainer,
} from '../components/container/Container.style';
import Title from '../components/title/Title';
import Toggle from '../components/toggle/Toggle';
import { ConfirmListUnit } from '../components/unit/Units.style';

import { useTheme } from '../contexts/ThemeProvider';

import { ConfirmPageProps } from '../types/pages.type';

const ConfirmPage: React.FC<ConfirmPageProps> = ({ participants }) => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    const currentTheme = document.body.classList.contains('dark-mode') ? true : false;
    setIsDarkMode(currentTheme);
  }, [setIsDarkMode]);

  return (
    <Container>
      <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Title />
      <DirectionContainer>참여자를 확인해 주세요</DirectionContainer>
      <ComfirmListContainer>
        {participants.map((participants, index) => (
          <ConfirmListUnit key={index}>{participants}</ConfirmListUnit>
        ))}
      </ComfirmListContainer>
      <ButtonsContainer gap='9rem'>
        <PrimaryButton to='/loading'>확인</PrimaryButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ConfirmPage;
