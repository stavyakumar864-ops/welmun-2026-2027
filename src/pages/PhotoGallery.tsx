import PageLayout from "@/components/PageLayout";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const photos = [
  // Row 1: 2 small side-by-side | 1 tall center | 1 tall right
  { src: "https://static.wixstatic.com/media/9bbbe8_ff32436f4a324f8684cadec9d813af31~mv2.jpg/v1/fit/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_ff32436f4a324f8684cadec9d813af31~mv2.jpg", style: "col-span-1 row-span-1" },
  { src: "https://static.wixstatic.com/media/9bbbe8_f4ca83ef5afb47ee8ad80261588b52aa~mv2.jpg/v1/fit/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_f4ca83ef5afb47ee8ad80261588b52aa~mv2.jpg", style: "col-span-1 row-span-1" },
  { src: "https://static.wixstatic.com/media/9bbbe8_5cf87e6db17d4c909aa3bb391a1862a1~mv2.jpg/v1/fit/w_960,h_639,q_90,enc_avif,quality_auto/9bbbe8_5cf87e6db17d4c909aa3bb391a1862a1~mv2.jpg", style: "col-span-1 row-span-2" },
  { src: "https://static.wixstatic.com/media/9bbbe8_c169daa49bd24352bd19ab2843b0bd53~mv2.jpg/v1/fit/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_c169daa49bd24352bd19ab2843b0bd53~mv2.jpg", style: "col-span-1 row-span-2" },
  // Row 2: 2 side-by-side left
  { src: "https://static.wixstatic.com/media/9bbbe8_a9e95cd0375d44cf9d3d9f0448c40fbb~mv2.jpg/v1/fit/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_a9e95cd0375d44cf9d3d9f0448c40fbb~mv2.jpg", style: "col-span-1 row-span-1" },
  { src: "https://static.wixstatic.com/media/9bbbe8_dc2dc0cdc51340d4b36f8eaa169fed7e~mv2.jpg/v1/fit/w_800,h_530,q_90,enc_avif,quality_auto/9bbbe8_dc2dc0cdc51340d4b36f8eaa169fed7e~mv2.jpg", style: "col-span-1 row-span-1" },
  // Row 3: tall left | small right x2 stacked
  { src: "https://static.wixstatic.com/media/9bbbe8_608964b9e45b4255bffd28ff310e6b6b~mv2.jpg/v1/fit/w_480,h_317,q_90,enc_avif,quality_auto/9bbbe8_608964b9e45b4255bffd28ff310e6b6b~mv2.jpg", style: "col-span-2 row-span-2" },
  { src: "https://static.wixstatic.com/media/9bbbe8_3ea4fc7204e04e1e844d3f66cc703f24~mv2.jpg/v1/fit/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_3ea4fc7204e04e1e844d3f66cc703f24~mv2.jpg", style: "col-span-1 row-span-1" },
  { src: "https://static.wixstatic.com/media/9bbbe8_631c15005d8e42aeaf5f520ff53f48d0~mv2.jpg/v1/fit/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_631c15005d8e42aeaf5f520ff53f48d0~mv2.jpg", style: "col-span-1 row-span-1" },
  // Row 4
  { src: "https://static.wixstatic.com/media/9bbbe8_18db60564f2843e3a6429c96b5361add~mv2.jpg/v1/fill/w_685,h_457,q_90,enc_avif,quality_auto/9bbbe8_18db60564f2843e3a6429c96b5361add~mv2.jpg", style: "col-span-1 row-span-1" },
  { src: "https://static.wixstatic.com/media/9bbbe8_4951d33e171e44bba93d687471ef1566~mv2.jpg/v1/fill/w_337,h_225,q_90,enc_avif,quality_auto/9bbbe8_4951d33e171e44bba93d687471ef1566~mv2.jpg", style: "col-span-1 row-span-1" },
  { src: "https://static.wixstatic.com/media/9bbbe8_92e98852093342d48927bc259af7437d~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_337,h_225,q_90,enc_avif,quality_auto/9bbbe8_92e98852093342d48927bc259af7437d~mv2_d_5472_3648_s_4_2.jpg", style: "col-span-2 row-span-1" },
];

const PhotoGallery = () => {
  const ref = useStaggerReveal<HTMLDivElement>(80);

  return (
    <PageLayout>
      <h1 className="font-display text-5xl md:text-6xl text-primary mb-4 tracking-[6px] uppercase">
        WELMUN Gallery
      </h1>
      <div className="gold-divider mb-12" />
      <div
        ref={ref}
        className="w-full max-w-7xl grid grid-cols-4 auto-rows-[180px] gap-1"
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            data-reveal={i}
            className={`img-zoom overflow-hidden ${photo.style}`}
          >
            <img
              src={photo.src}
              alt={`WELMUN Gallery ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default PhotoGallery;
