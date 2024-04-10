import React from "react"
import Spacing from "../../foundation/Spacing"

interface ColorProps {
    hexCode: string,
    width?: keyof typeof Spacing,
    height?: keyof typeof Spacing,
}

const Color: React.FC<ColorProps> = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    return <div style={{ backgroundColor: hexCode}} className={`dse-width-${width} dse-height-${height}`}>
    </div>
}

export default Color