import React, { useEffect, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import arrow from '../assets/img/Arrow.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BAE_URL_API, IMAGE_URL } from '../Config';
import { AppContext } from '../context/CreateContext';
import AddRecuitersModal from '../components/addRecruites/AddRecuitersModal';

const ShowArticle = () => {
  const { profileId, ArticleId } = useParams();
  const [Profiles, setProfile] = useState();
  const { isAdmin, profilesInfo } = useContext(AppContext);
  const [replacedTextElements, setReplacedTextElements] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    GetArticals();
  }, [profileId]);

  useEffect(() => {
    const text = Profiles?.desc;
    if (text) {
      const regex = /"(.*?)"/g;
      let match;
      const elements = [];
      let lastIndex = 0;

      while ((match = regex.exec(text)) !== null) {
        const name = match[1];
        const user = profilesInfo.find(
          user => user.name.toLowerCase().trim() === name.toLowerCase().trim()
        );

        if (user) { 
          elements.push(text.slice(lastIndex, match.index)); 
          elements.push(
             <div key={user._id} className='w-fit inline-block relative hoverEfct'>
              <div className='hoverginwork transition-opacity hidden gap-2 items-center 
              border p-3 rounded absolute bg-slate-100 z-10 top-[-80px] min-w-[250px] w-full left-0'>
                <img src={`${IMAGE_URL}/${user.image}`} alt="" className='w-[40px] h-[40px] rounded-full'/>
              <span>
                <h1>{user.name}</h1>
                <p>PG | {user.height} | {user.year}</p>
              </span>
              </div>
            <Link  className="underline text-black font-bold capitalize" to={`/ViewProfile/${user._id}`} > {name}</Link>
             </div>
          ); 
          lastIndex = regex.lastIndex;
        } else { 
          elements.push(text.slice(lastIndex, regex.lastIndex));
          lastIndex = regex.lastIndex;
        }
      } 
      elements.push(text.slice(lastIndex)); 
      setReplacedTextElements(elements);
    }
  }, [Profiles?.desc, profilesInfo]);

  const GetArticals = async () => {
    try {
      const data = { profileId: profileId, articleId: ArticleId };
      const response = await axios.post(`${BAE_URL_API}/ArticleProfile`, data);
      setProfile(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const RemovingArticle = async () => {
    try {
      const data = {
        title: Profiles.title,
        Id: Profiles._id,
        profileId: profileId,
      };
      await axios.post(`${BAE_URL_API}/RemovingArticle`, data);
      navigate(`/ViewProfile/${profileId}`);
      GetArticals();
    } catch (error) {
      console.log(error);
    }
  };

  const RemovingArticleUser = async Id => {
    try {
      const data = {
        articleId: Profiles._id,
        profileId: profileId,
        recruites: Id,
      };
      await axios.post(`${BAE_URL_API}/RemovingSignleUserFromArticle`, data);
      GetArticals();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <div className="playerprofile_title">
          <Link to={`/ViewProfile/${profileId}`}>
            <img src={arrow} alt="arrow" />
          </Link>
          <p className="capitalize">Article</p>
          <div className="mydiv"></div>
        </div>
        <section>
          <div className="my-5">
            <div>
              {isAdmin && (
                <button
                  className="bg-red-100 rounded-full px-3 py-2 mb-2"
                  onClick={RemovingArticle}
                >
                  Remove Article
                </button>
              )}
              <div className="w-full mb-5">
                <img
                  src={`${IMAGE_URL}/${Profiles?.title.slice(0, 5).trim()}/${Profiles?.banner}`}
                  alt="banner"
                  className="w-full max-h-[400px] rounded object-cover"
                />
              </div>
              <div className="mb-5">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl mb-2">Recruites</h1>
                  <AddRecuitersModal
                    profileId={profileId}
                    ArticleId={ArticleId}
                    GetArticals={GetArticals}
                  />
                </div>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  {Profiles?.Recruites?.map((item, i) => (
                    <div className="relative hoverover" key={i}>
                      {isAdmin && (
                        <div
                          className="BGremov w-[50px] left-2 top-2 h-[50px] flex 
                    items-center justify-center rounded-full text-center py-3 absolute"
                        >
                          <i
                            className="bi cursor-pointer text-white bi-trash3"
                            onClick={() => RemovingArticleUser(item._id)}
                          ></i>
                        </div>
                      )}
                      <Link to={`/ViewProfile/${item.playerId}`}>
                        <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-full">
                          <img
                            src={`${IMAGE_URL}/${item?.img}`}
                            alt="images"
                            className="w-[50px] h-[50px] rounded-full object-cover"
                          />
                          <div className="mr-3">
                            <p className="capitalize font-[600]">{item.name}</p>
                            <p className="text-black capitalize">
                              PG {item?.height} | {item?.year}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <h1 className="text-3xl capitalize mb-3">{Profiles?.title}</h1>
              <div className="text-[18px] text-gray-700">{replacedTextElements}</div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ShowArticle;
