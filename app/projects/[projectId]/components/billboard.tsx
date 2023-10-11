import React from "react";

function Billboard() {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="text-neutral-400 text-md ">*Category*</div>
      <div className="text-neutral-200 font-semibold drop-shadow-lg text-7xl w-1/2">
        *Billboard Lab
      </div>
      <div className="text-neutral-400 font text-md w-1/2 pt-12">
        Home &gt; Projects &gt; Billboard Label
      </div>
    </div>
  );
}

export default Billboard;
