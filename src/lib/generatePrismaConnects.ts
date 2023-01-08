const generatePrismaConnects = (ids: string | string[] | undefined) => {
  if (!ids) return ids;

  if (typeof ids !== "string") return { connect: ids.map((id) => ({ id })) };
  else return { connect: { id: ids } };
};

export default generatePrismaConnects;
