import type { PageServerLoad } from '../$types';
import { read } from '$app/server';
import oneAsset from '$lib/static/texts/experts/one.txt';
import twoAsset from '$lib/static/texts/experts/two.txt';
import threeAsset from '$lib/static/texts/experts/three.txt';
import fourAsset from '$lib/static/texts/experts/four.txt';
import fiveAsset from '$lib/static/texts/experts/five.txt';
import sixAsset from '$lib/static/texts/experts/six.txt';

export const load: PageServerLoad = async () => {
	const assets = [oneAsset, twoAsset, threeAsset, fourAsset, fiveAsset, sixAsset];

	const quotes = await Promise.all(
		assets.map(async (asset) => {
			const data = read(asset);

			return await data.text();
		})
	);

	const wordCounts = quotes.map((para) => para.split(/\w+/).length);

	return { quotes, wordCounts };
};
