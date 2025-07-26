import Marquee from "react-fast-marquee";

export default function Marques() {
  return (
    <section className="w-full bg-gray py-15">
      <div className="page_container flex flex-col gap-4.5 px-0">
        <Marquee
          speed={70}
          className="relative z-10 flex items-center gap-2.5 -rotate-2 h-12.5 bg-black py-1.5 lg:py-2.5 text-xl font-semibold text-white"
        >
          Ajo Esusu Tandas Kye Susu Tandas Njangi Mikado Poro Lughu Vumi
          Harambee
        </Marquee>
        <Marquee
          speed={70}
          direction="right"
          className="relative z-0 flex items-center rotate-1"
        >
          {labels.map((label) => (
            <Badge key={label} text={label} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="flex items-center py-2.5 px-5.5 text-lg font-medium text-gray-600 rounded-full border border-text-300 mr-1.5">
      {text}
    </div>
  );
}

const labels = [
  "Savings to Security",
  "Join a Pod",
  "Reach Your Goals",
  "Take Charge",
  "Designed for YOU",
  "For the Freedom-Builders",
  "For the Money-Movers",
  "For the the wealth creators",
  "Safety Net",
  "Financial Freedom",
];
