"use client";

import Image from "next/image";

export const Loading = () => {
  return (
    <div className="loader__component">
      <Image
        src="/loading.gif"
        width={128}
        height={128}
        alt="loading"
      />
    </div>
  );
};
