import { ImSpinner2 } from "react-icons/im";

export default function loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <ImSpinner2 className="w-12 h-12 animate-spin" />
    </div>
  );
}
