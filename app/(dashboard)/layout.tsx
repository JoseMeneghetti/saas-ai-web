import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { AuthProvider } from "@/contexts/AuthContext";
import apiServer from "@/lib/service/api-server";
import { IUser } from "@/types/global";
import { redirect } from "next/navigation";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const getUser = async (): Promise<IUser> => {
  try {
    const response = await apiServer.get("/auth/me");
    return response.data;
  } catch (error) {
    redirect("/");
  }
};

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const user = await getUser();

  return (
    <AuthProvider>
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
          <Sidebar
            apiLimitCount={user.count}
            isPro={user.isValidSubscription}
          />
        </div>
        <main className="md:pl-72">
          <NavBar />
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </AuthProvider>
  );
};

export default DashboardLayout;
