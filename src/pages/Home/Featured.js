import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section className="flex flex-col  overflow-hidden w-full h-auto py-[3rem] px-5">
      <div className=" flex items-end justify-between mb-0">
        <div className="flex flex-col">
          {/* <span className="text-sm bg-[#6396E5] text-[#010101] py-1 px-2 rounded-full capitalize w-fit h-fit font-[500]">
           Coming in 2024 
          </span> */}
          {/* <h2 className=" text-4xl capitalize">
            Stay <br/>tuned.
          </h2> */}
        </div>
        <Link to={`/`} className="underline text-base">
           by Ervin Howell
        </Link>
      </div>
      <div
        className="w-full h-[480px] flex flex-col justify-between relative" 
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/blog13.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "grayscale(20%)",
        }}
      ></div>
        {/* <Link to={`/`} className="underline text-lg">
           More by Ervin
        </Link> */}
    </section>
  );
};

export default Featured;
