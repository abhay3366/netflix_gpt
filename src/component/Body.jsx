import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  // const navigate=useNavigate();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //when user signed in then if code work
      if (user) {
        console.log(user);
        const { uid, email, displayName } = user;
        console.log(uid, email, displayName);
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        // navigate("/browse")

        // User is signed out then else code work
      } else {
        dispatch(removeuser());
        // navigate("/")
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter}>
        <Login />
        <Browse />
      </RouterProvider>
    </div>
  );
};

export default Body;
