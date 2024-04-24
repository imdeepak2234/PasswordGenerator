export default function BgSelector({ setColor }) {
  return (
    <div className=" flex flex-wrap fixed bottom-12 justify-center inset-x-0 px-2">
      <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl py-3 px-3">
        <h1 className="text-1xl font-bold text-center">
          Select your background Colour :
        </h1>
        <button
          className=" outline-none text-white rounded-full px-2"
          style={{ backgroundColor: "olive" }}
          onClick={() => setColor("olive")}
        >
          Olive
        </button>
        <button
          className=" outline-none text-white rounded-full px-2"
          style={{ backgroundColor: "gray" }}
          onClick={() => setColor("gray")}
        >
          Gray
        </button>
        <button
          className=" outline-none text-white rounded-full px-2"
          style={{ backgroundColor: "aquamarine" }}
          onClick={() => setColor("aquamarine")}
        >
          Aqua
        </button>
        <button
          className=" outline-none text-white rounded-full px-2"
          style={{ backgroundColor: "silver" }}
          onClick={() => setColor("silver")}
        >
          Silver
        </button>{" "}
        <button
          className=" outline-none text-white rounded-full px-2"
          style={{ backgroundColor: "teal" }}
          onClick={() => setColor("teal")}
        >
          Teal
        </button>
        <button
          className=" outline-none text-white rounded-full px-2"
          style={{ backgroundColor: "coral" }}
          onClick={() => setColor("coral")}
        >
          Coral
        </button>
        <button
          className=" outline-none text-white rounded-full px-2"
          style={{ backgroundColor: "lightgreen" }}
          onClick={() => setColor("lightgreen")}
        >
          Lightgreen
        </button>
        <button
          className=" outline-none text-white rounded-full px-2"
          style={{ backgroundColor: "sienna" }}
          onClick={() => setColor("sienna")}
        >
          Sienna
        </button>
      </div>
    </div>
  );
}
