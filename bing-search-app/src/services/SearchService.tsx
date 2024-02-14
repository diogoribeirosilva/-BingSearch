// src/services/SearchService.tsx

import axios from 'axios';

const BING_API_ENDPOINT = 'https://api.bing.microsoft.com/v7.0/search';
const API_KEY = 'e9997627dc2d4b1587fffb0d84b53457';

const SearchService = {
  search: async (searchTerm: string): Promise<any[]> => {
    if (!API_KEY) {
      throw new Error('API key is missing. Please provide a valid key.');
    }

    if (!searchTerm.trim()) {
      throw new Error('Search term is required. Please enter a valid search term.');
    }

    try {
      const response = await axios.get(BING_API_ENDPOINT, {
        headers: {
          'Ocp-Apim-Subscription-Key': API_KEY,
        },
        params: {
          q: searchTerm,
          count: 10,
        },
      });

      return response.data.webPages?.value || [];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          throw new Error(`No results found. 404.`);
        } else {
          throw new Error(`Error fetching search results: ${error.message || error.response?.data || 'Unknown error'}`);
        }
      } else if (error instanceof Error) {
        throw new Error(`Error fetching search results: ${error.message}`);
      } else {
        throw new Error(`Unknown error occurred: ${error}`);
      }
    }
  },
};

export default SearchService;

export {};
