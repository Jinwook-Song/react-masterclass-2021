import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? props.theme.accentColor2 : props.theme.accentColor};
  padding: 0.3rem;
  margin: 0.2rem 0;
  border-radius: 0.2rem;
  box-shadow: ${(props) =>
    props.isDragging ? "0.5rem 0.5rem 1rem rgba(0,0,0,0.5)" : "none"};
`;

interface IDragabbleCardProps {
  todo: string;
  idx: number;
}

function DragabbleCard({ todo, idx }: IDragabbleCardProps) {
  return (
    <Draggable draggableId={todo} index={idx}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
