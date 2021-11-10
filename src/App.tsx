import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "./atoms";
import DragabbleCard from "./Components/DragabbleCard";

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
  padding: 0.5rem;
  border-radius: 0.2rem;
  min-height: 10vh;
  display: grid;
  gap: 0.2rem;
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
                  <DragabbleCard key={todo} todo={todo} idx={idx} />
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
