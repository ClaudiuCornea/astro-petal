// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

export default defineConfig({
	name: 'astro_petal',
	title: 'Astro Petal',
	projectId: 'wpicjtcm',
	dataset: 'production',
	plugins: [structureTool()],
	schema: {
		types: [
			{
				title: 'Menu',
				name: 'menu',
				type: 'document',
				fields: [
					{
						name: 'name',
						title: 'Name',
						type: 'string',
					},
					{
						name: 'description',
						title: 'Description',
						type: 'string',
					},
					{
						name: 'smallSize',
						title: 'Small Size',
						type: 'number',
						initialValue: 0,
						precision: 2
					},
					{
						name: 'normalSize',
						title: 'Normal Size',
						type: 'number',
						initialValue: 0,
						precision: 2
					},
					{
						name: 'largeSize',
						title: 'Large Size',
						type: 'number',
						initialValue: 0,
						precision: 2
					},
					{
						name: 'origin',
						title: 'Origin',
						type: 'string',
						layout: 'dropdown',
						options: {
							list: [
								{title: 'Vietnam', value: 'vietnam'},
								{title: 'China', value: 'china'},
								{title: 'Thailand', value: 'thailand'},
							]
						}
					},
					{
						name: 'category',
						title: 'Category',
						type: 'string',
						layout: 'dropdown',
						options: {
							list:[
								{title: 'Appetizers', value: 'appetizers'},
								{title: 'Soups', value: 'soups'},
								{title: 'Vegetarian', value: 'vegetarian'},
								{title: 'Fish and shellfish', value: 'fish-and-shellfish'},
								{title: 'Meat', value: 'meat'},
								{title: 'Noodles and rice', value: 'noodles-and-rice'},
								{title: 'Dessserts', value: 'dessserts'},
								{title: 'Wines', value: 'wines'}
							]
						}
					},
				],
			},
		],
	},
})