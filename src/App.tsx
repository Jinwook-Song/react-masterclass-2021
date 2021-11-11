import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "./atoms";
import Board from "./Components/Board";

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
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [todos, setTodos] = useRecoilState(todoState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const {destination, draggableId, source} = info;
    if(destination?.droppableId === source.droppableId) {
      // same board movement.
      setTodos((prevTodos) => {
        const boardCopy = [...prevTodos[source.droppableId]]
        // Delete item on source
        boardCopy.splice(source.index, 1);
        // Put back the item
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...prevTodos,
          [source.droppableId]: boardCopy
        };
      }); 
    }
    
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(todos).map((boardId) => (
            <Board key={boardId} boardId={boardId} todos={todos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
