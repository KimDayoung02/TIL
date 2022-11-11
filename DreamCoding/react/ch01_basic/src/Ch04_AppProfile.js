import "./App.css";
import Avatar from "./components/Ch04_Avatar";
import Profile from "./components/Ch04_Profile";

function AppProfile() {
  return (
    <>
      <Profile
        name="Vanessa Choi"
        job="프론트엔드 개발자"
        imgUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
      />
      <Profile
        name="James Kim"
        job="백엔드 개발자"
        imgUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        new={true}
      />
      <Avatar
        imgUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        new={true}
      />
    </>
  );
}
export default AppProfile;
