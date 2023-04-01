"use client";

import Image from "next/image";

type Props = {
  url: string;
  width: number;
  height: number;
};

export const ImageURL = (props: Props) => {
  const { url, width = 36, height = 36 } = props;

  return (
    <Image
      className="object-cover mr-2"
      loader={() => url}
      src="me.png"
      // src="https://ui-avatars.com/api/?name=John+Doe"
      alt=""
      width={width}
      height={height}
    />
  );
};
