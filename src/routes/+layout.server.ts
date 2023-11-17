import type { LayoutServerLoad } from '$lib/types';
import { OpenAI } from 'openai';
import type { ClientOptions } from 'openai';

// Create an instance of the OpenAI class with your API key
const openai = new OpenAI({
	apiKey: import.meta.env.VITE_OPENAI_API_KEY
} as ClientOptions);
export const load: LayoutServerLoad = async () => {
	// console.log('OpenAI API key:', openai.apiKey);
	// Hard-coded message
	const message = 'Can you greet me with a nice greeting? ';

	try {
		// Send the hard-coded message to the ChatGPT 3.5
		const response = await openai.completions.create({
			model: 'gpt-3.5-turbo-instruct',
			prompt: message,
			temperature: 0.7,
			n: 1,
			stream: false,
			max_tokens: 200
		});

		// Validate and get the generated response
		if (response && response.choices && response.choices.length > 0) {
			const textResponse = response.choices[0].text.trim();

			// Log and return the response to the client
			console.log('Text response:', textResponse);
			return {
				role: response,
				body: { response: textResponse }
			};
		} else {
			throw new Error('Invalid response from OpenAI API');
		}
	} catch (error) {
		console.error('Error:', error);
		// Return an error response to the client
		return {
			status: 500,
			body: {
				error: 'An error occurred while processing the request: ' + error.message
			}
		};
	}
};
