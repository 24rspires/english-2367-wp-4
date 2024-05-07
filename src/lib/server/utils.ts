import { read } from '$app/server';

export const readFile = async (fileAsset: string): Promise<string[]> => {
	const fileData = read(fileAsset);

	return (await fileData.text()).split('\n');
};
