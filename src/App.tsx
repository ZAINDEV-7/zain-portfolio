import { useEffect, useState } from 'react'
import { Footer, About, Certifications, Contact, Experience, Hero, Navbar, Projects, ProjectModal, Services, Skills, useReveals } from './components'
import type { Project } from './data'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [activeProject, setActiveProject] = useState<{ project: Project; trigger: HTMLElement } | null>(null)
  useReveals()
  useEffect(() => { const sections = document.querySelectorAll('main section[id]'); const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: '-35% 0px -55% 0px' }); sections.forEach(section => observer.observe(section)); return () => observer.disconnect() }, [])
  useEffect(() => { const locked = Boolean(activeProject || menuOpen); document.body.style.overflow = locked ? 'hidden' : ''; document.querySelectorAll('main, footer').forEach(element => element.toggleAttribute('inert', locked)); return () => { document.body.style.overflow = ''; document.querySelectorAll('main, footer').forEach(element => element.removeAttribute('inert')) } }, [activeProject, menuOpen])
  return <><div className="progress" aria-hidden="true" /><Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} /><main><Hero /><About /><Skills /><Projects onOpen={(project, trigger) => setActiveProject({ project, trigger })} /><Experience /><Certifications /><Services /><Contact /></main><Footer />{activeProject && <ProjectModal project={activeProject.project} trigger={activeProject.trigger} onClose={() => setActiveProject(null)} />}</>
}