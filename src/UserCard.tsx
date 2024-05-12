import { useUser } from "@clerk/clerk-react";
import { Avatar, Card, Stack, Typography } from "@mui/joy";

export default function UserCard() {
  const { user } = useUser();

  return (
    <Card>
      <Typography level="h3">User Information</Typography>
      <Avatar src={user?.imageUrl} sx={{ "--Avatar-size": "4rem" }} />
      <Typography level="title-lg">{user?.fullName}</Typography>
      <Typography level="title-sm">{user?.username}</Typography>
      <Stack flexDirection={"row"} gap={2}>
        <Typography>Email: </Typography>
        <Typography>{user?.primaryEmailAddress?.emailAddress}</Typography>
      </Stack>
      <Stack flexDirection={"row"} gap={2}>
        <Typography>Phone No: </Typography>
        <Typography>{user?.primaryPhoneNumber?.phoneNumber}</Typography>
      </Stack>
    </Card>
  );
}
