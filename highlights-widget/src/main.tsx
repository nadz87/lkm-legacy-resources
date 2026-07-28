import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProjectHighlightsMarquee from "./components/ProjectHighlightsMarquee";

const mount = document.getElementById("highlights-root");
if (mount) {
  createRoot(mount).render(
    <StrictMode>
      <ProjectHighlightsMarquee />
    </StrictMode>,
  );
}
