import Header from "./components/Header";
import Navigations from "./components/Navigations";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function app () {

    return(
        <div>
            <Header/>
            <Navigations/>
            <Projects/>
            <Footer/>
        </div>
    )
};

export default app;