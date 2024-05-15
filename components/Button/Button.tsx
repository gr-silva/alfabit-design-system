export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`
        bg-primary text-white rounded-[8px] px-[32px] py-[12px] font-extrabold
        ${className}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
