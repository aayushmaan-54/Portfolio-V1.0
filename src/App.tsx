import { useEffect, useState } from "react";
import { Navbar, Hero, Skills, Works, Education, Contact, Footer } from "./Exports";

const App = () => {

  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const storedPreference = localStorage.getItem('website-theme');
    if (storedPreference) {
      setIsDark(storedPreference === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(systemPrefersDark);
      localStorage.setItem('website-theme', systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  
  useEffect(() => {
    if (isDark !== null) {
      localStorage.setItem('website-theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);


  return (
    <main className={isDark ? 'dark' : ''}>
      <div className="min-h-[100vh] w-screen dark:bg-main bg-lhtMain dark:text-primary text-main font-chi body bg-blend-difference pb-10 mainContainer">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <Skills />
        <Works />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App