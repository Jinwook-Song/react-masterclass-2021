import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat() (3, 1fr);
`;

const Board = styled.div`
  background-color: ${(props) => props.theme.bgAccentColor2};
  padding: 1rem 0.5rem;
  border-radius: 0.2rem;
  min-height: 10vh;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.accentColor};
  padding: 0.3rem;
  border-radius: 0.2rem;
  margin-bottom: 0.2rem;
`;

const todos = "a,b,c,d,e,f,g,h,i";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {todos.split(",").map((todo, idx) => (
                  <Draggable key={idx} draggableId={todo} index={idx}>
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
                ))}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
