import Image from "next/image";
import { Button } from "./utils";
import { MyImage, MyCldImage } from "./utils";
import Video from "next-video";
import getStarted from "/public/media/videos/get-started.mp4";
import MediaThemeSutro from "player.style/sutro/react";

export default function Hero() {
  return (
    <section className="w-full bg-gray pt-2.5">
      <div className="page_container ">
        <div className="flex flex-col items-center  py-15  rounded-[0.75rem] bg-[image:linear-gradient(250deg,#E78D5C_1.2%,#2F8488_43.67%,#000_96.25%),linear-gradient(107deg,#672706_-2.13%,#024044_46.9%,#3A1E10_94.01%)]">
          {/* Background */}
          <div className="size-full absolute inset-0 z-0 rounded-[inherit]">
            <Image
              src="/media/images/background-grid.svg"
              alt="Hero Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="inner_container relative z-10">
            <h2 className="text-xl text-center font-semibold text-white mb-4">
              About <span className="text-highlight">Koajo</span>
            </h2>
              <div className="text-sm text-gray-200 mb-6">
                <p>
                  Koajo is revolutionizing the way people can save and build
                  wealth. By modernizing the traditional rotating savings model,
                  we provide a secure, automated, and transparent platform that
                  empowers individuals to achieve financial stability and
                  long-term growth.
                </p>
                <br />
                <p>
                  Credit and loans do not always work for your best interest,
                  and moving funds to your savings account is not always
                  sustainable, that&apos;s why many Americans have substantial
                  debts and inexistent savings, but we want to solve that
                  problem.
                </p>
              </div>

              <div className="w-full h-[calc(240rem/16)] rounded-[0.625rem] overflow-hidden">
                <Video
                  src={getStarted}
                  className="size-full rounded-[inherit]"
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
