import { Link } from "react-router-dom";

const UsersSection = () => {
  return (
    <section className="flex flex-col overflow-hidden w-full h-[100vh] bg-[#010101]  text-[#E6E4E0] py-[3rem] px-5">
      <div className="pb-6 flex items-end justify-between">
        <div className="flex flex-col gap-y-2">
          {/* <span className="text-sm bg-[#6396E5] text-[#010101] py-1 px-3 rounded-full capitalize w-fit h-fit font-[500]">
            Stay tuned
          </span> */}
          <h2 className="font-[400] text-6xl uppercase">
            Stay
            <br />
            Tuned
          </h2>
        </div>
        <Link to={`/`} className="underline text-base">
           by Ervin Howell
        </Link>
      </div>
      <div
        className="w-full h-full flex flex-col justify-between relative "
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/blog4.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "grayscale(20%)",
        }}
      ></div>
    </section>
  );
};

export default UsersSection;
