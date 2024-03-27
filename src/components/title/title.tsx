import React from "react";

type PropType = {
  children: string;
  level?: number;
};

export const Title = ({ children = "", level = 1 }: PropType) => {
  let headingLevel = level;
  if (level < 1) headingLevel = 1;
  else if (level > 6) headingLevel = 6;

  const component = React.createElement(`h${headingLevel}`, null, children);

  return component;
};
