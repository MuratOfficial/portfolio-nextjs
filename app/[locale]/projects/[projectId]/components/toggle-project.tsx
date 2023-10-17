import Image from "next/image";
import React from "react";

interface ToggleProjectProps {
  data: string[];
}

function ToggleProject({ data }: ToggleProjectProps) {
  return (
    <div className="w-ful h-max">
      {data.map((img, id) => (
        <Image
          loading="lazy"
          height={1800}
          alt={img}
          key={id}
          width={1400}
          src={img}
          sizes="(max-width: 640px) 100vw,
    (max-width: 1280px) 50vw,
    (max-width: 1536px) 33vw,
    25vw"
        />
      ))}
    </div>
  );
}

export default ToggleProject;
