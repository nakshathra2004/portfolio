
import './education.css';
export default function Education(){
    const sections = [
        {
            title: "Bachelor of Technology",
            content: (
                <ul>
                <li>Government College of Engineering, Kannur (2022-present)-7.29 CGPA </li>
                </ul>
            ),
        },
        {
            title: "Bachelor of Science",
            content: (
                <ul>
                <li>Indian Institute of Technology, Madras (2021-present)-7.0 CGPA <br/>
                <i>- It's a Online degree course that I'm pursuing alongside my Btech</i> </li>
                </ul>
            ),
        },
        {
            title: "Higher Secondary (CBSE)",
            content: (
                <ul>
                <li>Devamatha CMI Public School, Thrissur (2020-2022)-90%</li>
                </ul>
            ),
        },
        {
            title: "Secondary (CBSE)",
            content: (
                <ul>
                <li>Secondary (CBSE), Kendriya Vidyalaya AFS Sulur, Coimbatore (2013-2020)-97%</li>
                </ul>
            ),
        },
        {
            title: "Primary (CBSE)",
            content: (
                <ul>
                <li>Kendriya Vidyalaya INS Zamorin, Kannur (2010-2013) </li>
                </ul>
            ),
        },
        {
            title: "Pre-primary (CBSE)",
            content: (
                <ul>
                <li>Kendriya Vidyalaya, Gwalior (2010-2010) </li>
                </ul>
            ),
        },
        
    ];
    
    function SectionCard({ icon, title, content }){
        return (
            <section className="card-section" tabIndex={0} aria-label={title}>
                <h2>
                    {title}
                </h2>
                {content}
            </section>
        );
    }
    return(
        <section className="education-section" style={{
        maxWidth: "1100px",
        margin: "70px auto 0 auto",
        padding: "2rem",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        textAlign: "center"
      }}>
            <h1>Education</h1>
            <p>
                I'm currently studying at GCE, Kannur but here's the detailed list of my education... from 1st standard :p.
                And yes I was pretty loyal to KV till my 10th, after which I switched over to Devamatha for the integrated coaching and higher secondary education.
                And no I have no idea what to fill this section with so... yes rambling {'>'}.{'<'}
            </p>
            <br /><br/>
            <div className="interactive-sections" aria-label="Skills, Education, Interests, Projects">
				{sections.map((section) => (
					<SectionCard key={section.title} {...section} />
				))}
			</div>
        </section>
    );
}