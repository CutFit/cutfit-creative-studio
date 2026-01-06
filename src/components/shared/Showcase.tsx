import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { featuredblocks } from "@/modelDataset";

const Showcase = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="container relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-left my-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {featuredblocks[0].title ?? ""}
        </h2>
        <p className="text-lg text-white/70 max-w-2xl">
          {featuredblocks[0].text ?? ""}
        </p>
      </div>

      {/* Animation Sequence */}
      <motion.div
        className="relative flex justify-center items-center mt-4"
        initial="initial"
        animate={controls}
      >
        {/* Phase 1: Original Image */}
        <motion.img
          key="original"
          src={featuredblocks[0].img_set[0]}
          variants={{
            initial: { opacity: 1, scale: 1 },
            animate: {
              opacity: 0,
              scale: 0.9,
              transition: { delay: 1.5, duration: 1 },
            },
          }}
          className="absolute rounded-2xl shadow-lg w-[850px] h-[750px] object-cover"
        />

        {/* Phase 2: Generated Gallery */}
        <motion.div
          key="generated"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 2.8, duration: 1.5 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[98%] md:w-[90%]"
        >
          {featuredblocks[0].img_set?.map((mockup, index) => (
            <img key={index} src={mockup} className="rounded-2xl" />
          ))}
        </motion.div>

        {/* Phase 3: Generated Video */}
        <motion.video
          key="video"
          src={featuredblocks[0].vid_url ?? ""}
          autoPlay
          muted
          loop
          playsInline
          variants={{
            initial: { opacity: 0, scale: 0.95 },
            animate: {
              opacity: 1,
              scale: 1,
              transition: { delay: 5, duration: 1.5 },
            },
          }}
          className="absolute rounded-2xl shadow-2xl w-[900px] h-[500px] md:w-[900px] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Showcase;
