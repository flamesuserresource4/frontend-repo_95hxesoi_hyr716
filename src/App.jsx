import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Studio from './components/Studio'
import CTA from './components/CTA'
import ProjectDetail from './components/ProjectDetail'

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Studio />
      <CTA />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Route>
    </Routes>
  )
}

export default App
