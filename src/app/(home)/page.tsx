"use client";
import Blob from "@/assets/images/blob.svg";
import Lottie from "react-lottie";
// import computerTeachingAnimation from "@/assets/videos/computerTeachingAnimation.json";
import computerTeachingAnimation from "@/assets/videos/Animation - 1707206605297.json";
// import scanAnimation from "@/assets/videos/scanAnimation.gif";
import dashboard from "@/assets/videos/dashboard.gif";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import "./home.css";
import Aos from "aos";
import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { type MouseEvent } from "react";
import TypeIt from 'typeit';
// import Typewriter from '@/components/Typewriter';

const Typewriter : any= ({ text  }) => {
  useEffect(():any => {
    new TypeIt('#typewriter-output', {
      strings: text, // An array of strings to be typed
      speed: 50, // Typing speed in milliseconds per character
      waitUntilVisible: true, // Start typing when the element is visible
    }).go(); // Start the animation
  }, [text]);

  return (
    <div>
      <h1 id="typewriter-output"></h1>
    </div>
  );
};

export default function Home() {

  const textToType = ['Our full-fledged Dashboard will help companies in gaining insights'];

  const toastTest = () => { };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: computerTeachingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, easing: "ease", offset: 60 });
  }, []);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <>
      <div className="mt-32" id="#hero">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative bg-white text-white left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-deep to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-[4.5rem] font-bold pb-4 text-white sm:text-6xl line-clamp-5">
              <span className="text-transparent bg-gradient-to-b from-yellow-200 to-indigo-400 bg-clip-text mb-3">
                Reinventing
              </span>{" "}
              Data Analysis... The right way
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Unlocking  the power of data to drive insights and make decisions. We specialize in developing custom solutions
              of data reports and visualizations that make sense to you!
            </p>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className=" rounded-full px-3 py-1 mt-2 text-sm leading-6 text-gray-500 ring-1 ring-zinc-400  hover:ring-zinc-500">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-indigo-600 ml-1">
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="shadow" color="primary">
                Get Started
              </Button>
              <a
                href="#"
                className="text-sm text-zinc-400 font-semibold leading-6"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>


      <div className="h-96 mt-[120px]  flex justify-around">
        <div className="relative w-full h-auto left-36">
          <Image
            width={530}
            height={530}
            src={Blob}
            alt="blob"
            data-aos="fade-right"
          />
        </div>
        <div className="relative right-96 w-full h-auto z-10" >
          <Lottie width={450} height={450} options={defaultOptions} />
        </div>
        <div data-aos="zoom-in-left">
          <h1
            className="text-6xl mt-10 w-[500px] h-[500px] relative right-36"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Transform your boring charts
            <span className="block">Into an interactive</span>
            <div className="typewriter">
              <span className="text-transparent bg-gradient-to-b from-yellow-200 to-indigo-400 bg-clip-text">
                ChatBot Experience
              </span>
            </div>
          </h1>
        </div>
      </div>

      <Divider className="mt-48 mb-20" />
      <h1 className="text-5xl ml-16 mb-8">How we operate</h1>
      <div className=" h-100 steps-path w-full" data-aos="fade">
        <svg viewBox="0 0 1000 400" id="stepPath">
          <path
            className="steps "
            pathLength="100"
            d="M 100 200 C 250 200 150 50 300 50 L 500 50 C 650 50 550 200 700 200 L 900 200"
          />
          <path
            className="steps"
            pathLength="100"
            d="M 100 200 C 250 200 150 350 300 350 L 500 350 C 650 350 550 200 700 200 L 900 200 "
          />
          <text
            className="path-text-1"
            dominantBaseline="middle"
            textAnchor="middle"
            x="50"
            y="200"
            fontSize="16pt"
            fill="white"
          >
            Sign Up
          </text>
          <text
            className="path-text-2"
            dominantBaseline="middle"
            textAnchor="middle"
            x="275"
            y="25"
            fill="white"
            fontSize="16pt"
          >
            Submit Data Report
          </text>
          <text
            className="path-text-2"
            dominantBaseline="middle"
            textAnchor="middle"
            x="275"
            y="375"
            fill="white"
            fontSize="16pt"
          >
            Dashboard
          </text>
          <text
            className="path-text-3"
            dominantBaseline="middle"
            textAnchor="middle"
            x="525"
            y="375"
            fill="white"
            fontSize="16pt"
          >
            Analyze
          </text>
          <text
            className="path-text-3"
            dominantBaseline="middle"
            textAnchor="middle"
            x="525"
            y="25"
            fill="white"
            fontSize="16pt"
          >
            Gain Insights 
          </text>
          <text
            className="path-text-4"
            dominantBaseline="middle"
            textAnchor="middle"
            x="730"
            y="175"
            fill="white"
            fontSize="16pt"
          >
            Decision making
          </text>
          <text
            className="path-text-5"
            dominantBaseline="middle"
            textAnchor="middle"
            x="920"
            y="230"
            fill="white"
            fontSize="16pt"
          >
            Mint Money
          </text>
          <circle
            cx="100"
            cy="200"
            r={10}
            className="path-point path-point-1"
          ></circle>
          <circle
            cx="300"
            cy="50"
            r={10}
            className="path-point path-point-2"
          ></circle>
          <circle
            cx="300"
            cy="350"
            r={10}
            className="path-point path-point-3"
          ></circle>
          <circle
            cx="500"
            cy="50"
            r={10}
            className="path-point path-point-4"
          ></circle>
          <circle
            cx="500"
            cy="350"
            r={10}
            className="path-point path-point-5"
          ></circle>
          <circle
            cx="700"
            cy="200"
            r={10}
            className="path-point path-point-6"
          ></circle>
          <circle
            cx="900"
            cy="200"
            r={10}
            className="path-point path-point-7"
          ></circle>
        </svg>
      </div>

      {/* //! ye section white mode me dikhao */}
      <div className=" h-96 mt-56 flex  justify-around">
        <div
          className="mx-32 my-8"
          data-aos="zoom-in-left"
          data-aos-delay="300"
        >
          {/* <Image src={scanAnimation} width={300} alt="scanAnimation" /> */}
          <Image
            src={dashboard}
            width={300}
            alt="dashboard"
            data-aos="zoom-in-left"
            data-aos-delay="300"
          />
        </div>
        <div
          className="flex justify-center align-middle my-20"
          data-aos="zoom-in-left"
          data-aos-delay="300"
        >
          <h1 className="text-5xl ">
          <div className="container mx-auto mt-8">
              <Typewriter text={textToType} />
            </div>
          </h1>
        </div>
      </div>

        <h1 className="block text-center text-5xl mt-20"             data-aos="fade-left"
