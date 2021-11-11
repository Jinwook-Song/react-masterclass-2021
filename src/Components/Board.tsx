import { useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgAccentColor2};
  padding: 0.5rem;
  border-radius: 0.2rem;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  white-space: nowrap;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

const Area = styled.div<IAreaProps>`
  border-radius: 0.2rem;
  padding: 0 0.2rem;
  background-color: ${(props) =>
    props.isDraggingOver
      ? props.theme.accentColor2
      : props.draggingFromThisWith
      ? props.theme.bgAccentColor
      : props.theme.bgAccentColor2};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
`;

interface IBoardProps {
  todos: string[];
  boardId: string;
}

function Board({ todos, boardId }: IBoardProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    inputRef.current?.focus();
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <br />
      <input ref={inputRef} placeholder="grab me" />
      <button onClick={onClick}>Click</button>
      <br />
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todos.map((todo, idx) => (
              <DragabbleCard key={todo} todo={todo} idx={idx} />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
