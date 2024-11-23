import { Link } from "react-router-dom";

const PageRedirectButton = ({ link, text }) => {
  return (
    <>
      <Link to={link}>
        <button className="font-mclaren text-cherry text-lg rounded-full bg-white px-10 py-3 hover:outline-coral w-full outline outline-white">
          {text}
        </button>
      </Link>
    </>
  );
};

export default PageRedirectButton;
