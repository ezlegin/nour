"use client";

import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { signOutReact } from "@/auth";

const LogoutButton = () => {
  return (
    <Button variant={"secondary"} onClick={() => signOutReact}>
      <LogOut /> Log Out
    </Button>
  );
};

export default LogoutButton;
