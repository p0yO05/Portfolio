import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Hobbies } from "../components/Hobbies";
import { ErrorComponent } from "./ErrorComponent";
import { Contact } from "../components/Contact";
import { Hopes } from "../components/Hopes";
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom"


export const RouterR = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AboutMe/>}/>
                <Route path="/aboutme" element={<AboutMe/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/hobbies" element={<Hobbies/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/hopes" element={<Hopes/>}/>
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>
        </Router>
    )
}