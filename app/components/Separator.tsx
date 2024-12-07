
"use client"

import { cn } from "@/lib/utils/cn"



interface SeparatorProps {
    orientation?: 'horizontal' | 'vertical',
    className?: string
}


export const Separator: React.FC<SeparatorProps> = ({ orientation = 'horizontal', className }) => {  
    return (
        <div className={cn(
            orientation === "horizontal" ?
                "h-[2px]"
                : "w-[2px]",
            className
       )}></div>
   )
}

