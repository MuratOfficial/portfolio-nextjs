import React from "react";

interface ToggleProjectProps {
  data: string[];
}

function ToggleProject({ data }: ToggleProjectProps) {
  return (
    <div className="w-ful h-max">
      {data.map((img, id) => (
        <img height={1800} alt={img} key={id} width={1400} src={img} />
      ))}
    </div>
  );
}

export default ToggleProject;
