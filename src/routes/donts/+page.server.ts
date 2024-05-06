import type { PageServerLoad } from '../$types';
import { read } from '$app/server';
import dosAsset from '$lib/static/dos.txt';
import dontsAsset from '$lib/static/donts.txt';

export const load: PageServerLoad = async () => {
	const dosData = read(dosAsset);
	const dontsData = read(dontsAsset);

	const dos: string[] = (await dosData.text()).split('\n');
	const donts: string[] = (await dontsData.text()).split('\n');

	const dosCount = dos.map((line) => line.split(/\w+/).length).reduce((a, b) => a + b);
	const dontsCount = donts.map((line) => line.split(/\w+/).length).reduce((a, b) => a + b);

	return { dos, donts, dosCount, dontsCount };
};
