import React from "react";
import useUserHook from "@/hooks/UserHook";
import { Avatar, AvatarFallback } from "./ui/avatar";

const UserAvatar = () => {
  const { user } = useUserHook();
  return (
    <Avatar>
      {/* <AvatarImage src={user?.profileImageUrl}/> */}
      <AvatarFallback>{user?.email.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

UserAvatar.propTypes = {};

export default UserAvatar;