>Our Subscription Plans</h1>
      <div className=" h-96 mt-32 flex justify-around mb-40">
        <div
                    data-aos="fade-right"

          className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
          onMouseMove={handleMouseMove}
        >

<motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
            }}
          />
          <div>
            <h3 className="text-base font-semibold leading-7 text-sky-500">
              Byline
            </h3>
            <div className="mt-2 flex items-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-yellow-300">
                Gold 
              </span>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Get partial benefits of our all our advanced ML models.
            </p>
          </div>
        </div>

        <div
                    data-aos="fade-right"

          className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
          onMouseMove={handleMouseMove}
        >

<motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
            }}
          />
          <div>
            <h3 className="text-base font-semibold leading-7 text-sky-500">
              Byline
            </h3>
            <div className="mt-2 flex items-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-blue-300 text-white">
                Diamond 💎
              </span>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Get some benefits of our all our advanced ML models.
            </p>
          </div>
        </div>

        <div
                    data-aos="fade-right"

          className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
          onMouseMove={handleMouseMove}
        >

<motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
            }}
          />
          <div>
            <h3 className="text-base font-semibold leading-7 text-sky-500">
              Byline
            </h3>
            <div className="mt-2 flex items-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-400">
                Premium
              </span>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Get full benefits of our all our advanced ML models.
            </p>
          </div>
        </div>
    </div>
    </>
  );
}