import Card, { statusType } from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
  <div className="flex gap-6">
    <Card src="https://picsum.photos/200" content={"kherbache meriem"} status={statusType.Online} />
    <Card src="/vercel.svg" content={"kherbache meriem"} status={statusType.Offline} />
    <Card src="/vercel.svg" content={"kherbache meriem"} status={statusType.Busy} />
  </div>
  );
}
