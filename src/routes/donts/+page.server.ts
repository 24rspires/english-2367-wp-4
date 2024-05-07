import type { PageServerLoad } from '../$types';
import dosAsset from '$lib/static/texts/do(nts)/dos.txt';
import dontsAsset from '$lib/static/texts/do(nts)/donts.txt';
import { readFile } from '$lib/server/utils';

export const load: PageServerLoad = async () => {
	const dos = await readFile(dosAsset);
	const donts = await readFile(dontsAsset);

	const dosCount = dos.map((line) => line.split(/\w+/).length).reduce((a, b) => a + b);
	const dontsCount = donts.map((line) => line.split(/\w+/).length).reduce((a, b) => a + b);

	return { dos, donts, dosCount, dontsCount };
};
