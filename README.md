React.createElement => Object => HTMl LEm

JSX (transplied before it reached the JS) - PARCEL - Babel

JSX => React.createElement => ReactElement-JS Object => HTMLElement(Render)

# Design
Header
- Logo
- Nav Items
- Body
- Search Bar
- Cart Container

Restraunt Container
- Card
- Img
- Name, Star Rating, Cuisine, Time to Deliver

Footer
- Copyright
- Links
- Address
- Contact 

# Exporting
Two types of Export/Import:

- Default 
- export with var

# Naming convention:
- list of Restaurants->AllRestaurants
- restaurant is the json List main keyword
- infowithstyle."restraunts" is the sub json keyword for array list
- In FiterData, AllRestaurants is passed as restaurants


# UseEffect
- If no dependency array, useEffect is called on every Render
- If dependency array is empty = [] => useEffect is called on initial render(just once)
- If dependency array is [blah blah] => called everytime 'blah blah' is updated(might trigger update onClick of a button)

# Basic Rules:
- Always try to use Hooks on the top of the Body/Header etc to leave no chance of inconsistency
- Never create Use State Hook inside a if-else [might create inconsistency]
- Never do above inside function/ any for loop

# 2 types of Routing
- Client Side Routing
- Server Side Routing

# Dynmaic Routing
There is a dynamic route for each restaurant which loads dynamix content