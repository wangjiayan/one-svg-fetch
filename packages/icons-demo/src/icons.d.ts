/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  export const HelpCircle: Icon;
export const Currency: Icon;
export const Order: Icon;
export const Store: Icon;
export const SlSolid: Icon;
export const Refresh: Icon;
