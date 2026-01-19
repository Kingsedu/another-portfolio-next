"use client";

import React, { useEffect } from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import profilePic from "@/public/images/profile1.png";
import Image from "next/image";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="py-24 relative min-h-screen flex items-center justify-center text-white/80"
    >
      <div className="absolute z-0 inset-0">
        <Canvas>
          <Stars radius={50} count={500} factor={2} fade speed={2} />
        </Canvas>
      </div>
      <div className="z-10 max-w-6xl  mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start"
        >
          <p className="bg-purple-400/40 px-3 py-1 border-purple-700/80 rounded-xl mb-2">
            Availbale for new projects
          </p>
          <p className="text-4xl md:text-5xl font-bold">Hi , I am </p>
          <p className="bg-linear-to-r from-white to-purple-400 bg-clip-text text-4xl md:text-6xl text-transparent font-bold">
            Chinedu Umeh
          </p>
          <p className="max-w-lg text-based my-6 text-center md:text-start">
            Full stack Developer based in Nigeria, with over 5 years of
            experience{" "}
          </p>
          <div className="flex flex-col gap-6 mt-6 md:flex-row ">
            <motion.button
              style={{ border, boxShadow }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-3 py-2 rounded-full text-sm "
            >
              <FiDownload className="text-lg" />
              Download CV
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 py-2 px-3 rounded-full text-sm border border-white/30"
            >
              View Projects
              <FiArrowRight />
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.0 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-40"
            style={{
              background: `radial-gradient(circle, ${COLORS_TOP[0]}, transparent 70%)`,
            }}
          />
          <div className="z-10 relative bg-linear-to-b from-gray-900 to-black rounded-full shadow-xl border border-gray-200/30">
            <Image
              src={profilePic}
              alt="profile pic"
              width={300}
              className="rounded-full"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-2 -right-2 bg-linear-to-r from-purple-500 to-blue-500 px-3 py-1 rounded-full text-sm font-medium"
            >
              Developer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
