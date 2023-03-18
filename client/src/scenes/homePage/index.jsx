import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/UserWidget";

const HomePage = () => {
  const isNotMob = useMediaQuery("(min-width:1000px)");
  const { _id, picPath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNotMob ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNotMob ? "26%" : undefined}>
          <UserWidget userId={_id} picPath={picPath} />
        </Box>
        <Box
          flexBasis={isNotMob ? "42%" : undefined}
          mt={isNotMob ? undefined : "2rem"}
        >
          <MyPostWidget picPath={picPath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNotMob && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
