
import { NoteContextProvider } from "./Context.jsx";
import Form from "./Form.jsx";
import Display from "./Display.jsx";
function App() {
  return (
    <NoteContextProvider>
      <Form/>
      <Display/>
    </NoteContextProvider>
  );
}

export default App;
