import PageLayout from "@/components/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const topRef = useScrollReveal<HTMLDivElement>(0.1);
  const bottomRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <PageLayout>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary mb-4 text-center">Contact Us</h1>
      <div className="gold-divider mb-8 md:mb-12" />

      <div ref={topRef} className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 reveal-section">
        {/* Email Form */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-6 md:mb-8 text-center">Email Us</h2>
          <div className="w-full border border-primary/20 overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdPpfT4pNf9llR0nNsoMwrBp_WtALr-xSj1Mk7coWs516WqXw/viewform?embedded=true"
              title="Contact Form"
              className="w-full border-0"
              style={{ minHeight: "600px" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Map + Address */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-6 md:mb-8 text-center">Find Us</h2>
          <div className="w-full aspect-[4/3] border border-primary/20 overflow-hidden">
            <iframe
              title="Welham Boys' School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.0!2d78.032!3d30.326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929da37ddd0c7%3A0x3c15a1e386b7e3b5!2sWelham%20Boys'%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

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
