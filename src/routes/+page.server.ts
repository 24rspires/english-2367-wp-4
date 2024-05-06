import type { PageServerLoad } from './$types';
import introAsset from '$lib/static/intro.txt';
import { read } from '$app/server';

export const load: PageServerLoad = async ({}) => {
	const introData = read(introAsset);

	const intro = (await introData.text()).split('\n');

	let wordCount = 0;

	intro.forEach((line: string) => {
		wordCount += line.split(/\w+/g).length;
	});

	return { intro, wordCount };
};
