"use client";
import './contact.css';

export default function Contact() {
    return (
        <section className="contact-section">
            <h1>Contact Me</h1>
            <p>
                If you have any questions, suggestions, or just want to say hi,
                feel free to reach out! You can contact me via email at
                <a href="mailto:nakshathranambiar2004@gmail.com">nakshathranambiar2004@gmail.com</a>
                or connect with me on <a href="https://www.linkedin.com/in/nakshathra-nambiar/">LinkedIn</a>.
            </p><br />
            <h2>Send a Message</h2>
            <form
                className="contact-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target;
                    const name = form.name.value.trim();
                    const email = form.email.value.trim();
                    const message = form.message.value.trim();
                    let error = "";
                    if (!name) error = "Name is required.";
                    else if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) error = "Valid email is required.";
                    else if (!message) error = "Message cannot be empty.";
                    if (error) {
                        form.querySelector(".form-error").textContent = error;
                        return;
                    }
                    form.querySelector(".form-error").textContent = "";
                    // Replace with your email sending logic or API endpoint
                    alert("Message sent! (This is a demo. Integrate with an email service.)");
                    form.reset();
                }}
                autoComplete="off"
            >
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                </label>
                <label>
                    Message
                    <textarea
                        name="message"
                        placeholder="Type your message here..."
                        required
                        rows={5}
                    />
                </label>
                <div className="form-error"></div>
                <button type="submit">
                    Send Message
                </button>
            </form>
        </section>
    );
}