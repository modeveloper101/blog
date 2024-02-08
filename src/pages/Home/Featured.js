import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center overflow-hidden w-full h-auto bg-[#010101] text-[#E6E4E0] py-[3rem] px-5 ">
      <div className=" flex flex-col">
        <div className="flex flex-col">
          {/* <span className="text-sm bg-[#6396E5] text-[#010101] py-1 px-3 rounded-full capitalize w-fit h-fit font-[500]">
            Stay tuned
          </span> */}
          <h2 className="font-[500] text-6xl uppercase">
            Stay
            <br />
            tuned
          </h2>
        </div>
        {/* <Link to={`/`} className="underline text-base">
           by Ervin Howell
        </Link> */}
      </div>
      <div
        className="w-full h-[480px] flex flex-col justify-between relative my-6"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/blog4.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          filter: "grayscale(20%)",
        }}
      ></div>
        <Link to={`/`} className="underline text-base">
           More by Ervin
        </Link>
    </section>
  );
};

export default Featured;
