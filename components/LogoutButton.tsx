import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "@/auth";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" variant="secondary" className="w-full text-xs">
        Log Out
        <LogOut className="mr-2 h-4 w-4" />
      </Button>
    </form>
  );
}
