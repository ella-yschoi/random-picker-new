export const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setNameInput: (value: string) => void,
) => {
  setNameInput(event.target.value);
};

export const handleToggle = (isDarkMode: boolean, setIsDarkMode: (value: boolean) => void) => {
  const newIsDarkMode = !isDarkMode;
  setIsDarkMode(newIsDarkMode);
  document.body.classList.toggle('dark-mode', newIsDarkMode);
  localStorage.setItem('darkMode', JSON.stringify(newIsDarkMode));
};

export const handleAddParticipant = (
  event: React.FormEvent,
  nameInput: string,
  setParticipants: (fn: (prev: string[]) => string[]) => void,
  setNameInput: (value: string) => void,
  currentParticipants: string[],
  alertFn: (msg: string) => void,
) => {
  event.preventDefault();

  const trimmedName = nameInput.trim();

  if (!trimmedName) {
    alertFn('이름을 입력해 주세요.');
    return;
  }

  if (trimmedName.length > 6) {
    alertFn('참여자 이름은 6자 이하로 입력해 주세요.');
    return;
  }

  if (currentParticipants.length >= 10) {
    alertFn('참여자는 10명까지만 입력할 수 있어요.');
    return;
  }

  setParticipants((prev) => [...prev, trimmedName]);
  setNameInput('');
};

export const handleComplete = (
  participants: string[],
  navigateFn: (path: string) => void,
  alertFn: (msg: string) => void,
) => {
  if (participants.length < 1) {
    alertFn('1명 이상의 참여자 이름을 입력해 주세요.');
    return;
  }

  alertFn('참여자 리스트업이 완료되었습니다.');
  navigateFn('/');
};

export const handleReset = (setParticipants: (val: string[]) => void) => {
  setParticipants([]);
};
