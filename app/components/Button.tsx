


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    type?: 'submit' | 'reset' | 'button',
    className?: string,
    children?: React.ReactNode
}


export const Button = ({type, children, className}: ButtonProps) => (
    <button type={type} className={className}>
        {children}
    </button>
)


export const IconButton = ({ children, className }: ButtonProps) => (
    <button className={`${className} p-4`}>
        {children}
    </button>
)