import { Card, CardBody } from "@heroui/react";
import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const StatisticsCard = ({
  title,
  count,
  icon,
}: {
  title?: string;
  count?: number;
  icon?: ReactNode;
}) => {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  return (
    <Card className="relative w-[300px] h-[300px] bg-jaris-yellow ">
      <div className="absolute inset-0 top-14 left-10 bg-[url('/logos/jaris-sports-logo.png')] opacity-10 " />
      <CardBody className="w-full flex flex-col items-center justify-center gap-4">
        <p className="text-xl md:text-3xl lg:text-4xl text-jaris-blue">
          {icon}
        </p>
        <p
          className="title lg:text-7xl font-semibold text-jaris-blue"
          ref={countRef}
        >
          {isInView ? (
            <>
              <CountUp
                start={0}
                end={count as number}
                duration={2}
                delay={0.1}
              />
              +
            </>
          ) : (
            <span>0+</span>
          )}
        </p>
        <p className="text-jaris-blue subtitle font-medium">{title}</p>
      </CardBody>
    </Card>
  );
};

export default StatisticsCard;
