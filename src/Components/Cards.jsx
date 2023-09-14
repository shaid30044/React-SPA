import { FaFacebook, FaTwitter } from "react-icons/fa";

const Cards = ({ actor, handleSelectActor }) => {
  const { id, image, name, role, salary, age, country, fbUrl, twitter } = actor;

  return (
    <div className="border-2 border-[#EC1D24] rounded-xl backdrop-blur-[3px] backdrop-brightness-75 p-6 pb-8 mb-6">
      <img className="w-28 h-28 rounded-full m-auto" src={image} alt="" />
      <div>
        <h3 className="text-2xl font-bold text-[#ffffff] pt-6">{name}</h3>
        <p className="text- font-semibold text-[#ffffffbb]">{role}</p>
      </div>
      <div className="text-lg font-medium text-[#e1e1e1] py-4 space-y-1">
        <p>Country: {country}</p>
        <p>Age: {age} years</p>
        <p>Salary: ${salary}</p>
      </div>
      <div className="flex justify-center items-center gap-6">
        <button className="btn bg-transparent hover:bg-transparent border-0 text-[#EC1D24] hover:text-[#ab1117] text-2xl p-0">
          <a href={fbUrl}>
            <FaFacebook></FaFacebook>
          </a>
        </button>
        <button className="btn bg-transparent hover:bg-transparent border-0 text-[#EC1D24] hover:text-[#ab1117] text-2xl p-0">
          <a href={twitter}>
            <FaTwitter></FaTwitter>
          </a>
        </button>
      </div>
      <div className="flex justify-center pt-6 -mb-14">
        <button
          onClick={() => handleSelectActor(actor, id)}
          className="btn btn-ghost bg-[#EC1D24] hover:bg-[#ab1117] border-2 normal-case text-xl"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Cards;
