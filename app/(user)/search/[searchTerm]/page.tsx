import React from "react";

type Props = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  //   throw new Error("WHOOPS it's error");
  const data: SearchResult = await res.json();
  return data;
};

const SearchResults = async ({ params: { searchTerm } }: Props) => {
  const searchResult = await search(searchTerm);
  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>
      <ol className="space-y-5 p-5 list-decimal">
        {searchResult.organic_results.map((result) => (
          <li key={result.position}>
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
