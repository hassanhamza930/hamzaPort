import PortfolioPage1 from "./components/portfolioPage1";
import DevelopersPage from "./developersPage";

export default function Portfolio(){
    return(
        <div style={{ fontFamily: "Roboto Mono" }} className="h-full w-full bg-red-600 flex flex-col">
            
            <DevelopersPage/>
            <PortfolioPage1/>
            
            

        </div>
    )
}