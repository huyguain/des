import React from 'react';
import { Spacing } from '@ds.e/foundation';

console.log('Spacing', Spacing);
const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    return React.createElement("div", { style: { backgroundColor: hexCode }, className: `dse-width-${width} dse-height-${height}` });
};

export { Color as C };
//# sourceMappingURL=Color-DJyASVI5.js.map
