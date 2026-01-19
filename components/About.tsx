"use client";
import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { FiCode, FiLayers, FiServer, FiCpu } from "react-icons/fi";
const COLORS_TOP = ["#8A2BE2", "#9370DB", "#9932CC", "#800080"];

const skills = [
  {
    icon: FiCode,
    title: "Frontend Development",
    description:
      "Frontend developer building responsive, performant interfaces with React, modern CSS, and strong state management.",
  },
  {
    icon: FiServer,
    title: "Backend Development",
    description:
      "Backend engineer focused on scalable APIs, databases, and system architecture using modern Node.js and cloud-ready patterns.",
  },
  {
    icon: FiLayers,
    title: "UI/UX Design",
    description:
      "UI/UX-minded engineer who designs clean, intuitive user experiences grounded in usability and real-world workflows..",
  },
  {
    icon: FiCpu,
    title: "AI & Machine Learning",
    description:
      "Engineer with hands-on experience building practical AI/ML systems, from data processing to model-driven decision pipelines.",
  },
];

const About = () => {
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
  return (
    <motion.section
      style={{ backgroundImage }}
      className="py-32 text-white"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-300 mx-auto"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl text-white w-full text-center font-bold mb-16"
        >
          About <span className="text-purple-300">Me</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="border border-gray-800 p-6 spay-y-6 rounded-lg">
              <p className="text-2xl font-semibold text-purple-300">
                My Jounery
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I started my coding journey by building a strong foundation in
                JavaScript and core computer science concepts. Over time, I
                expanded into full-stack development, working deeply with
                Node.js, databases, and modern frontend frameworks. I gradually
                moved into system design, performance, and low-level topics like
                streams, memory, and architecture. Today, I’m growing into AI,
                ML, and scalable systems with a focus on building real,
                production-ready software.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I approach challenges with a mindset of curiosity and
                persistence, breaking problems down into manageable parts until
                I find a clear solution. I embrace learning from mistakes, using
                each setback as a stepping stone to build stronger, more
                efficient systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6 rounded-lg hover:border-purple-500/50 transition-colors duration-300"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="p-6 backdrop-blur-3xl rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple text-purple-300">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
