import { saveAs } from "file-saver";

export const downloadImage = (url, title) => {
  saveAs(url, title);
};

export const currentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const changeDateFormat = (date) => {
  const dateArray = date.split("/");
  const year = dateArray[2];
  let month = dateArray[1];
  let day = dateArray[0];
  if (month.length === 1) {
    month = `0${month}`;
  }
  if (day.length === 1) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
};
