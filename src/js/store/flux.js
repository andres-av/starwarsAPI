import { useParams } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// cardsRow component States (store an array of all characters)
			people: [],
			location: [],
			// learnMorePeople component States (store the object of one specific person)
			person: {},
			// learnMoreLocation component States (store the object of one specific place)
			place: {},
			// favorites list
			favorites: [{name:"Press the heart button to add favorites" , url:""}],
		},
		actions: {
			// cardsRow component functions
			fetchPeople: () => {
				fetch("https://rickandmortyapi.com/api/character")
				.then((response) => response.json())
				.then(data => {setStore({people: data.results})
				})
			}, 
			fetchLocations: () => {
				fetch("https://rickandmortyapi.com/api/location")
				.then((response) => response.json())
				.then(data => {setStore({location: data.results})
				})
			},
			//learnMorePeople component functions
			fetchPerson: async (params) => {
				const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
				const data = await response.json();
				setStore({person: data})
				if(data){
					return true
				} else {
					return false
				}
			},
			//learnMorePeople component functions
			fetchPlace: async (params) => {
				const response = await fetch(`https://rickandmortyapi.com/api/location/${params.id}`)
				const data = await response.json()
				setStore({place: data})
				if(data){
					return true
				} else {
					return false
				}
			},
			// add favorite
			addFavorites: (newItem) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, newItem] })
			}
		}
	};
};

export default getState;
