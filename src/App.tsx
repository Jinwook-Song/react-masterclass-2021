import {
  Draggable,
  DragDropContext,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "./atoms";

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

function App() {
  const [todos, setTodos] = useRecoilState(todoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      // Delete item on source
      newTodos.splice(source.index, 1);
      // Put back the item
      newTodos.splice(destination?.index, 0, draggableId);
      return newTodos;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {todos.map((todo, idx) => (
                  <Draggable key={todo} draggableId={todo} index={idx}>
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
