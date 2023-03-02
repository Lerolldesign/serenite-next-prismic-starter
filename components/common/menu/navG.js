import React from "react"
import { useState } from "react";
import Link from 'next/link'
import Image from "next/image";

const NavG = () => {
const [navOpen, setNavOpen] = useState(false);

return (
    <div className="nav">
       <div className="nav-container">
          <div className="navbar">
            <div className="logo">
            <Link href="/" className="link">
            <Image
            src="/logo/logo-serenite-white.png"
            alt="Logo - Serenite"
            width={53}
            height={92}
              />
            </Link>
            </div>
            <div className="menu-toggle" onClick={() => setNavOpen ( !navOpen)}>
                 <div className={navOpen ? "hamBoxLight hamBoxOpen" : "hamBoxLight"}>
                    <div className="mr-10">
                    <span className={navOpen ? "lineTopLight spin": "lineTopLight"}></span>
                    <span className={navOpen ? "lineBottomLight spin": "lineBottomLight"}></span>
                    </div>
                 </div>
              </div>
            </div>
         <div className="nav-overlay z-[3]" style={
            {
                top: navOpen ? "0" : "-100%",
                transitionDelay: navOpen ? "0s" : "0s",
            }
         }
         >
            <div className="mt-40">
            <ul className="nav-links font-serif uppercase text-left">
                
                <li className="nav-item">
                    <Link 
                    href="/professionnels" 
                    onClick={() => setNavOpen(!navOpen)} 
                    style={{
                        top: navOpen ? "0px" : "85px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "0.9s" : "0s",
                    }}
                         >Professionnels
                    </Link>
                    <div className="nav-item-wrapper"></div>
                </li>
                <li className="nav-item">
                <Link 
                    href="/particuliers" 
                    onClick={() => setNavOpen(!navOpen)} 
                    style={{
                        top: navOpen ? "1px" : "86px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1s" : "0s",
                    }}
                         >Particuliers
                    </Link>
                    <div className="nav-item-wrapper"></div>
                </li>
            </ul>
            <div className="nav-footer">
                <div className="location"
                style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1.2s" : "0s",

                    }}
                >
                    <p>87 Pl. Drouet d'Erlon, 51100 Reims France 
                        <span class="pl-2 pr-3">■</span>
                        <Link className="underline underline-offset-4 hover:text-pink-900 transition duration-500 ease-in-out" href="mailto:contact@serenitegroup.fr">contact@serenitegroup.fr</Link>
                        <span class="pl-2 pr-3">■</span>
                        +33 x xxxx xxx x</p>
                </div>
                <div className="nav-social-media">
                    <ul>
                        <li>
                            <a href="#"
                               style={{
                                bottom: navOpen ? "0" : "-20px",
                                opacity: navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.3s" : "0s",
        
                            }}
                            >instagram</a>
                        </li>
                        <li>
                            <a href="#"
                               style={{
                                bottom: navOpen ? "0" : "-20px",
                                opacity: navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.4s" : "0s",
        
                            }}
                            >linkedin</a>
                        </li>
                    </ul>
                    </div>
                </div>

            </div>
         </div>
        </div>
    </div>
)

}; 

export default NavG