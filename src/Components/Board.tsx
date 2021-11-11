import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgAccentColor2};
  padding: 0.5rem;
  border-radius: 0.2rem;
  min-height: 10vh;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
`;

interface IBoardProps {
  todos: string[];
  boardId: string;
}

function Board({ todos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <hr />
      <Droppable droppableId={boardId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, idx) => (
              <DragabbleCard key={todo} todo={todo} idx={idx} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
