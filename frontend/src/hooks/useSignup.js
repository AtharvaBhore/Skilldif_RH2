import {useState} from "react"
import {useAuthContext} from "./useAuthContext"
import {baseURL} from "../url"

export const useSignup = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(null)
	const {dispatch} = useAuthContext()

	const signup = async (email, password) => {
		setIsLoading(true)
		setError(null)
		console.log("gg" + email, password)

		const response = await fetch(`${baseURL}/api/user/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({email, password}),
		})

		// const response = await fetch(`${baseURL}/api/user/login`, {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({ email, password }),
		// });

		const data = await response.json()
		console.log(data)

		if (!response.ok) {
			setIsLoading(false)
			setError(data.error)
			console.log(data.error)
		}

		if (response.ok) {
			setIsLoading(false)
			setError(null)
			localStorage.setItem("user", JSON.stringify(data))

			dispatch({type: "LOGIN", payload: data})
		}

		// if (!response.ok) {
		// 	setIsLoading(false);
		// 	setError(data.error);
		// }

		// if (response.ok) {
		// 	setIsLoading(false);
		// 	setError(null);
		// 	localStorage.setItem("user", JSON.stringify(data));

		// 	dispatch({ type: "LOGIN", payload: data });
		// }
	}
	return {error, isLoading, signup}
}
