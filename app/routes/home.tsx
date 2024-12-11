import { Button } from "~/lib/components/ui/button";
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
      <Button>Shadcn Button</Button>
      <StarterComponents />
    </div>
  );
}
