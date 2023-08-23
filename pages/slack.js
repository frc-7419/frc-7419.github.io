import { useRouter } from "next/router";

function Slack() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("https://join.slack.com/t/7419techworkspace/shared_invite/zt-21w9rzxh0-bCiGE5A3t_mhplqykV9cLQ");
  }
  return null;
}

export default Slack;
