import { useEffect } from 'react';

import { handleToggle } from '../../hooks/handlers';
import { Input, Slider, ToggleSwitch, ToggleWrapper } from './Toggle.style';
import { ToggleProps } from './Toggle.type';

const Toggle: React.FC<ToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    // 컴포넌트가 마운트될 때 localStorage에서 다크모드 설정 확인
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, [setIsDarkMode]);

  return (
    <ToggleWrapper>
      <ToggleSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
        <Input
          type='checkbox'
          checked={isDarkMode}
          onChange={(e) => handleToggle(e.target.checked, setIsDarkMode)}
        />
        <Slider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </ToggleSwitch>
    </ToggleWrapper>
  );
};

export default Toggle;
