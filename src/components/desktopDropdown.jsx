import { NavLink } from "react-router-dom"

export default function DesktopDropdown({ label, base, items }) {
  return (
    <div className="relative group">
      <NavLink to={`/${base}`} className={({ isActive }) =>
          `hover:text-pink-700 ${isActive ? "text-pink-950 border-b-2 border-pink-700" : ""}`}>
        {label}
        <span className="text-sm px-1 translate-y-1px">▼</span>
      </NavLink>
      <div className="absolute left-0 top-full -translate-x-1/2 w-56 p-2
                      bg-white rounded-md shadow-lg
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition duration-200 z-50">

        {items.map((item) => (
          <div
            key={`${base}-${item.path}`}
            className="relative group/sub"
          >
            <NavLink to={`/${base}/${item.path}`} className={({ isActive }) =>
              `flex justify-between px-4 py-2 hover:bg-pink-50 ${isActive ? "bg-pink-100 text-pink-800 font-semibold" : ""}`}>
              {item.label}
              {item.children && (
                <span className="text-xs ml-2">▶</span>
              )}
            </NavLink>
            {item.children && (
              <div className="absolute left-full top-0 w-52 p-2
                              bg-white rounded-md shadow-lg
                              opacity-0 invisible
                              group-hover/sub:opacity-100 group-hover/sub:visible
                              transition duration-200">
                {item.children.map((child) => (
                  <NavLink key={`${item.path}-${child}`} to={`/${base}/${item.path}/${child}`} className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-pink-50 ${isActive ? "bg-pink-100 text-pink-800 font-semibold" : ""}`}>
                    {child.replaceAll("-", " ")}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  )
}
