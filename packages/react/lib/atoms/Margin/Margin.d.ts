import React from "react";
import { Spacing } from '@ds.e/foundation';
interface MarginProps {
    space?: keyof typeof Spacing;
    left?: Boolean;
    right?: Boolean;
    top?: Boolean;
    bottom?: Boolean;
    children?: any;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
