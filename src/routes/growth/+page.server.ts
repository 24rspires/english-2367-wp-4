import type { PageServerLoad } from '../$types';
import { read } from '$app/server';
import writerAsset from '$lib/static/growth-writer.txt';
import editorAsset from '$lib/static/growth-editor.txt';

export const load: PageServerLoad = async () => {
	const writerGrowthsData = read(writerAsset);
	const editorGrowthsData = read(editorAsset);

	const writerGrowths = (await writerGrowthsData.text()).split('\n');
	const editorGrowths = (await editorGrowthsData.text()).split('\n');

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
