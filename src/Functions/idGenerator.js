let lastId = 0;

export const generateId = () => {
  lastId += 1;
  return lastId;
};

export { lastId };
