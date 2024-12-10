import { StarterTable } from "./starter-table";
import { Button } from "./starter/Button";

export function StarterComponents() {
  return (
    <div className="flex flex-col gap-4 border p-12 rounded-lg justify-center">
      <Button>Book flight</Button>
      <StarterTable />
    </div>
  );
}
