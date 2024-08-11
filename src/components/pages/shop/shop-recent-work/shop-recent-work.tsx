"use client";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import RecentWorkCardsShop from "./shop-recent-work-cards";

const RecentWorkShop = () => {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <div className="bg-[var(--dark-purple)] -mt-1">
        <motion.div
          initial="initial"
          animate="visible"
          variants={{
            initial: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="container py-8"
        >
          <motion.div variants={childVariants}>
            <Button className="bg-black/45 lg-min:bg-white/5 backdrop-blur-sm m-auto rounded-full px-10 lg-min:hover:bg-white/5 hover:bg-black/45 grid place-content-center">
              <p className="purple_gradient__heading__txt text-center text-xl">
                Recent Work
              </p>
            </Button>
          </motion.div>
        </motion.div>

        {/* Specialized Services Card */}
        <div className="relative overflow-hidden lg-min:pt-6 lg-min:pb-24">
          <div className="bg-gradient-to-tr from-[#6a3af6] to-[#4a328d] w-[700px] h-[800px] rounded-[50%] rotate-[270deg] absolute bottom-0 right-0 inset-x-3/4 inset-y-2/4 blur-[150px] "></div>
          <RecentWorkCardsShop />
        </div>
      </div>
    </>
  );
};

export default RecentWorkShop;
