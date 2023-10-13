import React from "react";

interface ToggleProjectProps {
  data: string[];
}

function ToggleProject({ data }: ToggleProjectProps) {
  return (
    <div className="w-ful h-max">
      {data.map((img) => (
        <img height={1400} width={800} src={img} />
      ))}
    </div>
  );
}

export default ToggleProject;
