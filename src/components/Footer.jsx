import { profile } from '../data'
import { Brand } from './Navbar'

export default function Footer() {
  return (
    <footer className="footer">
      <Brand />
      <span>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </span>
      <a href="#home" className="back-top">
        Back to top ↑
      </a>
    </footer>
  )
}
