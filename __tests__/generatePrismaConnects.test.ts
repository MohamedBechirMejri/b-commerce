import generatePrismaConnects from "../src/lib/generatePrismaConnects";

test("returns undefined when undefined is passed in", () => {
  expect(generatePrismaConnects(undefined)).toBe(undefined);
});

test("returns undefined when an empty string is passed in", () => {
  expect(generatePrismaConnects("")).toBe(undefined);
});

test("returns undefined when an empty array is passed in", () => {
  expect(generatePrismaConnects([])).toBe(undefined);
});

test("returns { connect: { id: @string } } when @string is passed in", () => {
  expect(generatePrismaConnects("1")).toEqual({ connect: { id: "1" } });
});

test("returns { connect: [{ id: @string1 }, { id: @string2 }] } when [@string1, @string2] is passed in", () => {
  expect(generatePrismaConnects(["1", "2"])).toEqual({
    connect: [{ id: "1" }, { id: "2" }],
  });
});
