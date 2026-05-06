export default function InterviewQuestions() {
  const questions = [
    "Explain React Hooks",
    "What is JWT authentication?",
    "Difference between SQL and MongoDB?",
    "Explain REST APIs",
  ];

  return (
    <div
      style={{
        marginTop: "40px",
        padding: "20px",
        background: "#ffffff",
        borderRadius: "12px",
        width: "80%",
      }}
    >
      <h2>AI Interview Questions</h2>

      {questions.map((q, index) => (
        <p key={index}>• {q}</p>
      ))}
    </div>
  );
}