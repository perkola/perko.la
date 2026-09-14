import { cv } from "./content/cv";
import { Header } from "./components/Header";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <main className="card">
        <Header profile={cv.profile} />
        <ExperienceSection experience={cv.experience} />
        <EducationSection education={cv.education} />
      </main>
      <Footer name={cv.profile.name} />

      {/* Screen-only, flipped visible in @media print — see app.css. */}
      <div className="print-notice">
        <p className="print-notice__name">{cv.profile.name}</p>
        <p className="print-notice__title">{cv.profile.title}</p>
        <p className="print-notice__cta">
          Download the full PDF CV
          <br />
          <span className="print-notice__link">perko.la/William-Perkola-CV.pdf</span>
        </p>
      </div>
    </div>
  );
}
