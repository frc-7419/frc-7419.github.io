import { useRouter } from "next/router";

function Slack() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("https://join.slack.com/t/7419techworkspace/shared_invite/zt-24fwl9qwk-YjcjyMar0y_3kJcGOEtESA");
  }
  return null;
}

export default Slack;
