import "../Style/contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or need help?  
          Fill out the form below and we’ll get back to you soon.
        </p>

        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Message</label>
          <textarea placeholder="Type your message here..." rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
