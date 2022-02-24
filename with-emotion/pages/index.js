import styled from '@emotion/styled'

const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;

  &:hover {
    color: ${props => props.hoverColor};
  }
`

export default function Home() {

  return <Paragraph hoverColor="red">I am a component made with Emotion (Styled Components)</Paragraph>

}
