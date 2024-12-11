import { Button } from "~/lib/components/ui/button";
import {OuiButton} from "~/lib/components/oui/oui-button";
import type { Route } from "./+types/home";
import { StarterComponents } from "~/lib/components/starter-components";
import { OuiSwitch } from "~/lib/components/oui/oui-switch";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "rr-rac" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container p-6 flex flex-col items-center justify-center gap-4">
      <OuiSwitch>Airplane Mode</OuiSwitch>
      <OuiButton>Oui Button</OuiButton>
      <Button>Shadcn Button</Button>  
      <StarterComponents />
    </div>
  );
}
