import type { PageServerLoad } from './$types';
import { readFile } from '$lib/server/utils';
import introAsset from '$lib/static/texts/intro.txt';

export const load: PageServerLoad = async ({}) => {
	const intro = await readFile(introAsset);

	let wordCount = 0;

	intro.forEach((line: string) => {
		wordCount += line.split(/\w+/g).length;
	});

	return { intro, wordCount };
};
