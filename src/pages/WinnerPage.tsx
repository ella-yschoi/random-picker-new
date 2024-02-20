import { useEffect } from 'react';
import { WinnerPageProps } from '../types/pages.type';

import { useTheme } from '../contexts/ThemeProvider';
import Toggle from '../components/Toggle/Toggle';
import Title from '../components/Title/Title';
import { PrimaryButton } from '../components/Button/Button';
import WinningImage from '../../public/celebrate.gif';

import { Container, WinnerContainer, ImageContainer, ButtonsContainer } from '../components/Container/Container.style';

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
      <Toggle
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Title/>
      <ImageContainer>
        <img src={WinningImage} alt='celebrate.gif' height='200' width='300' />
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
