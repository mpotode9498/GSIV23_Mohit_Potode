## Available Scripts

In the project directory, you can run:

### `Getting Started`
After getting the files, you need to go the file directory and run

```shell
npm install
```
and after that start the dev server.

```shell
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `tests`

To run the unit test cases

```shell
npm test
```


### `Challenges`

#### 1. Infinite Scrolling:
The code effectively sets up an event listener for the scroll event and defines a callback function (handleScroll) to respond to this event. 
It checks whether the user has scrolled to the bottom of the page by comparing various properties related to the viewport and document dimensions.

#### 2 State Management:
Creating a redux store to get the movies backdrop_path to show to image on search result page and movie details page with the size mentioned in configuration API response. It can access the URL backdrop path of movies anywhere in application without passing down the prop to each and every component which improves the performance.

#### 3 List Page Cards (Search Result Page):
Creating a cards with the data and images coming from tmbd API's was tough task to make it repsonsive and to get that into the column of 4.
To solve this, I've used the map function on an array of results, which return the MovieCard component with the image and movie details for each movie. Also used the higher order component to show these results in the middle of page.

#### 4 Error Page:
Created a Error page for the wrong URL's which will redirect user automatically to the List Page after 5 seconds.


### `Future Improvements:`
1. Would have added the filter on List Page (search results page) by which user can select the upcoming movies order and sort the movies based on user preferences.
2. Would have added the homepage with the search functionality and which displays the popular movies results using the tmdb API.
3. Would have improved the responsive UI.
4. Would have added playwright automation test cases for the functional flow.
