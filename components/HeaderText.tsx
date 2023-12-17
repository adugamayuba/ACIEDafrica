interface textProps {
    text: string;
    className?: string;
    color?: string;
}
export const HeaderTwo = ({ text, color, className } : textProps) => {
    return (
        <h1 className={`text-2xl lg:text-[36px] lg:leading-[43px] font-bold ${color ? color : "text-white"} ${className}`}>
            {text}
        </h1>
    )

}
export const BodyNormal = ({ text, color, className } : textProps) => {
    return (
        <p className={`text-base lg:text-lg ${color ? color : "text-white"} ${className}`}>
            {text}
        </p>
    )

}