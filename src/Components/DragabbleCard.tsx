import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.accentColor};
  padding: 0.3rem;
  margin: 0.2rem 0;
  border-radius: 0.2rem;
`;

interface IDragabbleCardProps {
  todo: string;
  idx: number;
}

function DragabbleCard({ todo, idx }: IDragabbleCardProps) {
  return (
    <Draggable draggableId={todo} index={idx}>
      {(provided) => (
        <Card
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
