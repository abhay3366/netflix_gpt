import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adduser, removeuser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguages } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  console.log('showGptSearch: ', showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // console.log(error);
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //when user signed in then if code work
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // User is signed out then else code work
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });
    //  Unsubscribe when component unmount this function is called and unsubscribe the onAuthStateChanged;
    return () => unsubscribe();
  }, []);
  const handleGptSearch = () => {
    //toggle gpt search button
    dispatch(toggleGptSearchView());
  };

  const handleLangChange=(e)=>{
    // console.log(e.target.value)
    dispatch(changeLanguages(e.target.value));
  }
  return (
    <div className="absolute w-screen flex justify-between  px-8 py-2 bg-gradient-to-b  from-black z-10">
      <img
        className="w-12 h-12 p-2"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
        {showGptSearch && (          <select className="m-2 bg-gray-600 mt-6 text-white p-0 h-8  " onChange={handleLangChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>)}
          <button
            className=" h-9 p-2 rounded-lg mt-5
          mr-2 bg-purple-800 text-white"
            onClick={handleGptSearch}
          >
            {showGptSearch==true?"Home":"GPT Search"}
          </button>
          <img className="w-12 pt-5" src={LOGO} alt="logo" />
          <h3 className="text-teal-50 font-bold pt-5">{user?.displayName}</h3>
          <button onClick={handleSignOut} className="text-white font-bold px-3">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
