import styled from 'styled-components';

export const getBorderColor = (props) => {
    // console.log('props', props.theme)
  switch (props.level) {
    case 'beginner':
      return props.theme.colors.green;
    case 'intermediate':
      return props.theme.colors.orange;
    case 'advanced':
      return props.theme.colors.red;
    default:
      return null;
  }
};

export const CardWrapper = styled.div`
  border: 2px solid ${getBorderColor};
  padding: 10px;
`;
export const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 15px;
`;
export const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  svg {
    color: purple;
  }
`;
