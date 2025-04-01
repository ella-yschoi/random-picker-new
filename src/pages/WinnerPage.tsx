import { useEffect } from 'react';

import { PrimaryButton } from '../components/button/Button';
import {
  ButtonsContainer,
  Container,
  ImageContainer,
  WinnerContainer,
} from '../components/container/Container.style';
import Title from '../components/title/Title';
import Toggle from '../components/toggle/Toggle';

import { useTheme } from '../contexts/ThemeProvider';

import WinningImage from '../assets/celebrate.gif';

import { WinnerPageProps } from '../types/pages.type';

const WinnerPage: React.FC<WinnerPageProps> = ({ participants }) => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    const currentTheme = document.body.classList.contains('dark-mode') ? true : false;
    setIsDarkMode(currentTheme);
  }, [setIsDarkMode]);

  const winnerIndex = Math.floor(Math.random() * participants.length);
  const winner = participants[winnerIndex];

  return (
    <Container>
      <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Title />
      <ImageContainer>
        <img src={WinningImage} alt='Winning Image' height='200' width='300' />
      </ImageContainer>
      <WinnerContainer>{winner}</WinnerContainer>
      <ButtonsContainer gap='5rem'>
        <PrimaryButton to='/'>홈으로</PrimaryButton>
        <PrimaryButton to='/confirm'>다시하기</PrimaryButton>
      </ButtonsContainer>
    </Container>
  );
};

export default WinnerPage;
