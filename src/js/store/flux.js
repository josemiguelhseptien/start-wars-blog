const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      people: [],
      planets: [],
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
		for(values of newFavorites){
			console.log(values)
		}
		console.log(favorite)
		console.log(newFavorites)
      },


      removeFavorite: (favorite, index) => {
        const filteredFavorites = getStore().favorites.filter((favorite, i) => {
          return index != i;
        });
        setStore({ favorites: filteredFavorites });
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
