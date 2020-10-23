const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			pageUI: {
				NAVBAR: {
					classname: "Test",
					height: "0"
				},
				FOOTER: {
					classname: "Test",
					height: "0"
				},
				OFFSET: "0"
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
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
			returnComponentHeight: componentName => {
				const tmpStore = getStore();
				for (var item in tmpStore) {
					if (tmpStore.hasOwnProperty(item)) {
						if ((item = "pageUI")) {
							var currentComponent = tmpStore[item];
							//console.log(tmpStore[item]);
							for (var key in currentComponent) {
								//console.log("key = " + key + " currentComponent = " + currentComponent);
								if ((key = componentName)) {
									return tmpStore[item][key].height;
								}
							}
						}
					}
				}
			},
			updateComponentHeight: (componentName, componentHeight) => {
				const tmpStore = getStore();
				for (var item in tmpStore) {
					if (tmpStore.hasOwnProperty(item)) {
						if ((item = "pageUI")) {
							var currentComponent = tmpStore[item];
							//console.log(tmpStore[item]);
							for (var key in currentComponent) {
								//console.log("key = " + key + " currentComponent = " + currentComponent);
								if ((key = componentName)) {
									//console.dir(currentComponent);
									//console.log(tmpStore[item][key]);
									tmpStore[item][key].height = componentHeight;
									//console.log(tmpStore[item][key].height);
									//console.log(tmpStore);
									setStore(tmpStore);
								}
							}
						}
					}
				}
			},
			returnOffset: () => {
				var currentComponent = "OFFSET";
				const tmpStore = getStore();
				for (var item in tmpStore) {
					if (tmpStore.hasOwnProperty(item)) {
						if ((item = "pageUI")) {
							var currentComponent = tmpStore[item];

							return tmpStore[item]["OFFSET"];
						}
					}
				}
			},
			applyOffset: offset => {
				var currentComponent = "OFFSET";
				const tmpStore = getStore();
				for (var item in tmpStore) {
					if (tmpStore.hasOwnProperty(item)) {
						if ((item = "pageUI")) {
							var currentComponent = tmpStore[item];

							tmpStore[item]["OFFSET"] = offset;
							console.log(offset);

							setStore(tmpStore);
						}
					}
				}
			}
		}
	};
};

export default getState;
