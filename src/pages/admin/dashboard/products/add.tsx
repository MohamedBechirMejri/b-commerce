const Add = () => {
  return (
    <div className="grid h-full grid-cols-6">
      <div className="col-span-2 h-[24rem] border"></div>
      <div className="col-span-4 grid h-[24rem] grid-cols-2 p-4 gap-4">
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
      </div>
    </div>
  );
};

export default Add;
