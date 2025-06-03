
import './about.css';

export default function About() {
  return (
    <>
      <section className="about-section" style={{
        maxWidth: "1100px",
        maxHeight: "140vh",
        margin: "70px auto 0 auto",
        padding: "2rem",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        textAlign: "center"
      }}>
        <h1>About Me</h1>
        <h2>Hey there! I’m Nat — short for Nakshathra.</h2>
        <p>
          I’m a 20-year-old CSE student at GCE Kannur who loves building things with code. Whether it’s a small project for fun or something a bit more serious, I’m always up for a challenge.
          <br />
          Honestly, I started coding out of curiosity — and because I’d gotten into CSE. Sure, it gets tiring (and sometimes frustrating) when your code throws more errors than there are lines, but nothing beats that feeling when it finally works after hours of trying. That *finallyyyy* moment? Chef's kiss.
          <br />
          I began my coding journey with Python, thanks to the IITM online BS degree I’m pursuing alongside my BTech. Then came C and Java, courtesy of college coursework. As for web development — it all started with a bootcamp organized by SHE (a tech club at college) in my first year, and I’ve been hooked ever since. These days, I’m figuring out how to build cool stuff using Next.js.
          
          Outside of code, you’ll probably find me lost in a good crime series or book, vibing to music, oror just yapping and chilling with friends.
          (Or just listening to Epic: The Musical for the… “what”-th time now? I’ve lost count hehe :p).
          <br/>
          Anyway, if you’re still curious about me, feel free to check out some of my recent projects <a href="/projects">here</a>. Or just say hi on <a href="https://www.linkedin.com/in/nakshathra-nambiar/">LinkedIn</a> — I’m always up for a good conversation!
        </p>

      </section>
    </>
  );
}