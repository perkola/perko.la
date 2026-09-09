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
    </div>
  );
}
