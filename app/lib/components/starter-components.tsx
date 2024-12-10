// import { StarterTable } from "./starter-table";
import { Button } from "./starter/Button";

export function StarterComponents() {
  return (
    <div className="flex flex-col gap-4">
      Starter Components
      <div className="border p-12 rounded-lg flex justify-center">
        <Button>Book flight</Button>
      </div>
      <div className="border p-12 rounded-lg flex justify-center">
        {/* <StarterTable /> */}
      </div>
    </div>
  );
}
