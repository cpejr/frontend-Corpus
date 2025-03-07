import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hamburguer } from "../Header/Styles";
import useAuthStore from "../../../../stores/auth";
import { TranslateText } from "./translations";
import { useGlobalLanguage } from "../../../../stores/globalLanguage";
import { MenuOutlined } from "@ant-design/icons";
import { breakpoints } from "../../../../styles/stylesVariables"; // Certifique-se de importar corretamente

export default function HamburguerMenu() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < parseInt(breakpoints.tablet)
  );
  const isAdmin = useAuthStore((state) => state?.auth?.user?.type);
  const navigate = useNavigate();
  function getItem(label, key, icon, children, type, style) {
    return {
      key,
      icon,
      children,
      label,
      type,
      style,
    };
  }
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const items = [
    getItem(
      "",
      "hamburger",
      <MenuOutlined style={{ fontSize: "25px", color: "white" }} />,
      [
        getItem(translations.home, "/"),
        getItem(translations.headerText3, "/video"),

        ...(isAdmin === "admin"
          ? [
              getItem(translations.headerText2, "/manage-videos"),
              getItem(translations.headerText5, "/manage-users"),
            ]
          : []),
      ]
    ),
  ];

  function onClick(key) {
    if (key && key !== "login" && key !== "/story") {
      navigate(key);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < parseInt(breakpoints.tablet));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) return null;
  return (
    <Hamburguer
      onClick={(e) => onClick(e.key)}
      mode="horizontal"
      items={items}
      triggerSubMenuAction="click"
    />
  );
}
