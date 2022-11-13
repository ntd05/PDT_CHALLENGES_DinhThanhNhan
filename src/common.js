const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTkzNDZlYzFhMWQwNzZmNmQ1NDhiYWMyYWY1ZGUxMCIsInN1YiI6IjYzNmY0OGE3MTY4NGY3MDBjNGVhYmZkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C1ZNy9Y-MCPQGvGtFvnRX2sze9K9IVpHOo7B62gviCk";
const url =
  "https://api.themoviedb.org/4/list/1?api_key=699346ec1a1d076f6d548bac2af5de10";

export const getData = async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return response.json();
};
export var dataFetch;
const getDataResults = async()=> {
  let dataResults = await getData();
  dataFetch = dataResults.results;
}
getDataResults();
console.log(dataFetch)

export const Sort = (keySort) => {
  if (keySort === "title" || keySort === "overview") {
    dataFetch.sort(function (a, b) {
      if (a[keySort] < b[keySort]) {
        return -1;
      }
      if (a[keySort] > b[keySort]) {
        return 1;
      }
      return 0;
    });
  }
  if (
    keySort === "popularity" ||
    keySort === "vote_average" ||
    keySort === "vote_count"
  ) {
    dataFetch.sort(function (a, b) {
      return a[keySort] - b[keySort];
    });
  }
  if (keySort === "release_date") {
    dataFetch.sort(function (a, b) {
      return new Date(a[keySort]) - new Date(b[keySort]);
    });
  }
};

export var dataSearched;
export const Search = (valueSearch, keySearch) => {
  if (keySearch === "title" || keySearch === "overview") {
    dataSearched = dataFetch.filter((item) =>
      item[keySearch].includes(valueSearch)
    );
  }
  if (
    keySearch === "popularity" ||
    keySearch === "vote_average" ||
    keySearch === "vote_count"
  ) {
    dataSearched = dataFetch.filter(
      (item) => Math.floor(item[keySearch]) === +valueSearch
    );
  }
  if (keySearch === "release_date") {
    dataSearched = dataFetch;
  }
};
