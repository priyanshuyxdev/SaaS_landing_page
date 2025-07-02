import { type IntegrationType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function IntegrationsCol (props: { integrations: IntegrationType;
    className?: string;
 }) {
    const { integrations, className } = props;
    return (
        <div className={twMerge("flex flex-col gap-4 pb-4 ",className)}>
            {integrations.map((elem) => (
                <div
                    key={elem.name}
                    className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                >
                    <div className="flex justify-center">
                        <Image
                            src={elem.icon}
                            alt="icons"
                            className="size-24"
                        />
                    </div>
                    <h3 className="text-3xl text-center mt-6">{elem.name}</h3>
                    <p className="text-white/50 text-center mt-2">
                        {elem.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
