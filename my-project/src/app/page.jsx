//component imports
import Sidebar from "@/components/main-section/Sidebar";
import CacyroySidebar from "@/components/main-section/CacyroySidebar";

export default function HomePage() {
  return (
    <div className="w-full flex flex-row lg:flex lg:flex-row items-start gap-9">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-1/4 xl:w-1/5 space-y-9 pl-1 lg:pl-10">
        <Sidebar></Sidebar>
        <CacyroySidebar></CacyroySidebar>
      </aside>
    </div>
  );
}
