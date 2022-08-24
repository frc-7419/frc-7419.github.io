import { useRouter } from "next/router";

function Slack() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("https://join.slack.com/t/7419techworkspace/shared_invite/zt-1evqs51tf-x4XaMjEGkt7Atp4ebACUHA");
  }
  return null;
}

export default Slack;
