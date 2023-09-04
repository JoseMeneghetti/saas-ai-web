import Heading from "@/components/heading";
import SubscriptionButton from "@/components/subscription-button";
import apiServer from "@/lib/service/api-server";
import { IUser } from "@/types/global";
import { Settings } from "lucide-react";

const getUser = async (): Promise<IUser> => {
  const response = await apiServer.get("/auth/me");

  return response.data;
};

const SettingsPage = async () => {
  const user = await getUser();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {user?.isValidSubscription
            ? "You are currently on pro plan."
            : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={user?.isValidSubscription ? true : false} />
      </div>
    </div>
  );
};

export default SettingsPage;
