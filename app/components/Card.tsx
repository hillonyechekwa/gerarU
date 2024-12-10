import React from "react"


export interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    className?: string
}


export const Card = ({children, className, ...props}: CardProps) => {
    return (
        <div {...props} className={className}>
            {children}
        </div>
    )   
}

