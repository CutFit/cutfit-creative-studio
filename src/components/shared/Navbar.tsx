import React from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { NavMenu } from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-black">
      <nav className="container flex justify-between py-4">
        <Link to={"/"} className="w-[60px] md:w-[60px]">
          <img
            src="/assets/logo-cufit.jpg"
            alt="brand"
            className="w-full object-contain"
            loading="lazy"
          />
        </Link>

        <div className="hidden md:block">
          <NavMenu />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            className="bg-accent border-[1.5px] text-sm border-primary-blue2 font-semibold text-primary-black hover:bg-accent hover:primary-black flex items-center gap-2"
            onClick={() => Navigate("/contact")}
          >
            Contact Us
            <ArrowRight className="text-primary-black hover:text-white h-4" />
          </Button>
        </div>

        {/* Mobile */}

        <div className="md:hidden flex items-center gap-1">
          <div className="" onClick={() => setOpen(!open)}>
            <Menu className="flex items-center justify-center text-white h-7 w-7 cursor-pointer" />
          </div>
        </div>
      </nav>
      <MobileMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
