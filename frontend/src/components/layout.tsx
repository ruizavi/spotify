import { type PropsWithChildren } from "react";
import Control from "./app/control/control";
import Sidebar from "./app/sidebar/sidebar";
import Queue from "./app/main/queue";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full bg-[#000] layout grid gap-4 p-4">
      <Sidebar />
      <main id="main" className="bg-main rounded-md overflow-hidden">
        {children}
      </main>
      <Queue />
      <Control />
    </div>
  );
}

export default Layout;
