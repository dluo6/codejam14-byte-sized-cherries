import PageRedirectButton from "./PageRedirectButton";
import cherry from "../../images/cherry.png";
import "./../../index.css";

const Menu = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen bg-cream">
      <div className="bg-cherry h-full flex flex-col place-items-center place-content-evenly p-10">
        <h1 className="text-white font-knewave text-6xl">CherryCard</h1>
        <p className="font-slackside-one text-white text-xl w-1/2">
          Create your own card board today with just a few clicks!
        </p>
        <img
          src={cherry}
          alt="Cherry"
          width={300}
          height={300}
          className="self-auto	"
        />
      </div>
      <div className="flex flex-col self-end p-5">
        <PageRedirectButton link="/new-board" text="Create new board" />
        <PageRedirectButton link="/boards" text="My boards" />
      </div>
    </div>
  );
};

export default Menu;
