import { MyImage } from "@/component/utils";
import { Button } from "@/component/utils";
import Image from "next/image";

export default function Team() {
  return (
    <section className="w-full bg-white py-15 md:py-20 lg:py-25">
      <div className="page_container">
        {/* Heading */}
        <div className="flex flex-col items-center  gap-5 mb-10">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-900 text-center">
            Meet the <span className="text-highlight">Team</span>
          </h2>
          <p className="text-center text-base md:text-md lg:text-lg text-gray-400">
            Unlike informal rotating savings, we are revolutionizing the way you
            experience savings
          </p>
        </div>

        {/* Members */}
        <div className="w-full flex flex-col md:flex-row gap-7 lg:gap-7.5">
          {members.map((member, idx) => (
            <div key={idx} className="w-full flex flex-col">
              <div className="relative w-full h-fit max-w-[calc(340rem/16)] md:max-w-[calc(400rem/16)] lg:max-w-[calc(621rem/16)] flex mb-5 items-center justify-center  border-2 border-primary/10 rounded-xl ">
                <MyImage
                  src={member.imageId}
                  alt={member.name}
                  width={340}
                  height={335}
                  tablet={{
                    width: 400,
                    height: 400 * 610 / 621,
                  }}  
                  desktop={{
                    width: 621,
                    height: 610,
                  }}
                  crop="thumb"
                  gravity="center"
                  className="size-full h-auto object-cover rounded-sm"
                  quality={100}
                  isCloudinary
                />
                <Button
                  className="absolute bottom-0 right-0 m-3 md:m-5 !px-2.25 !py-2.25 md:px-5 rounded-sm"
                  icon={
                    <Image
                      src="media/icons/zoom.svg"
                      width={20}
                      height={20}
                      className="size-5 md:size-8 lg:size-9.5 object-contain"
                      alt="zoom icon"
                    />
                  }
                />
              </div>
              <h3 className="font-semibold text-lg md:text-2lg lg:text-xl mb-2.5 md:mb-1 text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm md:text-base text-gray-400">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const members = [
  {
    name: "William Ikwogo",
    imageId: "william-ikwogo-headshot_yljijs",
    position: "Co-founder / Chief Executive Officer",
  },
  {
    name: "Ama Adeniyi",
    imageId: "ama-adeniyi_axq6ew",
    position: "Co-founder / Chief Executive Officer",
  },
];
