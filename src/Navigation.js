import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";


export default function Navigation() {
    return (
        <div style={{ fontFamily: "Roboto Mono" }} className="bg-red-500 h-full text-white flex flex-col justify-center items-center ">
            <Page1 />
            <Page2 />
            <Page3 />
        </div>
    )
}