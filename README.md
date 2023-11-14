# Output
-![image](https://github.com/harshiltomar/Foodify-1.0/assets/110554721/00774b16-e3b6-46b2-8795-0dce04babc11)
-![image](https://github.com/harshiltomar/Foodify-1.0/assets/110554721/c36c0004-81d1-42dc-ad0d-cda6ae6547b6)
-![image](https://github.com/harshiltomar/Foodify-1.0/assets/110554721/a4babbc1-36c4-4564-83e0-9c111b9a217a)



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

- export Default {function based component name} 
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
There is a dynamic route for each restaurant which loads dynamic content to display on the Res-card page for each restaurant

# ComponentDidMount
- to Make API Call
- Conventionally(function based component), first we load a component and when the component has been loaded, we make API call to fetch the data
- i.e Loads->Render->API->Render
- Thus in class based component, cdm is used to perform the same above task instead of delaying till fetch completion