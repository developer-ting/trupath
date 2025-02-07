/* eslint-disable require-jsdoc */
import { ServerHeaders } from "@/utils/RequestHeaders";

export default async function handler(req, res) {
	try {
		const response = await fetch(
			"https://ap-south-1.cdn.hygraph.com/content/cm6tjk81801vh07w0pvwiav54/master",
			{
				method: "POST",
				headers: {
					// ...ServerHeaders.headers,
					//	"Content-Type": "application/json", // Ensure correct headers
				},
				body: JSON.stringify({
					query: `query {
  products {
    date
    externalLink
    productTitle
    readTime
    slug
    youtube
  }
  categories {
    title
  }
}`,
				}),
			}
		);

		// Check response status
		const statusCode = response.status;
		console.log(`API Response Status: ${statusCode}`);

		if (!response.ok) {
			const errorText = await response.text();
			console.error("API Error Response:", errorText);
			return res
				.status(statusCode)
				.json({ error: "Failed to fetch data", details: errorText });
		}

		// Ensure response is not empty
		const textResponse = await response.text();
		if (!textResponse) {
			console.error("API returned an empty response");
			return res.status(500).json({ error: "API returned an empty response" });
		}

		// Try parsing JSON
		let result;
		try {
			result = JSON.parse(textResponse);
		} catch (jsonError) {
			console.error("Invalid JSON response:", textResponse);
			return res
				.status(500)
				.json({ error: "Invalid JSON response", details: textResponse });
		}

		const allBlogs = result?.data;

		// Validate expected response structure
		if (!allBlogs?.products || !allBlogs?.categories) {
			console.error("Unexpected response structure:", result);
			return res.status(404).json({ error: "Data not found", details: result });
		}

		console.log("Fetched Data:", allBlogs);

		// Return valid JSON response
		res.status(200).json({
			products: allBlogs.products,
			categories: allBlogs.categories,
		});
	} catch (error) {
		console.error("Error fetching data:", error);
		res
			.status(500)
			.json({ error: "Internal Server Error", details: error.message });
	}
}
