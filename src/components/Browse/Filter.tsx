const Filter = () => {
  const category = {
    tagCollections: [
      {
        name: "sesdredry",
        tags: [
          {
            name: "setsetse",
          },
          {
            name: "tesetst",
          },
        ],
      },
      {
        name: "tsets",
        tags: [
          {
            name: "test",
          },
        ],
      },
    ],
  };

  return (
    <div className="p-4 py-8 ">
      <h1 className="text-2xl">Filter</h1>
      <ul>
        {category.tagCollections.map((tagCollection) => (
          <li key={tagCollection.name}>
            <h2>{tagCollection.name}</h2>
            <ul>
              {tagCollection.tags.map((tag) => (
                <li key={tag.name}>
                  <button>{tag.name}</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
