# BingSearch

# Overview
This project consists of a React application with a SearchComponent and a SearchService. The SearchComponent allows users to perform searches using the Bing Search API, and the SearchService handles the interaction with the API.

SearchComponent
A React component that provides a user interface for entering search terms, executing searches, and displaying the results.

SearchService
A service module (SearchService.tsx) utilizing the Bing Search API to fetch search results based on the provided search term.

## 

# Installation
Clone the repository:

bash
Copy code
git clone https://github.com/diogoribeirosilva/BingSearch.git
Install dependencies: npm install

Obtain a Bing Search API key:

Visit Microsoft Azure Portal.
Create a new Bing Search resource.
Copy the API key.
Replace the placeholder API key in SearchService.tsx: const API_KEY = 'YOUR_ACTUAL_API_KEY';
Run the application: npm start

# Usage
Import the SearchComponent:

import SearchComponent from './path-to/SearchComponent';

Include the component in your TSX:
<SearchComponent />

Enter a search term and click the "Search" button.
View the search results.

# Dependencies
React
axios
Bootstrap

# Contributing
Feel free to contribute by opening issues or submitting pull requests.

# Code Structure
index.tsx
Entry point for the React application, rendering the App component.

reportWebVitals
Function reporting web vitals metrics for performance monitoring.

SearchComponent.tsx
React component for search functionality.

SearchService.tsx
Service module for interacting with the Bing Search API.




