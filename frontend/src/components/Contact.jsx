export default function Contact() {
  const email = "pathakpriya2206@gmail.com";

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="section-container">
        <h2 id="contact-heading" className="section-title">
          Contact
        </h2>
        <p className="contact-intro">
          Feel free to reach out for coursework inquiries, evaluation, or
          collaboration.
        </p>

        <div className="contact-methods">
          <div className="contact-row">
            <span className="contact-label">Email</span>
            <div className="contact-value-group">
              <a href={`mailto:${email}`} className="contact-link">
                {email}
              </a>
            </div>
          </div>

          <div className="contact-row">
            <span className="contact-label">GitHub</span>
            <div className="contact-value-group">
              <a
                href="https://github.com/priyapathak2206"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link"
              >
                github.com/priyapathak2206
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
