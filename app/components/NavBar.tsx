import Link from "next/link";
import '../globals.css';

export const NavBar = () => {
  return (
    <nav className="navbar w-full">
        <div className="navContainer">
            <Link href={"/"} className="logo">
                Artistry <span className="oasis">Oasis</span>
            </Link>
        </div>
    </nav>
  )
}
