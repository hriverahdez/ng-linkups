export const toEntities = (array: any[], initial) => {
  return array.reduce((entities, item) => {
    return {
      ...entities,
      [item._id]: item
    };
  }, initial);
};
