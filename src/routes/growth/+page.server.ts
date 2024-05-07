import type { PageServerLoad } from '../$types';
import { readFile } from '$lib/utils';
import writerAsset from '$lib/static/texts/growths/growth-writer.txt';
import editorAsset from '$lib/static/texts/growths/growth-editor.txt';

export const load: PageServerLoad = async () => {
	const writerGrowths = await readFile(writerAsset);
	const editorGrowths = await readFile(editorAsset);

	let writerWordCount = 0;
	let editorWordCount = 0;

	writerGrowths.forEach((line) => {
		writerWordCount += line.split(/\w+/).length;
	});

	editorGrowths.forEach((line) => {
		editorWordCount += line.split(/\w+/).length;
	});

	return { writerGrowths, editorGrowths, writerWordCount, editorWordCount };
};
