import React from 'react';

const fontSizes = {
    xs: 'xs',
    sm: 'sm',
    base: 'base',
    lg: 'lg',
    xl: 'xl'
};
var FontSize = Object.freeze(fontSizes);

const Text = ({ size = FontSize.base, children }) => {
    const className = `dse-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as T };
//# sourceMappingURL=Text-CMvkYubo.js.map
