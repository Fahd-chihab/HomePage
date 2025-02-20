import React from "react";

const shapes = {
    round: "rounded-[10px]",
    glossy: "rounded-[36px] min-w-[200px] md:min-w-0 h-[50px] bg-gradient-to-b from-[#2ec4b6] to-[#20a598] shadow-[0_0_20px_rgba(46,196,182,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)]...",
    glossyBlue: "rounded-[50px] min-w-[200px] md:min-w-0 h-[50px] px-[60px] py-[15px] bg-gradient-to-b from-[#2233ff] to-[#0011dd] shadow-[0_0_20px_rgba(34,51,255,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:translate-y-[-1px] hover:shadow-[0_0_25px_rgba(34,51,255,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)] active:translate-y-[1px] active:shadow-[0_0_15px_rgba(34,51,255,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-200 cursor-pointer border-none",
    glossyOrange: "rounded-[50px] min-w-[200px] h-[50px] px-[60px] py-[15px] bg-gradient-to-b from-[#ff8533] to-[#ff6600] shadow-[0_0_20px_rgba(255,102,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:translate-y-[-1px] hover:shadow-[0_0_25px_rgba(255,102,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)] active:translate-y-[1px] active:shadow-[0_0_15px_rgba(255,102,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-200 cursor-pointer border-none"

} as const;const variants = {
    fill: {
        blue_300: "bg-blue-300",
        blue_900: "bg-blue-900",
        gray_900: "bg-gray-900",
        indigo_A400: "bg-indigo-a400",
        cyan_600: "bg-cyan-600",
        yellow_700: "bg-yellow-700",
        white: "bg-white",
    },
    outline: {
       BLUE_900_INDIGO_A700: "border-white border border-solid bg-gradient shadow-xs",
       white: "bg-white border-2 border-[#133a73]",
    },
} as const
const sizes = {
    sm: "h-[60px] pl-6 pr-3.5 text-[20px]",
    lg: "h-[64px] px-[34px] text-[32px]",
    xs: "h-[54px] px-3.5 text-[22px]",
    xl: "h-[76px] px-[34px] text-[32px]",
    md: "h-[60px] px-[34px] text-[24px]",
} as const;


type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "outline",
    size = "md",
    color = "white_A700",
    ...restProps
}) => {
    const baseClasses = "flex flex-row items-center justify-center cursor-pointer whitespace-nowrap";


    const variantClasses = variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]];
    
    return (
        <button
            className={`${baseClasses} ${variantClasses} ${shape && shapes[shape]} ${size && sizes[size]} ${className}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};export default Button;