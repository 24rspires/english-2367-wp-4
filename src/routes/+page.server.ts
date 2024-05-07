import type { PageServerLoad } from './$types';
import introAsset from '$lib/static/intro.txt';
import { readFile } from '$lib/utils';

export const load: PageServerLoad = async ({}) => {
	const intro = await readFile(introAsset);

	let wordCount = 0;

	intro.forEach((line: string) => {
		wordCount += line.split(/\w+/g).length;
	});

	return { intro, wordCount };
};
