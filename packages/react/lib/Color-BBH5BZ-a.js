import React from 'react';

const spaces = {
    xxxs: "xxxs",
    // 4px
    xxs: "xxs",
    // 8px
    xs: "xs",
    // 12px
    sm: "sm",
    // 16px
    md: "md",
    // 24px
    lg: "lg",
    // 32px
    xl: "xl",
    // 48px
    xxl: "xxl",
    // 72px
    xxxl: "xxxl",
};
var Spacing = Object.freeze(spaces);

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    return React.createElement("div", { style: { backgroundColor: hexCode }, className: `dse-width-${width} dse-height-${height}` });
};

export { Color as C };
//# sourceMappingURL=Color-BBH5BZ-a.js.map
