import type { PageServerLoad } from '../$types';
import * as fs from 'fs';

export const load: PageServerLoad = async () => {
	const test = fs.readFileSync(process.cwd() + '/components.json', 'utf-8');

	const writerGrowths = fs
		.readFileSync(process.cwd() + '/static/growth-writer.txt', 'utf-8')
		.split('\n');
	const editorGrowths = fs
		.readFileSync(process.cwd() + '/static/growth-editor.txt', 'utf-8')
		.split('\n');

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
