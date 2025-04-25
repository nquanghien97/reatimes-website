import MotionWrapper from "@/components/MotionWrapper";
import { Variants } from "motion/react";

export default function Home() {

  const cardVariants: Variants = {
    offscreen: {
      rotate: 0,
    },
    onscreen: {
      rotate: 360,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <>
      <div className="bg-white h-[2000px]" />
      <div className="flex justify-center items-center h-[400px]">
        <MotionWrapper
          attr={{
            whileInView: "onscreen",
            initial: "offscreen",
            // viewport={{ once: true, amount: 0.5 }},
            transition: { duration: 1 },
            variants: cardVariants,
          }}
        >
          <div className="w-32 h-32 bg-white text-black">
            motion
          </div>
        </MotionWrapper>
      </div >
      <div className="bg-white h-[2000px]" />
    </>
  );
}
