import './skills.css'; 
import { FaCode, FaTools, FaLanguage } from "react-icons/fa";
import { SiJavascript, SiPython, SiMysql, SiReact, SiNextdotjs, SiCss3, SiHtml5, SiGit } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { LiaFileCodeSolid } from "react-icons/lia";
export default function Skills() {
    const sections = [
        {
            title: "Programming Languages:",
            icon: <FaCode style={{ color: "#4f8cff", marginRight: "0.5em" }} />,
            content: (
                <ul>
                    <li><LiaFileCodeSolid />C</li>
                    <li><FaJava/>Java</li>
                    <li><SiJavascript style={{color:"#f7df1e"}} /> JavaScript</li>
                    <li><SiPython style={{color:"#3776ab"}} /> Python</li>
                    <li><SiMysql style={{color:"#00758f"}} /> SQL</li>
                </ul>
            ),
        },
        {
            title: "Web Development:",
            icon: <SiReact style={{ color: "#61dafb", marginRight: "0.5em" }} />,
            content: (
                <ul>
                    <li><SiReact style={{color:"#61dafb"}} /> React</li>
                    <li><SiNextdotjs style={{color:"#000"}} /> Next.js</li>
                    <li><SiCss3 style={{color:"#264de4"}} /> CSS</li>
                    <li><SiHtml5 style={{color:"#e34c26"}} /> HTML</li>
                </ul>
            ),
        },
        {
            title: "Tools & Technologies:",
            icon: <FaTools style={{ color: "#4f8cff", marginRight: "0.5em" }} />,
            content: (
                <ul>
                    <li><SiGit style={{color:"#f34f29"}} /> Git</li>
                    <li><VscVscodeInsiders /> Visual Studio Code</li>
                </ul>
            ),
        },
        {
            title: "Languages:",
            icon: <FaLanguage style={{ color: "#4f8cff", marginRight: "0.5em" }} />,
            content: (
                <ul>
                    <li>English</li>
                    <li>Malayalam</li>
                    <li>Hindi</li>
                    <li>Tamil</li>
                    <li>German (A1 level)</li>
                </ul>
            ),
        },
    ];
    return (
        <section className="skills-section">
            <h1>Skills</h1>
            <div className="skills-list">
                {sections.map((section) => (
                    <div key={section.title} className="skills-card">
                        <h2>{section.icon}{section.title}</h2>
                        {section.content}
                    </div>
                ))}
            </div>
        </section>
    );
}