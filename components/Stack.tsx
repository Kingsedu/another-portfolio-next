"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import { useMotionTemplate, useMotionValue, animate } from "framer-motion";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const stackItems = [
  { name: "React", icon: FaReact, color: "#61DAF8" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Framer", icon: SiFramer, color: "#0055ff" },
];
const Stack = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, #000 50%, ${color})`;
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  return (
    <motion.section style={{ backgroundImage }} className="py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-300 mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl text-center font-bold mb-16 text-gray-500"
        >
          Tech <span className="text-purple-300">Stack</span>
        </motion.h2>
        <div className="text-white grid sm:grid-cols-2 md:grid-cols-4 gap-12">
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-center text-center flex-col">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500/40 to-blue-500/40 rounded-xl blur-xl group-hover:border-purple-500/50 transition-colors duration-300" />
                  <div className="relative p-4 rounded-xl bg-gray-900/50 border border-gray-800 group-hover:border-purple-500/50 transition-colors duration-300">
                    <item.icon
                      className="w-12 h-12"
                      style={{ color: item.color }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Stack;
