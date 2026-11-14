import { notFound } from "next/navigation";
import CaptureStage from "./CaptureStage";

/**
 * Dev-only studio for scripts/capture-cards.cjs: renders one product at a time
 * so the product grid can ship plain photos instead of live 3D.
 */
export default function CapturePage() {
  if (process.env.NODE_ENV === "production") notFound();
  return <CaptureStage />;
}
