export type Item = {
	title: string
	link: string
	image?: string
	author?: string
	description?: string
}

export type Group = {
	name: string
	items: List
}

export type List = Array<Item | Group>

export function isGroup(node: Item | Group): node is Group {
	return "items" in node
}