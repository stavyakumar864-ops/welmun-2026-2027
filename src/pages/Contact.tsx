import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const topRef = useScrollReveal<HTMLDivElement>(0.1);
  const bottomRef = useScrollReveal<HTMLDivElement>(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <h1 className="font-display text-5xl md:text-6xl text-primary mb-4 text-center">Contact Us</h1>
      <div className="gold-divider mb-12" />

      <div ref={topRef} className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 reveal-section">
        {/* Email Form */}
        <div>
          <h2 className="font-display text-3xl text-primary mb-8 text-center">Email Us</h2>
          {submitted ? (
            <p className="text-accent text-lg text-center">Thanks for submitting!</p>
          ) : (
            <div className="bg-card/50 border border-primary/20 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-muted-foreground text-sm mb-2 block">First name</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full bg-beige text-dark-brown border-b-2 border-secondary px-3 py-2 focus:outline-none focus:border-primary cursor-none"
                    />
                  </div>
                  <div>
                    <label className="text-muted-foreground text-sm mb-2 block">Last name</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full bg-beige text-dark-brown border-b-2 border-secondary px-3 py-2 focus:outline-none focus:border-primary cursor-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-muted-foreground text-sm mb-2 block">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-beige text-dark-brown border-b-2 border-secondary px-3 py-2 focus:outline-none focus:border-primary cursor-none"
                  />
                </div>
                <div>
                  <label className="text-muted-foreground text-sm mb-2 block">Write a message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-beige text-dark-brown border-b-2 border-secondary px-3 py-2 focus:outline-none focus:border-primary resize-none cursor-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-10 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-none font-display tracking-wider"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Map */}
        <div>
          <h2 className="font-display text-3xl text-primary mb-8 text-center">Find Us</h2>
          <div className="w-full aspect-[4/3] border border-primary/20 overflow-hidden">
            <iframe
              title="Welham Boys' School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.54!2d78.0322!3d30.3255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c78bce1111%3A0x5c0f1b0f26e6!2sWelham%20Boys&#39;%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Bottom section: Conference Director + Address */}
      <div ref={bottomRef} className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 reveal-section">
        <div className="text-center">
          <h2 className="font-display text-2xl text-primary underline mb-3">Conference Director</h2>
          <p className="text-muted-foreground text-lg">Ms. Kiran Tripathi</p>
          <p className="text-muted-foreground text-lg">+91-7409809908</p>
          <a href="mailto:kirantripathi@welhamboys.org" className="text-primary hover:underline cursor-none text-lg">
            kirantripathi@welhamboys.org
          </a>
        </div>
        <div className="text-center">
          <h2 className="font-display text-2xl text-primary underline mb-3">Our Address</h2>
          <p className="font-display text-lg text-primary">Welham Boys' School</p>
          <p className="text-muted-foreground text-lg">5, Circular Road Dalanwala, Dehradun - 248001</p>
          <p className="text-muted-foreground text-lg">0135-2657120</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
