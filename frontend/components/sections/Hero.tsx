import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/trinity-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-onyx-base via-onyx-base/55 to-onyx-base/10" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-16 md:pb-28 lg:px-24">
        <div className="max-w-3xl">
          <h1 className="font-display font-light text-4xl leading-[1.05] text-ink-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Your Entire IT Operation.
            <br />
            One Trusted Partner.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-platinum">
            Custom development, automation, and infrastructure — handled
            in-house, never outsourced.
          </p>
          <Button href="#contact" className="mt-10">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
