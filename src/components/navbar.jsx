import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/banner-logo.png"
import DesktopDropdown from "./desktopDropdown"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)

  return (
    <>
        <nav className="bg-white border-b-2 border-b-pink-700 sticky top-0 w-full z-50 h-24 px-6 py-2">
            <div className="lg:flex hidden items-center justify-between text-xl mx-auto max-w-11/12">
                <NavLink to="/" className="flex items-start">
                    <img src={logo} alt="" className="h-20" />
                </NavLink>

                <div className="flex justify-center items-center space-x-8 font-semibold text-pink-700">
                    <NavLink to="/" end className={({ isActive }) => `hover:text-pink-700 duration-700 ${isActive ? "text-pink-950 border-b-2 border-pink-700" : ""}`}>
                          Home
                      </NavLink>
                      <DesktopDropdown label="About" base="about"
                          items={[
                              { label: "Directors", path: "directors" },
                              { label: "Sustainability", path: "sustainability" },
                          ]} />
                      <NavLink to="/events" end className={({ isActive }) => `hover:text-pink-700 duration-700 ${isActive ? "text-pink-950 border-b-2 border-pink-700" : ""}`}>Events</NavLink>
                      <NavLink to="/alumni" end className={({ isActive }) => `hover:text-pink-700 duration-700 ${isActive ? "text-pink-950 border-b-2 border-pink-700" : ""}`}>Alumni</NavLink>
                      <DesktopDropdown label="Courts" base="courts"
                          items={[
                              { label: "Student", path: "student" },
                              { label: "Graduate", path: "graduate" },
                              { label: "University", path: "university" },
                              { label: "Alumni", path: "alumni" },
                          ]} />
                      <DesktopDropdown
                          label="Participate"
                          base="participate"
                          items={[
                              {
                                  label: "Volunteers",
                                  path: "volunteers",
                                  children: ["Captains", "Committee-Members"],
                              },
                              { label: "Organizations", path: "organizations" },
                              { label: "Forms and Applications", path: "forms-and-applications" },
                              { label: "Resources", path: "resources" },
                          ]} />
                      <Link to="https://photos.homecoming.psu.edu" className="hover:text-pink-950">Photos</Link>
                </div>

                <div className="block">
                    <button className="bg-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-700 hover:bg-pink-800">
                          Subscribe
                      </button>
                </div>

            </div>

            <div className="md:grid lg:hidden hidden items-center grid-cols-3 text-xl mx-auto max-w-vh">
                <div className="flex justify-start">
                    <button className="lg:hidden text-3xl transform-content" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                        {mobileOpen ? "✕" : "☰"}
                    </button>
                </div>

                <NavLink to="/" className="flex justify-center">
                    <img src={logo} alt="logo" className="h-16 lg:h-20" />
                </NavLink>

                <div className="flex justify-end">
                    <button className="bg-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-700 hover:bg-pink-800">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="md:hidden grid items-center grid-cols-3 text-xl mx-auto max-w-vh">
                <div className="flex justify-start">
                    <button className="lg:hidden text-3xl transform-content" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                        {mobileOpen ? "✕" : "☰"}
                    </button>
                </div>

                <NavLink to="/" className="flex justify-center">
                    <img src={logo} alt="logo" className="h-16 lg:h-20" />
                </NavLink>
            </div>

            {mobileOpen && (
                <div className="fixed top-20 inset-x-0 bottom-0 bg-white z-40 overflow-y-auto">
                    <div className="flex flex-col px-6 py-6 space-y-6 text-xl font-semibold">
                        <NavLink to="/" onClick={() => setMobileOpen(false)} className={({ isActive }) => `block ${isActive ? "text-pink-700 font-semibold" : ""}`}>
                            Home
                        </NavLink>

                        <NavLink to="/events" onClick={() => setMobileOpen(false)} className={({ isActive }) => `block ${isActive ? "text-pink-700 font-semibold" : ""}`}>
                            Events
                        </NavLink>

                        <NavLink to="/alumni" onClick={() => setMobileOpen(false)} className={({ isActive }) => `block ${isActive ? "text-pink-700 font-semibold" : ""}`}>
                            Alumni
                        </NavLink>

                        <a href="https://photos.homecoming.psu.edu" className={({ isActive }) => `block ${isActive ? "text-pink-700 font-semibold" : ""}`}>
                            Photos
                        </a>

                        {[
                            { label: "About", items: ["Directors", "Sustainability"] },
                            { label: "Courts", items: ["Student", "Graduate", "University", "Alumni"] },
                            {
                                label: "Participate",
                                items: ["Volunteers", "Organizations", "Forms-and-Applications", "Resources"],
                            },
                        ].map((section) => (
                            <div key={section.label} className="space-y-2">
                                <button
                                    className="w-full text-left flex justify-between items-center"
                                    onClick={() => setMobileSection(
                                        mobileSection === section.label ? null : section.label
                                    )}
                                >
                                    <span>{section.label}</span>
                                    <span>{mobileSection === section.label ? "−" : "+"}</span>
                                </button>

                                {mobileSection === section.label && (
                                    <div className="pl-4 space-y-2 text-gray-700">
                                        {section.items.map((item) => (
                                            <NavLink
                                                key={item}
                                                to={`/${section.label.toLowerCase()}/${item}`}
                                                onClick={() => setMobileOpen(false)}
                                                className={({ isActive }) => `block ${isActive ? "text-pink-700 font-semibold" : ""}`}>
                                                {item.replaceAll("-", " ")}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="mt-4 bg-pink-700 text-white py-3 rounded-lg md:hidden px-2 w-full">
                            Subscribe
                        </button>
                    </div>
                </div>
            )}
        </nav>
    </>

  )
}
