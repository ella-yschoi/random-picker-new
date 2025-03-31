import { handleInputChange } from '../src/hooks/handlers';

describe('handleInputChange', () => {
  it('입력 이벤트 발생 시 setNameInput이 호출되어야 함', () => {
    const mockSetNameInput = jest.fn();
    const mockEvent = {
      target: { value: '테스트' },
    } as React.ChangeEvent<HTMLInputElement>;

    handleInputChange(mockEvent, mockSetNameInput);

    expect(mockSetNameInput).toHaveBeenCalledWith('테스트');
  });
});
