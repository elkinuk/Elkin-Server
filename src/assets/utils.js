import axios from "axios";

const fillFields = (mainObject, ...args) => {
  const fillerFunction = (mainObject, defaultObject, transformPicUrl) => {
    const newObject = { ...mainObject };
    for (let key in defaultObject) {
      if (!newObject[key]) newObject[key] = defaultObject[key];
      else if (transformPicUrl) {
        if (key === "pic")
          newObject.pic = newObject.pic ? getImg(newObject.pic) : newObject.pic;
        if (key === "picBlur")
          newObject.picBlur = newObject.picBlur
            ? getImg(newObject.picBlur)
            : newObject.picBlur;
      }
    }
    return newObject;
  };

  if (Array.isArray(mainObject)) {
    return mainObject.map(el => fillerFunction(el, ...args));
  }
  return fillerFunction(mainObject, ...args);
};

const getImg = name => {
  return '/img/' + name;
};

const getData = async (dataUrl, defaultName, transformPicUrl) => {
  const data = (await axios.get(dataUrl)).data;

  if (defaultName) {
    const defaults = (await axios.get("/api/defaults")).data;
    const defaultData = defaults.find(el => el.id === defaultName).data;

    return fillFields(data, defaultData, transformPicUrl);
  }
  return data;
};

export { fillFields, getImg, getData };
