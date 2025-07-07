"use client";

import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import designExample1Image from "@assets/images/design-example-1.png";
import designExample2Image from "@assets/images/design-example-2.png";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import CursorImg from "@assets/images/cursor-you.svg";

export default function Hero() {
    const [leftscope, leftanimate] = useAnimate();
    const [leftpointerscope, leftpointeranimate] = useAnimate();

    const [rightscope, rightanimate] = useAnimate();
    const [rightpointerscope, rightpointeranimate] = useAnimate();

    useEffect(() => {
        leftanimate([
            [leftscope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftscope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftpointeranimate([
            [leftpointerscope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftpointerscope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftpointerscope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5 },
            ],
        ]);

        rightanimate([
            [rightscope.current, { opacity: 1 }, { duration: 0.5 }],
            [rightscope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        rightpointeranimate([
            [rightpointerscope.current, { opacity: 1 }, { duration: 0.5 }],
            [rightpointerscope.current, { y: 0, x: 100 }, { duration: 0.5 }],
            [rightpointerscope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
    }, []);

    // useEffect(() => {
    //     rightanimate([
    //         [rightscope.current, { opacity: 1 }, { duration: 0.5 }],
    //         [rightscope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    //     ]);

    //     rightpointeranimate([
    //         [rightpointerscope.current, {opacity:1}, {duration: 0.5}],
    //         [rightpointerscope.current, {y:0, x: 100}, {duration:0.5}],
    //         [rightpointerscope.current, {x:0, y:0 }, {duration: 0.5}]

    //     ])
    // }, []);

    return (
        <section
            id="hero"
            className="py-24 overflow-x-clip"
            style={{
                cursor: `url(${CursorImg.src}), auto`,
            }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftscope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-36 top-16 hidden lg:block"
                    dragConstraints={{
                        top: -100,
                        left: -100,
                        right: 800,
                        bottom: 500,
                    }}
                >
                    <Image
                        src={designExample1Image}
                        alt="design image"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={leftpointerscope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 bottom-4 hidden lg:block"
                >
                    <Pointer name="Andrew" />
                </motion.div>

                <motion.div
                    ref={rightscope}
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    drag
                    className="absolute -right-64 -top-26 hidden lg:block "
                    dragConstraints={{
                        top:-100,
                        left: -100,
                        right: 100,
                        bottom: 100,
                    }}
                >
                    <Image
                        src={designExample2Image}
                        alt="design image"
                        height={450}
                        width={350}
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    ref={rightpointerscope}
                    initial={{ opacity: 0, y: 200, x: 500 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Peter" color="red" />
                </motion.div>

                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400  rounded-full font-semibold text-neutral-900 ">
                        ✨$7.5m seed round raised
                    </div>
                </div>
                <motion.h1 className="text-6xl md:text-7xl lg:text-8xl mt-6 text-center font-medium"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Impactful design, created effortlessly
                </motion.h1>
                <p className="text-xl mt-8 text-white/50 text-center max-w-2xl mx-auto">
                    Design tools shouldn&rsquo;t slow you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>

                <form className="flex border border-white/15 rounded-full mt-8 p-2 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent outline-none px-4 flex-1 w-full"
                    />

                    <Button
                        className="whitespace-nowrap "
                        variant="primary"
                        size="sm"
                    >
                        Sign up
                    </Button>
                </form>
            </div>
        </section>
    );
}
