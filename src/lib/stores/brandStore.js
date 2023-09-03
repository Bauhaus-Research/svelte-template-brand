// readable store for brand data
import { readable } from 'svelte/store';

export let brandName = 'Bauhaus Research';
export let email = 'ryan@bauhausresearch.com';
export let context = `Company: ${brandName}`;
export let questions = [
	{
		id: 1,
		question: 'What is your favorite color?',
		answers: [
			{
				id: 1,
				answer: 'Blue',
				votes: 0
			},
			{
				id: 2,
				answer: 'Red',
				votes: 0
			}
		]
	},
	{
		id: 1,
		question: 'What is your favorite color?',
		answers: [
			{
				id: 1,
				answer: 'Blue',
				votes: 0
			},
			{
				id: 2,
				answer: 'Red',
				votes: 0
			}
		]
	},
	{
		id: 1,
		question: 'What is your favorite color?',
		answers: [
			{
				id: 1,
				answer: 'Blue',
				votes: 0
			},
			{
				id: 2,
				answer: 'Red',
				votes: 0
			}
		]
	},
	{
		id: 1,
		question: 'What is your favorite color?',
		answers: [
			{
				id: 1,
				answer: 'Blue',
				votes: 0
			},
			{
				id: 2,
				answer: 'Red',
				votes: 0
			}
		]
	}
];
export let aboutUs = [
	{
		title: 'Puerto Rican Cooking',
		subtitle: 'Loremipsum',
		icon: 'pr.svg'
	},
	{
		title: 'Fresh Ingredients',
		subtitle: 'Loremipsum',
		icon: 'lettuce.svg'
	},
	{
		title: 'Community',
		subtitle: 'Well regarded among the community.',
		icon: 'community.svg'
	}
];
