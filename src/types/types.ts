import React from "react";

export type Children =
  | React.ReactElement
  | string
  | number
  | (React.ReactElement | string | number)[];
