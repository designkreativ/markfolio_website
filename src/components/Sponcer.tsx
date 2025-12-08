import ibmlogo from "@/assets/ibmLogo.svg";
import microsoftlogo from "@/assets/microsoftLogo.svg";
import googlelogo from "@/assets/googleLogo.svg";
import metalogo from "@/assets/metaLogo.svg";

export default function Sponcer() {
  const sponcerData = {
    details: {
      title: "Our Clients",
      subtitle: "Trusted over 1500+ clients",
    },
    sponcerLogos: [
      { id: 1, src: ibmlogo, alt: "IBM Logo" },
      { id: 2, src: microsoftlogo, alt: "Microsoft Logo" },
      { id: 3, src: googlelogo, alt: "Google Logo" },
      { id: 4, src: metalogo, alt: "Meta Logo" },
    ],
  };

  return (
    <div className="flex flex-col items-center py-20 bg-white">
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <p className="subheading text-primary-mid">
          {sponcerData.details.title}
        </p>
        <h2 className="heading text-primary-low">
          {sponcerData.details.subtitle}
        </h2>
      </div>
      <div className="flex gap-5 md:gap-10 justify-center flex-wrap mt-10">
        {sponcerData.sponcerLogos.map((logo) => (
          <div
            key={logo.id}
            className="w-25 md:w-30 lg:w-35 h-15 md:h-20 lg:h-25 flex items-center justify-center bg-primary-mid"
            style={{
              WebkitMaskImage: `url(${logo.src.src})`,
              maskImage: `url(${logo.src.src})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        ))}
      </div>
    </div>
  );
}
