import { FadeLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <FadeLoader color="#63ECBB" />
    </div>
  );
}
