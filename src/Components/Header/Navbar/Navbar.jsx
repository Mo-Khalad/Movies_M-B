import React from "react";
import { useEffect , useRef , useState } from '@/Shared/Hooks';
import { Link , motion as Motion , useScroll } from '@/Shared/Libs';
import { Links , DropdownNav , HoverLayerButton  , MainBtn } from '@/Shared/Components';
import { moviesMBLogo } from '@/Shared/Images';
export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prevScrollValue = useRef(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (current) => {
      if (Math.abs(current - prevScrollValue.current) < 5) {
        return;
      }

      if (current < 24) {
        setShowNav(false);
        prevScrollValue.current = current;
        return;
      }
      setShowNav(current > prevScrollValue.current);
      prevScrollValue.current = current;
    });

    return () => unsubscribe();
  }, [scrollY]);

  const navLinkClassName = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-main-color text-black shadow-main-shadow"
        : "text-white/80 hover:bg-white/10 hover:text-white"
    }`;

  return (
   <> <Motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? -72 : 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="fixed top-0 left-0 z-50 w-full bg-transparent md:bg-black/60"
    >
      <div className="navbar mx-auto max-h-20 max-w-7xl px-4 sm:px-6 backdrop-blur-md bg-black/60 md:bg-transparent">
        <div className="navbar-start gap-2">
          <div className="relative lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="btn btn-circle btn-ghost border border-white/10 text-white hover:bg-white/10"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            </button>
          </div>

          <Link
            to="/"
            className="flex items-center gap-3 rounded-full px-2 py-1 text-white transition hover:bg-white/5"
          >
            <img
              src={moviesMBLogo}
              alt="Movies M-B"
              className="hidden h-11 w-80 md:w-auto sm:block"
            />
           
           <img
              src={moviesMBLogo}
              alt="Movies M-B"
              className="h-11 text-5xl md:w-auto sm:hidden"
            />

          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 rounded-full border border-white/10 bg-white/5 p-2">
            <Links  navLinkClassName={navLinkClassName}/>
          </ul>
        </div>

        <div className="navbar-end gap-2 sm:gap-3">
          <label className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-white/60 md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search"
              className="w-48 bg-transparent text-sm text-white placeholder:text-white/45 lg:w-30 "
            />

            <span className="kbd kbd-sm border-white/10 bg-white/5 text-white/60">
              Ctrl K
            </span>
          </label>

          <HoverLayerButton> sign In </HoverLayerButton>
        </div>
      </div>
    
      <DropdownNav showNav={showNav} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
   
    </Motion.nav>
  
  </>)
}

/*
  <Link to="/Login" className="hidden sm:block">
               <HoverLayerButton bg_during_hover={'bg-main-color'} 
                 bg_before_hover={'bg-transparent'}
               >Sign In</HoverLayerButton>
          </Link>

*/