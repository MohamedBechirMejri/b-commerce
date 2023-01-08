const generatePrismaConnects = (ids: string | string[] | undefined) => {
  if (!ids) return undefined;

  if (typeof ids !== "string")
    return ids.length ? { connect: ids.map((id) => ({ id })) } : undefined;
  else return { connect: { id: ids } };
};

export default generatePrismaConnects;
