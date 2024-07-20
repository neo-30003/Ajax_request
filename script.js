const getUrl = "db.json";
const sendUrl = "https://jsonplaceholder.typicode.com/posts";

const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const sendData = (url, data) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

getData(getUrl).then((data) => {
  sendData(sendUrl, data);
});
