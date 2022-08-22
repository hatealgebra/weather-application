## <div align="center"><h1><strong>Weather Application</strong></h1></div>

## About this app

This project supposes to be one of the "lab" projects in my portfolio. Had this idea in while and finally, it was realized.

What this app can do? It shows weather and tourist places based on the city or location. When it starts, it shows mentioned information of the locality where the user/device is located. Users also can search for the city and display its weather and known places. The idea came from my experience, usually, when I'm traveling somewhere I check what weather is going to be there, to prepare my clothes. Sometimes there is a little bit of free time, so it is a good opportunity to see some interesting places. The main purpose of the "app" was for me to educate myself.

## Project description

### **Weather content**

Thanks to the awesome free-to-use API [OpenWeather](https://openweathermap.org) I could visualize current weather with the stats like temperature, sky status, humidity, sunrise/sunset, win or pressure. Also, you can see a graph that shows 24 hours forecast, with an hourly temperature and an icon that represents weather. In the small devices, it is scrollable.
Lastly, there is a weekly forecast that comes in handy when you are packing for trips.

### **Places functionality**

As the main geo/map/places source is used the official Google Maps API which is under [Google Maps Platform](https://developers.google.com/maps). It has an awesome [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview) which provides autocomplete predictions that are used in the search form and places nearby search which on other hand serves as tourist POI.

For reverse geocoding, when the city is read from the geolocation API within the browser, there is Google Geocoding API.

### **Misc**

Side-by-side the project the storybook was created for more clear development. Components are unit tested with React Testing Library. Dark theme is done with styled-components

## Technologies & Services

- [Create React App](https://create-react-app.dev) w/ Typescript template
- Context API
- [Styled components](https://styled-components.com)
- [OpenWeather](https://openweathermap.org)
- [Google Maps Platform](https://developers.google.com/maps)
- [Storybook](https://storybook.com)
- [MSW](https://msw.io)
- [React testing library](https://testing-library.com)

## How to install & run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook`

Runs the storybook, where you can see isolated components.
Open [http://localhost:6006](http://localhost:6006) to view it in the browser

## How To Use Project

If Geolocation API in the browser is enabled the nearest city from your location is loaded otherwise Prague is set by default. You can search through the input field desired city. You will then see today's weather, hourly graph and week forecast which you can scroll on smaller devices. The last section is full of POI, which can be opened into the modal where is place info, an interactive map and reviews of the place.

If you run a storybook, you can see a small sample of the design system, which is super nice, because you can see and test components. About testing, unit tests are available, but sadly the storybook and mainly the storyshots, which are supposed to take snapshots of every story, are not compatible with React 18.

[Live version](https://weather-application-pv.netlify.app)

## Credits

Photos from Unsplash:

- https://unsplash.com/@pawel_czerwinski
- https://unsplash.com/@david__r
