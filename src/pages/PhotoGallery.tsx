import { useState, useCallback, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

const img = (id: string, suffix = "") =>
  `https://static.wixstatic.com/media/9bbbe8_${id}~mv2${suffix}.jpg/v1/fill/w_800,h_533,q_90,enc_avif,quality_auto/9bbbe8_${id}~mv2${suffix}.jpg`;

const photos = [
  { src: img("ff32436f4a324f8684cadec9d813af31"), col: 2, row: 2 },
  { src: img("d3ce941c4e35471cbb329ea63211a4db"), col: 1, row: 1 },
  { src: img("541ded480db24a56a353c369abfba924"), col: 1, row: 2 },
  { src: img("5cf87e6db17d4c909aa3bb391a1862a1"), col: 2, row: 1 },
  { src: img("f4ca83ef5afb47ee8ad80261588b52aa"), col: 1, row: 1 },
  { src: img("0c1e643fd34640f4a1c8c39c6ac3312f"), col: 1, row: 2 },
  { src: img("608964b9e45b4255bffd28ff310e6b6b"), col: 2, row: 2 },
  { src: img("717b22345c7849fcbbf7c2a0c9d6e05a"), col: 1, row: 1 },
  { src: img("c169daa49bd24352bd19ab2843b0bd53"), col: 2, row: 1 },
  { src: img("a9e95cd0375d44cf9d3d9f0448c40fbb"), col: 1, row: 2 },
  { src: img("631c15005d8e42aeaf5f520ff53f48d0"), col: 1, row: 1 },
  { src: img("dc2dc0cdc51340d4b36f8eaa169fed7e"), col: 2, row: 2 },
  { src: img("d223ded638be423a98fcdbf8c470fb6d"), col: 1, row: 1 },
  { src: img("18db60564f2843e3a6429c96b5361add"), col: 1, row: 2 },
  { src: img("79c19085143348c9a5fc38150fa7c837"), col: 2, row: 1 },
  { src: img("b89e72346b94481c9cf0ba206f1f1d43", "_d_5472_3648_s_4_2"), col: 1, row: 1 },
  { src: img("3ea4fc7204e04e1e844d3f66cc703f24"), col: 1, row: 2 },
  { src: img("4951d33e171e44bba93d687471ef1566"), col: 2, row: 2 },
  { src: img("92e98852093342d48927bc259af7437d", "_d_5472_3648_s_4_2"), col: 1, row: 1 },
  { src: img("3133b53b2a494066989d48ca30c87f3f", "_d_5472_3648_s_4_2"), col: 2, row: 1 },
  { src: img("f1f7194c62eb4dc4a39952161bd4bff1", "_d_3456_2304_s_2"), col: 1, row: 1 },
  { src: img("f00bea5dd28b4bebaa6a8c40c5e7a8b1"), col: 1, row: 2 },
  { src: img("5e646b76d29846d680a6b7f291701593", "_d_5472_3648_s_4_2"), col: 2, row: 2 },
  { src: img("a7e8a8cf43574ee6bd4edc868a24d852", "_d_5472_3648_s_4_2"), col: 1, row: 1 },
  { src: img("ae4233d011764c949d6d3f5bb5a89794", "_d_5472_3648_s_4_2"), col: 2, row: 1 },
  { src: img("8de47ec44e5540648fdc94eb7a0656ac", "_d_5472_3648_s_4_2"), col: 1, row: 2 },
  { src: img("d9488c3999be40e7b5baae5e159f5a45"), col: 1, row: 1 },
  { src: img("2537dd61df534831a902806a65c27dd7", "_d_5472_3648_s_4_2"), col: 2, row: 2 },
  { src: img("bac18256c0854f64a080d8ced4219221", "_d_5472_3648_s_4_2"), col: 1, row: 1 },
  { src: img("5e71e1bcf8da459b8c4045746db08822"), col: 1, row: 2 },
  { src: img("5af336fdc3354706937f1614607cce73", "_d_5472_3648_s_4_2"), col: 2, row: 1 },
  { src: img("8584d04d3df64a40b3646d27fcbf7c3e", "_d_5472_3648_s_4_2"), col: 1, row: 1 },
  { src: img("eff82fe1ad1b4705b550ecaee42fb01c", "_d_5472_3648_s_4_2"), col: 1, row: 2 },
  { src: img("9aef4a3e0f0240d191109e26b0ce46a8"), col: 2, row: 2 },
  { src: img("a17fb0f3e6fe43788eb0d86f80c66fc0", "_d_5472_3648_s_4_2"), col: 1, row: 1 },
  { src: img("458670694d414807a39aa923af803359", "_d_5472_3648_s_4_2"), col: 2, row: 1 },
  { src: img("d93efe9445fe4cf6a412c68b2a0fa6e7"), col: 1, row: 2 },
  { src: img("36835ba8639c4c0b9b70a56d760b44b1", "_d_5472_3648_s_4_2"), col: 1, row: 1 },
  { src: img("642d56efce8c4a53bd4d8e4ee1a9757e"), col: 2, row: 2 },
  { src: img("d2c71b02089e4516bee57c105f5dd04a"), col: 1, row: 1 },
  { src: img("224d9ea4750f40258d63f3b3812206f2", "_d_5472_3648_s_4_2"), col: 1, row: 2 },
  { src: img("8712f366361c4117b7ad6506cdd6b9ac"), col: 2, row: 1 },
  { src: img("aa52070a1a2948148fb5ebdab561998b", "_d_5472_3648_s_4_2"), col: 1, row: 1 },
  { src: img("66be5ad59c304fcc9168a6afa9a1affb"), col: 2, row: 2 },
  { src: img("3c18259cff75407fbfa123ae29dc146e"), col: 1, row: 2 },
  { src: img("680c1829a43646a688eeb054b599a36e"), col: 1, row: 1 },
  { src: img("3447d9f926864e85823f1cde9f5c0f99", "_d_5472_3648_s_4_2"), col: 2, row: 1 },
  { src: img("db867e252b2a485cae7dcf251fa594de"), col: 1, row: 2 },
  { src: img("3f6072e54fe04bb4a9dc0395f73bdadc"), col: 2, row: 1 },
  { src: img("341ee7415afd4eb1bcf827405408719f"), col: 1, row: 1 },
  { src: img("6c3251442462499ca55d859d965dbc26", "_d_5472_3648_s_4_2"), col: 1, row: 2 },
  { src: img("9ac0f0ea32db4bbcb854fa6fe4673ea9", "_d_5472_3648_s_4_2"), col: 2, row: 2 },
  { src: img("50cb405885f344ae8d5178302d1dbdeb"), col: 1, row: 1 },
];

const getHighRes = (src: string) =>
  src
    .replace(/\/fill\/w_\d+,h_\d+/, "/fill/w_1920,h_1280")
    .replace(/\/fit\/w_\d+,h_\d+/, "/fit/w_1920,h_1280");

const PhotoGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(
    (e?: React.MouseEvent | KeyboardEvent) => {
      if (e && "stopPropagation" in e) e.stopPropagation();
      setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));
    },
    []
  );

  const goPrev = useCallback(
    (e?: React.MouseEvent | KeyboardEvent) => {
      if (e && "stopPropagation" in e) e.stopPropagation();
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length
      );
    },
    []
  );

  // Keyboard nav + body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Preload adjacent images so next/prev is instant
  useEffect(() => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + 1) % photos.length;
    const prev = (lightboxIndex - 1 + photos.length) % photos.length;
    [next, prev].forEach((i) => {
      const im = new Image();
      im.src = getHighRes(photos[i].src);
    });
  }, [lightboxIndex]);

  return (
    <PageLayout hideParticles>
      {/* Hero */}
      <motion.div
        className="flex flex-col items-center text-center mb-12"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="font-display italic text-blue-accent text-xs md:text-sm tracking-[5px] uppercase mb-3">
          Moments from past editions
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-primary tracking-wide">
          Photo Gallery
        </h1>
        <div className="gold-divider mx-auto" />
        <p className="text-muted-foreground text-xs md:text-sm mt-1 italic">
          {photos.length} photographs · click any image to view
        </p>
      </motion.div>

      {/* Masonry grid */}
      <div
        className="w-full max-w-[1400px] mx-auto grid gap-1.5 md:gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[180px]"
        style={{ gridAutoFlow: "dense" }}
      >
        {photos.map((photo, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => openLightbox(i)}
            className="relative overflow-hidden group cursor-none rounded-md md:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/60"
            style={{
              gridColumn: `span ${photo.col}`,
              gridRow: `span ${photo.row}`,
            }}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{
              duration: 0.45,
              delay: Math.min(i * 0.02, 0.6),
              ease: "easeOut",
            }}
            aria-label={`Open photo ${i + 1} of ${photos.length}`}
          >
            <img
              src={photo.src}
              alt={`WELMUN gallery photo ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              loading={i < 8 ? "eager" : "lazy"}
            />
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Expand icon on hover */}
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 className="w-3.5 h-3.5 text-primary" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          style={{ animation: "fadeIn 0.25s ease-out" }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          {/* Top bar */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 z-10 bg-gradient-to-b from-black/60 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-display text-white/80 text-xs md:text-sm tracking-[3px] uppercase">
              {String(lightboxIndex + 1).padStart(2, "0")}
              <span className="text-white/40 mx-2">/</span>
              {String(photos.length).padStart(2, "0")}
            </span>
            <button
              onClick={closeLightbox}
              className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 cursor-none"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
          </div>

          {/* Previous button */}
          <button
            onClick={(e) => goPrev(e)}
            className="absolute left-2 md:left-6 z-10 text-white/70 hover:text-white transition-all p-2 md:p-3 rounded-full hover:bg-white/10 cursor-none"
            aria-label="Previous photo"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image */}
          <img
            key={lightboxIndex}
            src={getHighRes(photos[lightboxIndex].src)}
            alt={`WELMUN gallery photo ${lightboxIndex + 1}`}
            className="max-w-[92vw] max-h-[82vh] object-contain select-none rounded-md shadow-2xl"
            style={{ animation: "fadeIn 0.35s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            onClick={(e) => goNext(e)}
            className="absolute right-2 md:right-6 z-10 text-white/70 hover:text-white transition-all p-2 md:p-3 rounded-full hover:bg-white/10 cursor-none"
            aria-label="Next photo"
          >
            <ChevronRight size={36} />
          </button>

          {/* Bottom hint */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
            <span className="text-white/40 text-[10px] md:text-xs tracking-[3px] uppercase">
              Esc to close · ← → to navigate
            </span>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default PhotoGallery;
