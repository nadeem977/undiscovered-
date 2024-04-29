import { createContext, useEffect, useState } from "react";
import { BAE_URL_API } from "../Config";
import axios from "axios";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {


  const [profilesInfo, setProfilesInfo] = useState([]);
  const [actvieprofile ,setActiveprofile] = useState(null)
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getProfileData();
    findProfile()
  }, []);




  const getProfileData = async () => {
    try {
      const res = await axios.get(`${BAE_URL_API}/getProfileData`);
      setProfilesInfo(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const findProfile = () => {

    const matchingemail = JSON.parse(localStorage.getItem("user"))
    if (matchingemail && profilesInfo) {
        for (let i = 0; i < profilesInfo.length; i++) {
            const matchprofile = profilesInfo[i]
            if (matchprofile.email === matchingemail.email) {
                console.log(matchprofile)
            }
            break
        }
    }
}

 
 

  return (
    <AppContext.Provider
      value={{
        profilesInfo,
        actvieprofile ,setActiveprofile,
        open, setOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
