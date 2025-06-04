import './resume.css'

export default function Resume() {
    return (
        <section className="resume-section">
            <h1>Resume</h1>
            <div className="resume-viewer">
                <iframe
                    src="/resume.pdf"
                    title="Resume PDF"
                    width="100%"
                    height="600px"
                    style={{ border: "none", borderRadius: "1rem", boxShadow: "0 2px 12px rgba(44,62,80,0.09)" }}
                />
            </div>
            <a href="/resume.pdf" download className="resume-download-btn">
                <button>Download</button>
            </a>
        </section>
    );
}