import ThemeToggle from "./components/ThemeToggle";
import InterviewQuestions from "./components/InterviewQuestions";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "40px",
      }}
    >
      <h1>ResumeIQ AI</h1>

      <ThemeToggle />

      <InterviewQuestions />
    </div>
  );
}

export default App;