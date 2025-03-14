import { IconProps } from "../../types/iconProps";

export default function IconDecrement({ onClick }: IconProps) {
  return (
    <div className="btn-quantity" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="2"
        fill="none"
        viewBox="0 0 10 2"
      >
        <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
      </svg>
    </div>
  );
}
