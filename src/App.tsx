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

      {/* Screen-only element flipped visible in @media print — see app.css. */}
      <p className="print-notice">
        {cv.profile.name} — {cv.profile.title}
        <br />
        For a full PDF version of this CV, see perko.la/William-Perkola-CV.pdf
      </p>
    </div>
  );
}
