import { Globe,Phone,ArrowBigRight, Globe2Icon } from "lucide-react";
import NavBar from "./NavBar";

export default function Header() {
    return(
        <header>
            <NavBar/>
            <div className="nav-actions">
                <button className="btn-outline">
                    <Globe2Icon size={18}/>
                    हिंदी
                </button>
            </div>
            <a
                href="tel:+919015401540"
                className="call-btn"
            >
                
            </a>
        </header>
    )

}