import { redirect } from "next/navigation";

const Home = () => {
  redirect("/1");
};

export default Home;
export const dynamic = "force-dynamic";
