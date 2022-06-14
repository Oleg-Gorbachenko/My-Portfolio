import './App.scss';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Footer} from "./footer/Footer";
import {Works} from "./works/Works";
import {ContactForm} from "./contacts/ContactForm";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
