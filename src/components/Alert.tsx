// Allows us to pass HTML content to out Alert component
import { ReactNode } from "react";

// Making alert dynamic
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
