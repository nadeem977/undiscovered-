import { createContext, useEffect, useState } from "react";
import { BAE_URL_API } from "../Config";
import axios from "axios";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [actvieprofile, setActiveprofile] = useState(null);
  const [open, setOpen] = useState(false);
  const [editabledata, setEditableData] = useState([]);
  const [userexist, setUserexist] = useState("");
  const [profileDAta, setProfileData] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [countPosts, setCountPosts] = useState({ imgCnt: 0, vdoCnt: 0 });
  const [getvideo, setGetvideo] = useState([]);
  const [getImages, setGetImages] = useState([]);
  const [getoffers, setGetOffers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const[preving ,setProving] = useState(false)
  const [profilesInfo, setProfilesInfo] = useState([]);

  
  useEffect(() => {
    getProfileData()
    const emails = JSON.parse(localStorage.getItem("user"));
    if (emails) {
      getUserProfile();
    } 
  }, []);

  const getUserProfile = async () => {
    try {
      const matchi = JSON.parse(localStorage.getItem("user"));
      const data = { email: matchi?.email };
      const respo = await axios.post(`${BAE_URL_API}/UserProfile`, data);
      setProfileData(respo?.data);
      setSeasons(respo?.data?.Seasons);
      setGetImages(respo?.data?.Images);
      setGetvideo(respo?.data?.Videos);
      setGetOffers(respo?.data?.Offers);
      setCountPosts((prev) => ({
        ...prev,
        imgCnt: respo?.data?.Images?.length,
        vdoCnt: respo?.data?.Videos?.length,
      }));
      const emails = JSON.parse(localStorage.getItem("user"));
      setUserexist(emails?.email);
      setIsAdmin(emails?.admin);
    } catch (error) {
      console.log(error);
    }
  };



  const getProfileData = async () => {

    try {
        const res = await axios.get(`${BAE_URL_API}/getProfileData`);
        setProfilesInfo(res?.data);
    } catch (error) {
        console.log(error);
    }
};

  return (
    <AppContext.Provider
      value={{
        actvieprofile,
        setActiveprofile,
        open,
        setOpen,
        editabledata,
        setEditableData,
        userexist,
        setUserexist,
        getUserProfile,
        profileDAta,
        setProfileData,
        seasons,
        setSeasons,
        countPosts,
        setCountPosts,
        getImages,
        getvideo,
        getoffers,
        isAdmin,
        preving ,setProving,
        profilesInfo, setProfilesInfo,
 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
