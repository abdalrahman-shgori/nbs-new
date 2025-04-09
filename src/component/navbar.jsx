import React, { useState, useEffect } from "react";
import AzanSection from "./azanSection";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "../assets/nbslogo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    "Startseite",
    "Aktivitäten",
    "Geflüchtete",
    "Aktionen und Events",
    "Presse",
    "Coronavirus aktuell",
    "Über uns",
  ];

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 680) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${scrolled ? "bg-white text-black " : "text-white"
          } bg-transparent backdrop-blur-md  md:fixed top-0 left-0 w-full z-20`}
      >
        <div className="lg:container lg:mx-auto flex items-center justify-between py-4 px-6">
          <img src={logo} alt="Logo" />

          <ul className="hidden lg:flex space-x-6 text-sm">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-green-400 font-custom">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-custom-green text-white hover:bg-green-500">
              Jetzt spenden
            </Button>
            <Button
              variant="outlined"
              className={`${scrolled ? "text-black border-custom-green" : "border-white"
                }  hover:bg-white bg-transparent`}
            >
              DE
            </Button>

          </div>

          {/* Burger Menu for Mobile */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-6 h-6 text-custom-green " />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-custom-green text-white p-6">
                <div className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="hover:text-green-400 text-lg"
                      onClick={() => setOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                  <Button className="bg-green-400 text-blue-900 hover:bg-green-500 mt-4">
                    Jetzt spenden
                  </Button>
                  <Button
                    variant="outlined"
                    className={`${scrolled ? "text-black border-custom-green" : "border-white"
                      }  hover:bg-white bg-transparent`}
                  >
                    DE
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Azan Section */}
      <AzanSection />
    </>
  );
};

export default Navbar;
