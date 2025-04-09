import React from "react";
import { text } from "stream/consumers";

interface Props {
  children: string;
  title: string;
  textRight?: boolean;
  image?: string;
}

const StoryCard = ({
  children,
  title,
  textRight = true,
  image = "",
}: Props) => {
  function heroDesign() {
    if (textRight) {
      return "hero-content flex-col lg:flex-row";
    } else {
      return "hero-content flex-col lg:flex-row-reverse";
    }
  }

  let imageBool = image == "" ? false : true;

  return (
    <div className="hero bg-base-200 min-h-100 px-25">
      <div className={heroDesign()}>
        {imageBool && (
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        )}
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
