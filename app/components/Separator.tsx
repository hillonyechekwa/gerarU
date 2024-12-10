
"use client"

import { cn } from "@/lib/utils/cn"



interface SeparatorProps {
    orientation?: 'horizontal' | 'vertical',
    className?: string,
    w?: string,
    h?: string
}


export const Separator: React.FC<SeparatorProps> = ({ orientation = 'horizontal', className, w="2px", h="2px" }) => {  
    return (
        <div className={cn(
            orientation === "horizontal" ?
                `h-[${h}]`
                : `w-[${w}]`,
            className
       )}></div>
   )
}

