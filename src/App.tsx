import {
  OrganizationSwitcher,
  SignInButton,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/clerk-react";
import "./app.css";
import { Button, Typography } from "@mui/joy";
import UserCard from "./UserCard";
import { Fragment } from "react";

function App() {
  const { userId } = useAuth();

  return userId ? <AuthComponent /> : <UnAuthComponent />;
}

export default App;

function AuthComponent() {
  const { user } = useUser();

  return (
    <Fragment>
      <nav>
        <Typography level="h2">{user?.firstName} Dashboard</Typography>
        <div>
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </nav>
      <UserCard />
    </Fragment>
  );
}

function UnAuthComponent() {
  return (
    <nav>
      <Typography level="h2">Your company name</Typography>

      <SignInButton>
        <Button>Login</Button>
      </SignInButton>
    </nav>
  );
}
