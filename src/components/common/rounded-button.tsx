interface ButtonProps {
  name: string;
  type: string;
}

export const RoundedButton = ({ name, type }: ButtonProps) => {
  return (
    <button className={`roundedButton roundedButton__${type}`}>{name}</button>
  );
};
