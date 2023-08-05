import NavbarMain from "./NavbarMain"
import SidebarNav from "./SidebarNav"


function Navbar() {
  return (
    <div>
        <div className="hidden sm:block">
            <NavbarMain />
        </div>
        <div className="md:hidden">
          <SidebarNav />
        </div>
    </div>
  )
}

export default Navbar