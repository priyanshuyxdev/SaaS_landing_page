import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400  rounded-full font-semibold text-neutral-900 ">
                        ✨$7.5m seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl mt-6 text-center font-medium">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-xl mt-8 text-white/50 text-center max-w-2xl mx-auto">
                    Design tools shouldn't slow you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>

                <form className="flex border border-white/15 rounded-full mt-8 p-2 max-w-lg mx-auto">
                    <input type="email" placeholder="Enter your email" className="bg-transparent outline-none px-4 w-40  flex-1"/>
                  
                    <Button className="whitespace-nowrap " variant="primary" size="sm">Sign up</Button>
                </form>
            </div>
        </section>
    );
}
