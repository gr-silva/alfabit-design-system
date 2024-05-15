export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`
        bg-primary text-white rounded-md px-6 py-2 font-extrabold
        ${className}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
