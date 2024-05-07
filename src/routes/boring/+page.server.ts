import type { PageServerLoad } from '../$types';
import { readFile } from '$lib/server/utils';
import merriamAsset from '$lib/static/texts/works/merriam.txt';
import kingAsset from '$lib/static/texts/works/king.txt';
import vladAsset from '$lib/static/texts/works/vlad.txt';
import tempAsset from '$lib/static/texts/works/temp.txt';
import memoAsset from '$lib/static/texts/memo.txt';

export const load: PageServerLoad = async () => {
	const assets = [merriamAsset, kingAsset, vladAsset, tempAsset];

	const worksCited = await Promise.all(assets.map(async (asset) => await readFile(asset)));

	const memo = await readFile(memoAsset);

	return { worksCited, memo };
};
