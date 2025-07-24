import { MyCldImage } from "@/component/utils";
import { Button } from "@/component/utils";
import Image from "next/image";

export default function Team() {
  return (
    <section className="w-full bg-white py-15">
      <div className="page_container">
        {/* Heading */}
        <div className="flex flex-col items-center  gap-5 mb-10">
          <h2 className="text-xl font-semibold text-gray-900 text-center">
            Meet the <span className="text-highlight">Team</span>
          </h2>
          <p className="text-center text-base text-gray-400">
            Unlike informal rotating savings, we are revolutionizing the way you
            experience savings
          </p>
        </div>

        {/* Members */}
        <div className="w-full flex flex-col gap-7">
          {members.map((member, idx) => (
            <div key={idx} className="w-full flex flex-col">
              <div className="relative size-fit flex  mb-5 items-center justify-center  border-2 border-primary/10 rounded-xl ">
                <MyCldImage
                  src={member.imageId}
                  alt={member.name}
                  width={340}
                  height={335}
                  crop="thumb"
                  gravity="center"
                  className="size-auto object-cover rounded-sm"
                  quality={100}
                />
                <Button
                  className="absolute bottom-0 right-0 m-3 !px-2.25 !py-2.25 rounded-sm"
                  icon={
                    <Image
                      src="media/icons/zoom.svg"
                      width={20}
                      height={20}
                      className="size-5 object-contain"
                      alt="zoom icon"
                    />
                  }
                />
              </div>
              <h3 className="font-medium text-lg mb-2.5 text-gray-900">
                {member.name}
              </h3>
              <p className="text-base text-gray-400">{member.position}</p>
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
