import './skills.css'; 
export default function Skills() {
    const sections = [
        {
            title: "Programming Languages:",
            content: (
                <ul>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>SQL</li>
                </ul>
            ),
        },
        {
            title: "Web Development:",
            content: (
                <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>CSS</li>
                    <li>HTML</li>
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
                        <h2>{section.title}</h2>
                        {section.content}
                    </div>
                ))}
            </div>
        </section>
    );
}