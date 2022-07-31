const validatePropertyType = (validation: Record<string, string>, source) => {
  const sourceKeys = Object.keys(source);
  let isAnyPropertyInvalid = false;

  sourceKeys.forEach((key) => {
    const sourceKeyType = typeof source[key];
    const expectedKeyType = validation[key];
    if (expectedKeyType !== sourceKeyType) {
      console.log(expectedKeyType, sourceKeyType);
      isAnyPropertyInvalid = true;
    }
  });
  if (isAnyPropertyInvalid) {
    throw new Error("The object has some invalid property type");
  }
};

export { validatePropertyType };
