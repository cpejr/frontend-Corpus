import {
  Container,
  LogoHeader,
  Header,
  Select,
  Selected,
  LanguageSelector,
} from "./Styles";
import { logo } from "../../../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "../../../../stores/auth";
import HamburguerMenu from "./HambuguerMenu";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalLanguage } from "../../../../stores/globalLanguage";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { flagEN, flagES, flagPT, flagGE } from "../../../../assets";
import { TranslateText } from "./translations";
import { useLogout } from "../../../../hooks/query/session";
import { toast } from "react-toastify";
import LogoutButton from "../../../common/LogoutButton/Logoutbutton";

export default function Head() {
  const [collapse, setCollapse] = useState(false);

  const { globalLanguage, setGlobalLanguage } = useGlobalLanguage();
  const availableLanguages = [
    { code: "PT", flag: flagPT },
    { code: "EN", flag: flagEN },
    { code: "ES", flag: flagES },
    { code: "GE", flag: flagGE },
  ];

  const isAdmin = useAuthStore((state) => state?.auth?.user?.type);
  const navigate = useNavigate();
  const location = useLocation();

  const translations = TranslateText({ globalLanguage });

  const items = [

    {
      label: translations.headerText3,
      url: "/video",
    },


    ...(isAdmin === "admin"
      ? [
          {
            label: "Administrador",
            items: [
              {
                label: translations.headerText2,
                url: "/manage-videos",
              },
              {
                separator: true,
              },
              {
                label: translations.headerText5,
                url: "/manage-users",
              },
            ],
          },
        ]
      : []),
  ];

  const { mutate: logout } = useLogout({
    onSuccess: () => {
      toast.success(translations.logoutSuccess);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  const execLogout = () => {
    logout();
  };

  return (
    <Container>
      {location.pathname !== "/" ? (
        <LogoHeader src={logo} onClick={() => navigate("/")}></LogoHeader>
      ) : null}
      <Header model={items} />
      <Select>
        <Selected onClick={() => setCollapse((prev) => !prev)}>
          <img
            style={{ height: "40px" }}
            src={
              availableLanguages.find((lang) => lang.code === globalLanguage)
                ?.flag
            }
            alt={globalLanguage}
          />
          <IoIosArrowDown />
        </Selected>
        <LanguageSelector collapse={+collapse}>
          {availableLanguages.map((lang) => (
            <button
              type="button"
              key={lang.code}
              onClick={() => {
                setGlobalLanguage(lang.code);
                setCollapse((prev) => !prev);
              }}
              style={{ display: collapse ? "flex" : "none" }}
            >
              <img
                src={lang.flag}
                alt={lang.code}
                style={{ height: "40px", marginRight: "8px" }}
              />
            </button>
          ))}
        </LanguageSelector>
      </Select>
      <LogoutButton onClick={execLogout} />
      <HamburguerMenu />
    </Container>
  );
}
