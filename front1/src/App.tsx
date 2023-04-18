import { Header } from "./components/Header/Header"
import NotePage from "./pages/NotePage";
import { NotesListPage } from "./pages/NotesListPage"

import {
  Route,
  BrowserRouter,
  Routes


} from "react-router-dom"

function App() {
  return (
    <div className="flex justify-center">
      <BrowserRouter>
        <Routes>

          <Route path="/" Component={NotesListPage} />
          <Route path="/note/:id" Component={NotePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;