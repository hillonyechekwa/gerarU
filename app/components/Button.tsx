
import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    type?: 'submit' | 'reset' | 'button',
    className?: string,
    children?: React.ReactNode
}


export const Button = ({type, children, className, ...props}: ButtonProps) => (
    <button type={type} className={className} {...props}>
        {children}
    </button>
)


export const IconButton = ({ children, className, ...props }: ButtonProps) => (
    <button className={`${className} p-4`} {...props}>
        {children}
    </button>
)