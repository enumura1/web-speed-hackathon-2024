import styled from 'styled-components';

const _Wrapper = styled.div`
  width: 100%;
`;

const _Separator = styled.img`
  display: block;
  width: 100%;
  border-top: 1px solid #A1A1A4;
`;

export const Separator: React.FC = () => {
  return (
    <_Wrapper >
      <_Separator aria-hidden={true} height={1} width="100%" /> 
    </_Wrapper>
  );
};
