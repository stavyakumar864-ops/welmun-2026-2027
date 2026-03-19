import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdPpfT4pNf9llR0nNsoMwrBp_WtALr-xSj1Mk7coWs516WqXw/formResponse";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const topRef = useScrollReveal<HTMLDivElement>(0.1);
  const bottomRef = useScrollReveal<HTMLDivElement>(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.1905276668", form.firstName);
    formData.append("entry.1158082062", form.lastName);
    formData.append("entry.1791935519", form.email);
    formData.append("entry.499414577", form.message);

    fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    setSubmitted(true);
  };

  return (
    <PageLayout>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary mb-4 text-center">Contact Us</h1>
      <div className="gold-divider mb-8 md:mb-12" />

      <div ref={topRef} className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 reveal-section">
        {/* Email Form */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-6 md:mb-8 text-center">Email Us</h2>
          {submitted ? (
            <p className="text-accent text-lg text-center">Thanks for submitting!</p>
          ) : (
            <div className="bg-card/50 border border-primary/20 p-5 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-muted-foreground text-sm mb-2 block">First name</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full bg-card border border-primary/30 text-foreground px-3 py-2 focus:outline-none focus:border-primary cursor-none"
                    />
                  </div>
                  <div>
                    <label className="text-muted-foreground text-sm mb-2 block">Last name</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full bg-card border border-primary/30 text-foreground px-3 py-2 focus:outline-none focus:border-primary cursor-none"
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
                    className="w-full bg-card border border-primary/30 text-foreground px-3 py-2 focus:outline-none focus:border-primary cursor-none"
                  />
                </div>
                <div>
                  <label className="text-muted-foreground text-sm mb-2 block">Write a message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-card border border-primary/30 text-foreground px-3 py-2 focus:outline-none focus:border-primary resize-none cursor-none"
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

        {/* Map + Address */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-6 md:mb-8 text-center">Find Us</h2>
          <a href="https://www.google.com/maps/place/Welham+Boys'+School/@30.3191,78.0325,17z/" target="_blank" rel="noopener noreferrer" className="block w-full aspect-[4/3] border border-primary/20 overflow-hidden cursor-none">
            <iframe
              title="Welham Boys' School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5!2d78.03025!3d30.31910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c4f3a5a5a5%3A0x8c4b8b8b8b8b8b8b!2sWelham+Boys'+School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </a>

          <div className="text-center mt-6 md:mt-8">
            <h2 className="font-display text-xl md:text-2xl text-primary underline mb-3">Our Address</h2>
            <p className="font-display text-base md:text-lg text-primary">Welham Boys' School</p>
            <p className="text-muted-foreground text-base md:text-lg">5, Circular Road Dalanwala, Dehradun - 248001</p>
            <p className="text-muted-foreground text-base md:text-lg">+91-7409809908</p>
          </div>
        </div>
      </div>

      {/* Conference Director + Secretary General */}
      <div ref={bottomRef} className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 reveal-section">
        <div className="text-center">
          <h2 className="font-display text-xl md:text-2xl text-primary underline mb-3">Conference Director</h2>
          <p className="text-muted-foreground text-base md:text-lg">Ms. Kiran Tripathi</p>
          <p className="text-muted-foreground text-base md:text-lg">+91-7409809908</p>
          <a href="mailto:kirantripathi@welhamboys.org" className="text-primary hover:underline cursor-none text-base md:text-lg">
            kirantripathi@welhamboys.org
          </a>
        </div>
        <div className="text-center">
          <h2 className="font-display text-xl md:text-2xl text-primary underline mb-3">Secretary-General</h2>
          <p className="text-muted-foreground text-base md:text-lg">Ahan Sparsh</p>
          <p className="text-muted-foreground text-base md:text-lg">+91-8709633816</p>
          <a href="mailto:secretarygeneral@welhamboys.org" className="text-primary hover:underline cursor-none text-base md:text-lg">
            secretarygeneral@welhamboys.org
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
