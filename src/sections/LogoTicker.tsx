"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestiralogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[
                acmeLogo,
                apexLogo,
                celestiralogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
                acmeLogo,
                apexLogo,
                celestiralogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
              ].map((logo,index) => (
                <Image
                  src={logo}
                  key={index}
                  alt="logo-ticker"
                  height={24} // Set a proper height
                  width={60} // Let it scale proportionally
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
