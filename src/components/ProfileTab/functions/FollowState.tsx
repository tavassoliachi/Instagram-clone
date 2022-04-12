export const FollowState = (followings: any, uid: string) => {
  let filtered = followings.filter((el: any) => el.uid == uid);
  console.log(filtered.length);
  if (filtered?.length) {
    return "Unfollow";
  } else {
    return "Follow";
  }
};
