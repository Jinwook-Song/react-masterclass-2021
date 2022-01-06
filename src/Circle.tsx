import styled from 'styled-components';

interface ICircleProps {
  bgColor: string;
}

const Container = styled.div<ICircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

function Circle(props: ICircleProps) {
  return <Container {...props} />;
}

export default Circle;
