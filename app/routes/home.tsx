import type { Route } from "./+types/home";
import { StarterComponents } from "~/lib/components/starter-components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "rr-rac" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container p-6">
      <StarterComponents />
    </div>
  );
}
