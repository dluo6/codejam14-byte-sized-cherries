import { Link } from "react-router-dom";

const PageRedirectButton = ({ link, text }) => {
  return (
    <>
      <Link to={link}>
        <button className="font-mclaren font-semi-bold text-cherry text-xl rounded-full bg-white px-10 py-3 hover:drop-shadow-md hover:text-white hover:bg-cherry w-full ">
          {text}
        </button>
      </Link>
    </>
  );
};

export default PageRedirectButton;
