import type { PageServerLoad } from './$types';
import * as fs from 'fs';

export const load: PageServerLoad = async ({}) => {
	const intro = fs.readFileSync('./src/lib/static/intro.txt', 'utf-8').split('\n');

	let wordCount = 0;

	intro.forEach((line: string) => {
		wordCount += line.split(/\w+/g).length;
	});

	return { intro, wordCount };
};
