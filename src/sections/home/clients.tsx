import Marquee from "react-fast-marquee";
import { Image } from "@heroui/react";
import { homeClientsSlides } from "../../data";

const Clients = () => {
  return (
    <section className="padding-responsive ">
      <div className="w-full">
        <Marquee pauseOnHover className="flex items-center justify-around">
          {homeClientsSlides.map(
            (client: Record<string, string>, index: number) => (
              <div
                key={index}
                className="h-14 lg:h-28 min-w-14 lg:min-w-28 flex items-center justify-center px-4 py-2 bg-[rgba(26,25,24,0.10)] mx-12 rounded-lg"
              >
                <Image
                  src={client?.imgUrl}
                  alt={client?.title}
                  className="h-10 lg:h-20 w-auto"
                />
              </div>
            )
          )}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
