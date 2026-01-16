import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	home: defineCollection({
		loader: glob({ base: './src/content', pattern: 'home.{yaml,yml}' }),
		schema: z.object({
			hero: z.object({
				title: z.string(),
				name: z.string(),
				tagline: z.string(),
				roles: z.array(
					z.object({
						icon: z.string(),
						label: z.string(),
					}),
				),
				portrait: z.object({
					src: z.string(),
					alt: z.string(),
					width: z.number().optional(),
					height: z.number().optional(),
				}),
			}),
			selectedWork: z.object({
				title: z.string(),
				description: z.string(),
			}),
			mentions: z.object({
				title: z.string(),
				description: z.string(),
				brands: z.array(z.string()),
			}),
		}),
	}),
	about: defineCollection({
		loader: glob({ base: './src/content', pattern: 'about.md' }),
		schema: z.object({
			hero: z.object({
				title: z.string(),
				tagline: z.string(),
				image: z.object({
					src: z.string(),
					alt: z.string(),
					width: z.number().optional(),
					height: z.number().optional(),
				}),
			}),
			sections: z.array(
				z.object({
					title: z.string(),
					content: z.string(),
				}),
			),
		}),
	}),
	site: defineCollection({
		loader: glob({ base: './src/content', pattern: 'site.{yaml,yml}' }),
		schema: z.object({
			name: z.string(),
			email: z.string().email(),
			social: z.array(
				z.object({
					label: z.string(),
					href: z.string().url(),
					icon: z.string(),
				}),
			),
			footer: z.object({
				text: z.string(),
				location: z.string().optional(),
			}),
		}),
	}),
	skills: defineCollection({
		loader: glob({ base: './src/content', pattern: 'skills.{yaml,yml}' }),
		schema: z.object({
			items: z.array(
				z.object({
					icon: z.string(),
					title: z.string(),
					description: z.string(),
				}),
			),
		}),
	}),
};
