import { useState, useCallback } from "react";
import PageLayout from "@/components/PageLayout";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
  // New photos from source
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

// Helper to get high-res version of an image URL
const getHighRes = (src: string) =>
  src.replace(/\/fill\/w_\d+,h_\d+/, "/fill/w_1920,h_1280").replace(/\/fit\/w_\d+,h_\d+/, "/fit/w_1920,h_1280");

const PhotoGallery = () => {
  const ref = useStaggerReveal<HTMLDivElement>(60);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % photos.length);
    },
    [lightboxIndex]
  );

  const goPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
    },
    [lightboxIndex]
  );

  return (
    <PageLayout hideParticles>
      <h1 className="font-display text-5xl md:text-6xl text-primary mb-4 tracking-[6px] uppercase">
        WELMUN Gallery
      </h1>
      <div className="gold-divider mb-12" />
      <div
        ref={ref}
        className="w-full max-w-[1400px] mx-auto grid gap-1"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "180px",
          gridAutoFlow: "dense",
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            data-reveal={i}
            className="img-zoom overflow-hidden relative group cursor-pointer"
            style={{
              gridColumn: `span ${photo.col}`,
              gridRow: `span ${photo.row}`,
            }}
            onClick={() => openLightbox(i)}
          >
            <img
              src={photo.src}
              alt={`WELMUN Gallery ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading={i < 8 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 cursor-none"
          style={{ animation: "fadeIn 0.3s ease-out" }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Previous button */}
          <button
            onClick={goPrev}
            className="absolute left-4 z-10 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Previous photo"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img
            src={getHighRes(photos[lightboxIndex].src)}
            alt={`WELMUN Gallery ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain select-none"
            style={{ animation: "fadeIn 0.2s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            onClick={goNext}
            className="absolute right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Next photo"
          >
            <ChevronRight size={40} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 text-white/50 text-sm">
            {lightboxIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default PhotoGallery;
