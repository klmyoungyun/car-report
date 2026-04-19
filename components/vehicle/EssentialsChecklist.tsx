import type { Vehicle, EssentialStatus } from "@/data/schema";
import { Check, Circle, X } from "lucide-react";

const labels: Record<keyof Vehicle["pricing"]["essentials"], string> = {
  surroundView: "서라운드 뷰 카메라",
  rearCamera: "후방 카메라",
  carplayAndroidAuto: "Apple CarPlay / Android Auto",
  adas: "ADAS (스마트 크루즈·차선유지·전방 충돌방지)",
};

function StatusIcon({ status }: { status: EssentialStatus }) {
  if (status === "기본") return <Check className="h-4 w-4 text-ev" />;
  if (status === "옵션") return <Circle className="h-4 w-4 text-yellow-600" />;
  return <X className="h-4 w-4 text-red-500" />;
}

function statusLabel(status: EssentialStatus) {
  if (status === "기본") return "기본 포함";
  if (status === "옵션") return "추가 옵션";
  return "없음";
}

export function EssentialsChecklist({ vehicle }: { vehicle: Vehicle }) {
  const e = vehicle.pricing.essentials;
  const entries: Array<[keyof typeof e, EssentialStatus]> = [
    ["surroundView", e.surroundView],
    ["rearCamera", e.rearCamera],
    ["carplayAndroidAuto", e.carplayAndroidAuto],
    ["adas", e.adas],
  ];
  return (
    <ul className="divide-y border rounded-lg">
      {entries.map(([key, status]) => (
        <li key={key} className="flex items-center justify-between p-3 text-sm">
          <div className="flex items-center gap-2">
            <StatusIcon status={status} />
            <span>{labels[key]}</span>
          </div>
          <span
            className={
              status === "기본"
                ? "text-ev font-medium"
                : status === "옵션"
                  ? "text-yellow-700"
                  : "text-red-600"
            }
          >
            {statusLabel(status)}
          </span>
        </li>
      ))}
    </ul>
  );
}
