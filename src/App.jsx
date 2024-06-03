import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import MyForm from "./components/form/MyForm"
import MyToggle from "./components/use-toggle/MyToggle"

const App = () => {
  return (
   <Router>
    <Routes>
      {/* <Route path='/' element={<MyForm />} /> */}
      <Route path='/' element={<MyToggle />} />
    </Routes>
   </Router>
  )
}

export default App
