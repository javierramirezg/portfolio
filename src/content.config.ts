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
			// SEO fields
			metaTitle: z.string().optional(),
			metaDescription: z.string().optional(),
			metaKeywords: z.array(z.string()).optional(),
			metaImage: z.string().optional(),
			canonical: z.string().optional(),
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
			// SEO fields
			metaTitle: z.string().optional(),
			metaDescription: z.string().optional(),
			metaKeywords: z.array(z.string()).optional(),
			metaImage: z.string().optional(),
			canonical: z.string().optional(),
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
			// SEO fields
			metaTitle: z.string().optional(),
			metaDescription: z.string().optional(),
			metaKeywords: z.array(z.string()).optional(),
			metaImage: z.string().optional(),
			canonical: z.string().optional(),
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
			// Legal/Fiscal data
			legal: z.object({
				companyName: z.string(),
				taxId: z.string(),
				address: z.string(),
				phone: z.string().optional(),
				legalEmail: z.string().email().optional(),
				commercialRegister: z.string().optional(),
			}).optional(),
			// Global SEO defaults
			seo: z.object({
				defaultMetaDescription: z.string().optional(),
				defaultKeywords: z.array(z.string()).optional(),
			}).optional(),
			// Cookie configuration
			cookies: z.object({
				types: z.array(
					z.object({
						name: z.string(),
						description: z.string(),
						required: z.boolean().optional(),
					}),
				).optional(),
			}).optional(),
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
	legal: defineCollection({
		loader: glob({ base: './src/content/legal', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			lastUpdated: z.coerce.date().optional(),
			sections: z.array(
				z.object({
					title: z.string(),
					content: z.string(),
				}),
			),
			// SEO fields
			metaTitle: z.string().optional(),
			metaDescription: z.string().optional(),
			metaKeywords: z.array(z.string()).optional(),
			metaImage: z.string().optional(),
			canonical: z.string().optional(),
		}),
	}),
};
