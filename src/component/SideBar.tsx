import React, { FC, useContext, useEffect } from "react";
import userContext from "../context/userContext";

interface IProps {
  navLinks: Array<string>;
}

const SideBar: FC<IProps> = ({ navLinks }) => {
  const { selectedPage, setSelectedTab } = useContext(userContext);

  useEffect(() => {
    if (navLinks?.length > 0) {
      setSelectedTab(navLinks[0]);
    }
  }, [navLinks]);

  return (
    <aside className="sideBar">
      <nav>
        <div className={"sideBarHeading"}>
          <h2>Doc Reader</h2>
        </div>
        <ul>
          {navLinks.map((title, key) => (
            <li
              className={`sidebarItem ${
                selectedPage === title ? "active" : ""
              }`}
              key={key}
              onClick={() => {
                setSelectedTab(title);
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
export default SideBar;
