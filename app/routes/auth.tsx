import { useEffect } from "react";
import { useNavigate } from "react-router";

export const meta = () => ([
  { title: "Resumind | Auth" },
  { name: "description", content: "Authentication Redirect" },
]);

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-2xl font-bold">Redirecting...</h1>
    </main>
  );
};

export default Auth;