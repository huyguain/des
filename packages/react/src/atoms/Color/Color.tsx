import React from "react"
import { Spacing } from "@ds.e/foundation"

interface ColorProps {
    hexCode: string,
    width?: keyof typeof Spacing,
    height?: keyof typeof Spacing,
}

console.log('Spacing', Spacing);

const Color: React.FC<ColorProps> = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    return <div style={{ backgroundColor: hexCode}} className={`dse-width-${width} dse-height-${height}`}>
    </div>
}

export default Color