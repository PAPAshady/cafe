export default function Home() {
  return (
    <div>
      <section className="relative flex h-[360px] flex-col items-center justify-center gap-2 px-7 text-center text-quaternary">
        <p className="text-sm text-primary">Welcome to Our Restaurant</p>
        <p className="text-2xl">Taste Royale Cuisine</p>
        <span className="w-[60%] flex items-center justify-center my-2 h-[1px] bg-primary/25">
          <span className="seperator"></span>
        </span>
        <p className="text-xs font-semibold w-[90%] leading-[1.3] xs:text-sm xs:w-full">
          The restaurant is an organic space reflective of nature inspired
          cuisine. The interplay of textures and colour brings life and a
          vibrance that embraces the restaurant’s place in the dress circle.
        </p>
        <button>DISCOVER MORE</button>
      </section>
    </div>
  );
}
