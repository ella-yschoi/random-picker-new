import { handleAddParticipant, handleComplete, handleReset } from '../src/hooks/handlers';

describe('handleAddParticipant', () => {
  const mockEvent = { preventDefault: jest.fn() } as unknown as React.FormEvent;
  const mockSetParticipants = jest.fn();
  const mockSetNameInput = jest.fn();
  const mockAlert = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('빈 값 입력 시 alert 호출', () => {
    handleAddParticipant(mockEvent, '   ', mockSetParticipants, mockSetNameInput, [], mockAlert);
    expect(mockAlert).toHaveBeenCalledWith('이름을 입력해 주세요.');
  });

  it('6자 초과 입력 시 alert 호출', () => {
    handleAddParticipant(
      mockEvent,
      '길동1234',
      mockSetParticipants,
      mockSetNameInput,
      [],
      mockAlert,
    );
    expect(mockAlert).toHaveBeenCalledWith('참여자 이름은 6자 이하로 입력해 주세요.');
  });

  it('참여자 10명 초과 시 alert 호출', () => {
    handleAddParticipant(
      mockEvent,
      '홍길동',
      mockSetParticipants,
      mockSetNameInput,
      Array(10).fill('참여자'),
      mockAlert,
    );
    expect(mockAlert).toHaveBeenCalledWith('참여자는 10명까지만 입력할 수 있어요.');
  });

  it('정상 입력 시 참여자 추가되고 input 초기화', () => {
    handleAddParticipant(mockEvent, '홍길동', mockSetParticipants, mockSetNameInput, [], mockAlert);
    expect(mockSetParticipants).toHaveBeenCalled();
    expect(mockSetNameInput).toHaveBeenCalledWith('');
  });
});

describe('handleComplete', () => {
  const mockNavigate = jest.fn();
  const mockAlert = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('참여자가 없으면 alert 발생', () => {
    handleComplete([], mockNavigate, mockAlert);
    expect(mockAlert).toHaveBeenCalledWith('1명 이상의 참여자 이름을 입력해 주세요.');
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('참여자가 있으면 alert + navigate 호출', () => {
    handleComplete(['홍길동'], mockNavigate, mockAlert);
    expect(mockAlert).toHaveBeenCalledWith('참여자 리스트업이 완료되었습니다.');
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});

describe('handleReset', () => {
  it('참여자 배열을 빈 배열로 초기화', () => {
    const mockSetParticipants = jest.fn();
    handleReset(mockSetParticipants);
    expect(mockSetParticipants).toHaveBeenCalledWith([]);
  });
});
