import { useEffect, useState } from "react";
import useUser from "./useUser";

function useLibrary<T = unknown>(
	entity: "song" | "playlist" | "album" | "artist",
) {
	const [data, setData] = useState<T>();
	const [error, setError] = useState<Error>();
	const [isLoading, setIsLoading] = useState<boolean>();

	const token = useUser((s) => s.token);

	const fetching = async () => {
		const response = await fetch(`http://localhost:3000/api/user/${entity}`, {
			method: "get",
			headers: { Authorization: `Auth ${token}` },
		});

		if (!response.ok) return [];

		return await response.json();
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setIsLoading(true);
		fetching()
			.then((data) => setData(data))
			.catch((error) => setError(error))
			.finally(() => setIsLoading(false));
	}, []);

	return { data, error, isLoading };
}

export default useLibrary;
