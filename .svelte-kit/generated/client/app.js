export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/descobrir": [4,[2]],
		"/descobrir/colaborar": [5,[2]],
		"/descobrir/colaborar/ranking": [6,[2]],
		"/descobrir/colaborar/scsm": [7,[2]],
		"/sobre": [8],
		"/sobre/diretrizes-de-conteudo": [9],
		"/sobre/politica-de-privacidade": [10]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';