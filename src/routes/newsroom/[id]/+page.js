import { pressRel } from '$lib/stores/brandStore';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	// Find the press release object that matches the route parameter
	const matchingPressRel = pressRel.find((release) => release.slug === params.id);

	if (matchingPressRel) {
		return {
			title: matchingPressRel.title,
			content: matchingPressRel.content,
			subtitle: matchingPressRel.subtitle,
			slug: matchingPressRel.slug,
			date: matchingPressRel.date,
			location: matchingPressRel.location
			// Include other properties as needed
		};
	}

	throw error(404, 'Not found');
}
