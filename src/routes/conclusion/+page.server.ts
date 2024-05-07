import type { PageServerLoad } from '../$types';
import { readFile } from '$lib/server/utils';
import conclusionAsset from '$lib/static/texts/conclusion.txt';

export const load: PageServerLoad = async () => {
	const conclusion = await readFile(conclusionAsset);

	const wordCount = (await conclusion)
		.map((line) => line.split(/\w+/).length)
		.reduce((x, y) => x + y);

	return { conclusion, wordCount };
};
