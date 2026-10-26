import { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const DataContext = createContext();

function DataProvider({ children }) {
	const [data, setData] = useState([]);

	const baseURL = 'https://randomuser.me/api/?results=';

	let tenURL = baseURL + '10';
	let oneURL = baseURL + '1';

	useEffect(() => {
		if (data.length == 0) {
			getList();
		} else {
			// renderData();
		}
	}, []);

	async function getList() {
		const userList = await getData(tenURL);
		setData(userList);
	}

	async function getUser() {
		const newUser = await getData(oneURL);
		setData([...newUser, ...data]);
	}

	async function getData(url) {
		try {
			const resp = await fetch(url);
			if (!resp.ok) throw new Error(resp.statusText);
			const jsonObj = await resp.json();
			const user = jsonObj.results.map(({ login, name, picture }) => {
				return {
					uuid: login.uuid,
					firstName: name.first,
					lastName: name.last,
					avatar: picture.thumbnail,
				};
			});
			console.log(user);
			return user;
		} catch (err) {}
	}

	return (
		<DataContext value={{ data, setData, getList, getUser }}>
			{children}
		</DataContext>
	);
}

function useData() {
	return useContext(DataContext);
}

export { DataProvider, useData };
