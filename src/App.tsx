import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home        from './pages/Home'
import About       from './pages/About'
import Expertise   from './pages/Expertise'
import Team        from './pages/Team'
import CaseStudies from './pages/CaseStudies'
import BookCall    from './pages/BookCall'
import GetProposal from './pages/GetProposal'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/expertise"    element={<Expertise />} />
        <Route path="/team"         element={<Team />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/book-call"    element={<BookCall />} />
        <Route path="/get-proposal" element={<GetProposal />} />
      </Routes>
    </BrowserRouter>
  )
}
