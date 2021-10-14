## Rockstar Movies

Welcome!

### Instalación

To install dependencies for this project once you have cloned the repository, please run the command `npm install`.

After installing the dependencies, please run `npm start` to launch the app locally in port `3000`.

### Descripción

The project has only 2 views: `Movies List` and `Movie Detail`.
The following list show us the general features of the project:

- It was created using `create-react-app`
- Routes were created using `react-router-dom`.
- To store global values in the project, `React Context` was used.
- The css styles were created using `Styled Components`.
- For HTTP Requests, `native JS Fetch` was used.
- Custom hook `useFetchMovies` was created to handle HTTP requests to `tmdb` API.
- Util `dateFormatter` was created as the name suggests, to format date in a custom way.

---

### Componentes

All components were created as **functional components**, and used React hooks as useEffect or useState to handle or store data when is needed.

The following components list show us a description of each one:

| Component       | Description                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Header**      | Include the app logo with a link to the main page, and the SearchBar and Rating components. Those components will be hidden in the Movie Detail page.                             |
| **MoviesList**  | Works as the main page of the app. Also get popular movies list or filtered list when a query is typed by the user in SearchBar                                                   |
| **Movie**       | Represents each movie item in the MoviesList                                                                                                                                      |
| **MovieDetail** | The page that shows the movie detail when a Movie item is clicked. Has a button to go back to the list.                                                                           |
| **SearchBar**   | Allows us to make a query to the `tmdb` API. Initial popular movies will be replaced with the results. If the input text is empty, popular movies will be listed again.           |
| **Rating**      | A movie list filter based on `vote_average` of each movie. Filter range works like this: ⭐️ [0, 2], ⭐️⭐️ [2, 4], ⭐️⭐️⭐️ [4, 6], ⭐️⭐️⭐️⭐️ [6,8], ⭐️⭐️⭐️⭐️⭐️ [8, 10] |

---

Thanks for reading this document.
