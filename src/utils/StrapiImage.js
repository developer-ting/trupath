/** Strapi Image */
export default function StrapiImage(image) {
	if (!image) {
		return;
	}

	const data = {
		url: `${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${image?.url}`,
		width: image.width,
		height: image.height,
	};

	return data;
}
