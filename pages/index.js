import Files from "../components/files";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Files />
    </div>
  );
}
