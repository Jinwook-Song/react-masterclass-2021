import styled from 'styled-components';

interface ICircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

interface IContainerProps
  extends Pick<ICircleProps, 'bgColor' | 'borderColor'> {}

const Container = styled.div<IContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor ?? 'red'};
`;

function Circle(props: ICircleProps) {
  return <Container {...props}>{props.text ?? 'defualt text'}</Container>;
}

export default Circle;
