// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type { Theme } from "../defaultTheme";
import type * as Common from "../common/types";

export type Direction = "row" | "column" | "row-reverse" | "column-reverse";
export type Align = "start" | "end" | "center" | "stretch" | "baseline";
export type Justify = "start" | "end" | "center" | "between" | "around";
export type Basis = string | ((theme: Theme) => string);
export type Spacing =
  | "none"
  | "XXXSmall"
  | "XXSmall"
  | "XSmall"
  | "small"
  | "medium"
  | "large"
  | "XLarge"
  | "XXLarge"
  | "XXXLarge";

interface MediaQuery extends Common.SpaceAfter {
  readonly inline?: boolean;
  readonly direction?: Direction;
  readonly wrap?: boolean;
  readonly grow?: boolean;
  readonly shrink?: boolean;
  readonly basis?: Basis;
  readonly align?: Align;
  readonly justify?: Justify;
  readonly spacing?: Spacing;
}

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly inline?: boolean;
  readonly direction?: Direction;
  readonly flex?: boolean;
  readonly wrap?: boolean;
  readonly grow?: boolean;
  readonly shrink?: boolean;
  readonly legacy?: boolean;
  readonly basis?: Basis;
  readonly align?: Align;
  readonly justify?: Justify;
  readonly spacing?: Spacing;
  readonly mediumMobile?: MediaQuery;
  readonly largeMobile?: MediaQuery;
  readonly tablet?: MediaQuery;
  readonly desktop?: MediaQuery;
  readonly as?: string;
  readonly largeDesktop?: MediaQuery;
  readonly children: React.ReactNode;
}
