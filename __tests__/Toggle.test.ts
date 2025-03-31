import { handleToggle } from '../src/hooks/handlers';

describe('handleToggle', () => {
  beforeEach(() => {
    document.body.className = ''; // 초기화
    localStorage.clear();
  });

  it('isDarkMode가 false일 때 토글하면 true로 변경되고 저장됨', () => {
    const mockSetIsDarkMode = jest.fn();

    handleToggle(false, mockSetIsDarkMode);

    expect(mockSetIsDarkMode).toHaveBeenCalledWith(true);
    expect(document.body.classList.contains('dark-mode')).toBe(true);
    expect(localStorage.getItem('darkMode')).toBe('true');
  });

  it('isDarkMode가 true일 때 토글하면 false로 변경되고 저장됨', () => {
    const mockSetIsDarkMode = jest.fn();

    document.body.classList.add('dark-mode');
    handleToggle(true, mockSetIsDarkMode);

    expect(mockSetIsDarkMode).toHaveBeenCalledWith(false);
    expect(document.body.classList.contains('dark-mode')).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('false');
  });
});
