import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";
import "@mantine/core/styles.css";
import Layout from "./components/Layout";

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<JobList />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
