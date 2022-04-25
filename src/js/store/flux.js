import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      people: [],
      planets: [],
      searchBar: [],
      userInput: "",

      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getData: (entity) => {
        fetch(`https://swapi.dev/api/${entity}`)
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            // Read the response as json.
            return response.json();
          })
          .then((responseAsJson) => {
            // Do stuff with the JSONified response

            setStore({ [entity]: responseAsJson.results });
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },

      addToFavorites: (favorite, index) => {
        const newFavorites = getStore().favorites;

        newFavorites.push(favorite);

        setStore({ favorites: newFavorites });
      },
      preventRepeat: (favorite) => {
        const filteredFavorites = getStore().favorites.filter((element) => {
          return element === favorite;
        });
        console.log(filteredFavorites.length);
        if (filteredFavorites.length > 1) {
          getStore().favorites.pop();
        }
      },

      getType: (favorite) => {
        if (typeof favorite.gender == "string") {
          favorite.entity = "character";
        } else {
          favorite.entity = "planet";
        }
        console.log(typeof favorite.gender);
        console.log(favorite.entity);
       
      },

      getTypeSearch: (search) => {
        
        if (typeof getStore().searchBar.gender == "string") {
          getStore().searchBar.gender = "character";
        } else {
          getStore().searchBar.gender = "planet";
        }
        console.log(typeof getStore().searchBar.gender);
        console.log(getStore().searchBar.gender);
      },


      typeFunction: (targetValue) => {
        setStore({ userInput: targetValue });
        console.log(getStore().userInput);
        let filterTargetValue = getStore().people.filter((element) => {
          return element.name.toLowerCase().includes(targetValue);
        });
        let filterTargetValue2 = getStore().planets.filter((element) => {
          return element.name.toLowerCase().includes(targetValue);
        });
        setStore({ searchBar: filterTargetValue.concat(filterTargetValue2) });
        console.log(getStore().searchBar);
      },

      clearSearch: (e) => {
        setStore({ searchBar: [] });
        setStore({ userInput: "" });
      },
      clearSearch0: (e) => {
        if(getStore().searchBar.length==0){
        setStore({ searchBar: [] });
        ;}
       
      },

      removeFavorite: (favorite, index) => {
        const filteredFavorites = getStore().favorites.filter((favorite, i) => {
          return index != i;
        });
        setStore({ favorites: filteredFavorites });
      },

      removeRepeat: (favorite, index) => {
        const findFavorite = getStore().favorites.find((element) => {
          return element == favorite;
        });
        if (!findFavorite) console.log(findFavorite);
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
