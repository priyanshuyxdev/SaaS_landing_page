import Tag from "@/components/Tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return <section className="py-28">
        <div className="container">
            <div className="flex justify-center">
                <Tag>Introducing Layer</Tag>
            </div>

            <div className="text-4xl md:text-6xl lg:text-8xl text-center font-medium mt-10">
                <span> Your creatice process deserves better. </span>

                <span className="text-white/15">{text}</span>

                <span className="text-lime-400 block">That&rsquo;s why we built Layers.</span>
                </div>
        </div>
    </section>
}
