import styled from 'styled-components';

const _Wrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: fill;
`;

const _Image = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  display: inline-block;
`;

export const HeroImage: React.FC = () => {
  return (
    <_Wrapper>
      <_Image alt="Cyber TOON" src="/assets/ImgSrc.webp"/>
    </_Wrapper>
  );
};
