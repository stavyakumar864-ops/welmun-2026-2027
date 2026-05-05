import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden"
      style={{
        backgroundImage: "url(/images/welmun-home-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/85" />

      <motion.div
        className="relative z-10 text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="font-display text-7xl md:text-9xl text-primary tracking-[10px] mb-2">
          404
        </h1>
        <div className="gold-divider mx-auto" />
        <p className="font-display italic text-lg md:text-xl text-muted-foreground mt-6">
          Ordo ab Chao — but this page is just chaos.
        </p>
        <p className="text-muted-foreground/80 text-sm mt-3 break-all">
          <span className="text-primary/80">{location.pathname}</span> could not be found.
        </p>
        <Link
          to="/"
          className="inline-block mt-10 px-10 py-3 border border-blue-accent/60 rounded-full text-blue-accent font-display text-sm tracking-[4px] uppercase hover:bg-blue-accent hover:text-blue-accent-foreground transition-colors duration-300 cursor-none"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
