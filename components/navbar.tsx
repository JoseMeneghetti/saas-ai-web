import MobileSidebar from "./mobile.sidebar";
import apiServer from "@/lib/service/api-server";
import { IUser } from "@/types/global";
import Logout from "./logout";

const getUser = async (): Promise<IUser> => {
  const response = await apiServer.get("/auth/me");

  return response.data;
};

const NavBar = async () => {
  const user = await getUser();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar
        apiLimitCount={user.count}
        isPro={user.isValidSubscription}
      />
      <div className="flex w-full justify-end">
        <Logout />
      </div>
    </div>
  );
};

export default NavBar;
