import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PageProvider from "./providers/page.tsx";
import UserProvider from "./providers/user.tsx";
import QuizProvider from "./providers/quiz.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <PageProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </PageProvider>
    </UserProvider>
  </StrictMode>,
);
