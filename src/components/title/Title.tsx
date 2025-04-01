import { useNavigate } from 'react-router';

import { TitleStyle } from './Title.style';

const Title = () => {
  const navigate = useNavigate();

  return <TitleStyle onClick={() => navigate('/')}>🔀 랜덤 피커</TitleStyle>;
};

export default Title;
