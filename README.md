# Duck's Tap room

Developed by Gethin Davies

![Mock up](docs/mock.jpg)

Duck's Tap room is a craft brewery aimed at people in the craft beer scene. Each week the brewery makes exciting new flavours and experiments these exciting new creation's with their punters. Duck's tap room's website will be useful to find the opening times of the establishment and also to get in touch to book a table. It also showcases the week's events the Tap room has scheduled.

[Live Website](https://gethindavies1990.github.io/CI_MS1_DTR/)


## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Color](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device testing](#performing-tests-on-various-devices)
    6. [Browser compatibility](#browser-compatibility)
    7. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals 

### User Goals
- Finding bar/pub/tap room that offers craft beers
- Find the upcoming weeks events
- Find information on the taproom
- Find the location of the tap room

### Site Owner Goals
- Increase in visitors to the taproom
- Promote the business
- Provide a way for new and existing customers to contact the business.
- Provide essential information about the business to customers.
- Provide the customer with a details related to the events taking place at the taproom

## User Experience

### Target Audience
- People looking for a place to enjoy craft beers and great atmosphere
- People looking for a place to meet with friends

### User Requirements and Expectations

- A simple and intuitive navigation system
- Quickly and easily find relevant information
- Links and functions that work as expected
- Good presentation and a visually appealing design regardless of screen size
- An easy way to contact the business
- Simple content that the user can skim read
- Accessibility

### User Stories

#### First-time User 
1. As a first time user, I want to know where the tap room is located
2. As a first time user, I want to know how to get in contact with the tap room
3. As a first time user, I want to know more about about the taproom
4. As a first time user, I want to find out what events they have on

#### Returning User
5. As a returning user, I want to find a phone number to call to book a table
6. As a returning user, I want to what events they have on
7. As a returning user, I want know what the brew of the week is
8. As a returning user, I want to find the tap room social handles
9. As a returning user, I want to get directions to the tap room

#### Site Owner 
10. As the site owner, I want users to find info about upcoming events
11. As the site owner, I want users to get to know the tap room
12. As the site owner, I want the users to be able to contact us
13. As the site owner, I want the users to know what the brew of the week is

## Design

### Design Choices
The webpage was designed to be easy to navigate and eye catching with a nice contrast of colors to appeal to the customer, it was made to be fully responsive on all devices. 

### Colour
The color scheme chosen was to reflect the tap rooms mascot duck, with a nice bright shade of green and bright yellow. Which is both present on the mascot. I went for the 60%–30%–10% color scheme, (60%-yellow, 30%-charcoal, 10%-green) I mainly chose the color of yellow to be present for the main pages of the website and the dark charcoal was used in the navigation bar and the footer of the website. I used the green color in little instances so they really pop in certain areas we may want to draw the user to.
<br>

![Colour scheme](docs/features/color-pallete.png)


### Fonts
Montserrat was used mainly for the headings within the website.
<br>
Source Sans Pro was used for the mostly the p elements in the website

### Logo

I found the logo of the duck online, and removed some parts which wasn't needed to make the logo 2 dimensional, I altered the colors myself to match the tap rooms color pallette. The text on the logo was made by myself using adobe illustrator.

![logo](docs/features/ducks-brew-ver.1.webp)

### Structure

The page is structured to be user friendly and only has two pages, the index page and the book a table page.
The website consists of 2 separate pages with a total of 6 sections: 
- The index page includes a hero section with a CTA(call to action) for the user to book a table
- A Testimonial section so new users can see past experiences from other users while visiting the tap room.
- The our story section which details the birth of the tap room and its growth in recent years and how it became what it is.
- An event section so the user can see what events take place on the given week.
- A how to find us section which includes the business's address, google map and contact form information.
- The book a table page, which includes a form the user can submit to reserve their space

### Wireframes

#### Desktop

<details><summary>Hero</summary>
<img src="docs/wireframes/wf-hero.jpg">
</details>
<details><summary>Testimonial</summary>
<img src="docs/wireframes/wf-testimonial.jpg">
</details>
<details><summary>Our Story</summary>
<img src="docs/wireframes/wf-our-story.jpg">
</details>
<details><summary>Contact</summary>
<img src="docs/wireframes/wf-contact.jpg">
</details>
<details><summary>Footer</summary>
<img src="docs/wireframes/wf-footer.jpg">
</details>
<details><summary>Error 404</summary>
<img src="docs/wireframes/wf-404-desktop.jpg">
</details>
<details><summary>Book Table</summary>
<img src="docs/wireframes/wf-book-table-desktop.jpg">
</details>

#### Mobile
<details><summary>Mobile</summary>
<img src="docs/wireframes/wf-mobile.jpg">
</details>
<details><summary>404</summary>
<img src="docs/wireframes/wf-404-mobile.jpg">
</details>
<details><summary>Book Table</summary>
<img src="docs/wireframes/wf-book-table-mobile.jpg">
</details>

#### Tablet
<details><summary>Tablet</summary>
<img src="docs/wireframes/wf-tablet.jpg">
</details>
<details><summary>404</summary>
<img src="docs/wireframes/wf-404-tablet.jpg">
</details>
<details><summary>Book Table</summary>
<img src="docs/wireframes/wf-book-table-tablet.jpg">
</details>


## Technologies Used

### Languages
- HTML
- CSS

### Frameworks & Tools
- Bootstrap v5.2.1
- Git
- GitHub
- Gitpod
- Adobe Illustrator
- Balsamiq
- Google Fonts
- Font Awsome
- Favicon<span>.</span>io

## Features
The page consists of 2 pages and fourteen features

## Navigation Bar
- Featured on all two pages
- The navbar is fully responsive and changes to a toggler (hamburger menu) on smaller screens and includes
links to the Homepage, our story, Events, how to find us section using the ID tags, the book table link takes you to a separate page. The Navigation page is fixed to the top to always be present on scroll so if the user wants to navigate quickly to a different section they can do so. 
- It allows users to easily navigate the page
- The link for the page the user is currently on is highlighted in white, when the user scrolls over the other links the text will change color to highlight it is a clickable element.


![Nav Bar](docs/features/nav.jpg)

### hero
- Introduces the user to the tap room with a image showcasing a business that has great atmosphere
- Includes a CTA (Call to action) button for the user to book a table
- User Stories covered: 5

![Hero Section](docs/features/hero.jpg)

### Testimonials
- The user instantly see's some customer testimonials of recent visits.
- User Stories covered: 3

![Testimonial](docs/features/testimonial.jpg)

### Our Story
- Allows users to see how the tap room was established and the growth it has undertaken up to the current year
- User Stories covered: 3

![Our Story](docs/features/our-story.jpg)

### Events
- The events section was made using a grid system, each grid square offers a new event for that week.
- User Stories covered: 3, 4, 6, 7

![Events](docs/features/events.jpg)

### How to find us
- Gives the user a contact box to submit a inquiry
- The user is also able to see the google map of the business
- The user can get access to the contact information
- The user can find out the telephone number and email address 
- User Stories covered: 1, 2, 5, 9

![How to Find us](docs/features/how-to-find-us.jpg)

### Book a Table
- user is able to submit a form to reserve a space at the taproom
- User Stories covered: 5

![Book a Table](docs/features/book-table.jpg)

### Footer
- Features the logo and social icons with links to their respected social media pages.
- User Stories covered: 8

![Footer](docs/features/footer.jpg)


### Map
- Shows the taproom location on an embedded Google Map
- User Stories covered: 1, 9

![Map](docs/features/map.jpg)


## Validation

### HTML Validation
The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors no warnings to show.
<details><summary>Home/Index</summary>
<img src="docs/validation/validation-html-index.jpg">
</details>
<details><summary>Book Table</summary>
<img src="docs/validation/validation-html-book-table.jpg">
</details>
<details><summary>404</summary>
<img src="docs/validation/validation-html-404.jpg">
</details>



### CSS Validation
The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website.
When validating the page as a whole, the validator shows some errors linked to Bootstrap v5.1.2. When validating just my own custom CSS it passes with no errors found.
<details><summary>style.css</summary>
<img src="docs/validation/validation-css.jpg">
</details>

### Accessibility
The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards. All pages pass with 0 alerts, some pages had a few contrast errors for the text that overlays the images.
<details><summary>Home</summary>
<img src="docs/validation/accessibility-home.jpg">
</details>

<details><summary>Book Table</summary>
<img src="docs/validation/accessibility-book-table.jpg">
</details>

<details><summary>404</summary>
<img src="docs/validation/accessibility-404.jpg">
</details>



### Performance 
Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website. 

<details><summary>Home</summary>
<img src="docs/validation/validation-lighthouse-index.jpg">
</details>

<details><summary>Book Table</summary>
<img src="docs/validation/validation-lighthouse-book-table.jpg">
</details>

<details><summary>404</summary>
<img src="docs/validation/validation-lighthouse-404.jpg">
</details>


### Performing tests on various devices 
The website was tested on the following devices:
- Fujitsu Laptop (both in pc and tablet mode)
- Windows Asus
- Apple Iphone 8
- Apple Iphone 13

In addition, the website was tested using Google Chrome Developer Tools Device Toggling option for all available device options.

### Browser compatibility
The website was tested on the following browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

### Testing user stories

## First-time User 

1. As a first time user, I want to know where the taproom is located

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Map | Navigate to the how to find us section, locate the Google Map | Locating a map showing the location of the taproom | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story/user-story-testing-map.jpg">
</details>

2. As a first time user, I want to know how to get in contact with the tap room

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact information | Navigate to the how to find us section, locate the contact information | Locate the contact section to find relevant information | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story/user-story-testing-contact.jpg">
</details>

3. As a first time user, I want to know more about about the taproom

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Our Story Section | Navigate to the Our story section, | User has an introduction to how the tap room was established | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story/user-story-testing-our-story.jpg">
</details>

4. As a first time user, I want to find out what events they have on

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Event Section | Navigate to the event section, | User has an overview of all the events running that week | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story/user-story-testing-events.jpg">
</details>

## Returning User
5. As a returning user, I want to find a phone number to call to book a table
   
| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact information | Navigate to the how to find us section, locate the contact information | Locate the contact section to find relevant information | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story/user-story-testing-contact.jpg">
</details>

6. As a returning user, I want to what events they have on

 | **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Event Section | Navigate to the event section, | User has an overview of all the events running that week | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story/user-story-testing-events.jpg">
</details>

7. As a returning user, I want know what the brew of the week is

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Event Section | Navigate to the event section, | User has an overview of what the brew of the week will be | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story/user-story-testing-events.jpg">
</details>

8. As a returning user, I want to find the tap room social handles

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer Section | Navigate to the footer section, | User has access to all the social handles of the business | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story/user-story-testing-footer.jpg">
</details>

9. As a returning user, I want to get directions to the tap room

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Map | Navigate to the how to find us section, locate the Google Map | Locating a map showing the location of the taproom | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story/user-story-testing-map.jpg">
</details>

 As a  user, I may navigate to a 404 page

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| error 404 | User navigates to a 404 page | lands on 404 page and has the option to go back to the homepage | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story/user-story-testing-404.jpg">
</details>


## Bugs

| **Bug** | **Fix** |
| ----------- | ----------- |
| White Space was showing on the event section  | Added margin 0 to the div of the event section removed this |
| Content overflow into different sections on mobile | Added min-height to sections to allow the section to grow with content on mobile |
| Contrast issues with all images that has a text overlay | Added a opaque overlay to all images |
| Bootstrap fixed-top nav bar was overlapping some content on pages | Set the body to have padding-top of 50px |

## Deployment
The website was deployed using GitHub Pages by following these steps:
1. In the GitHub repository navigate to the Settings tab
2. On the left hand menu select Pages
3. For the source select Branch: master
4. After the webpage refreshes automatically you will se a ribbon on the top saying: "Your site is published at https://gethindavies1990.github.io/CI_MS1_DTR/index.html

You can for fork the repository by following these steps:
1. Go to the GitHub repository
2. Click on Fork button in upper right hand corner

You can clone the repository by following these steps:
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7.Press Enter to create your local clone.

## Credits
Images not referenced below are owned by the developer.

### Images
 * [hero image](assets/images/beer-hero.webp): downloaded from <a href="https://elements.envato.com/cheering-up-with-beer-W2GULE9">Envato</a>
* [Testimonial image 1](assets/images/testimonial-1.webp): downloaded from <a href="https://elements.envato.com/elegant-confident-afro-american-businessman-in-gla-3MM44SJ">Envato</a>
* [Testimonial image 2](assets/images/testimonial-2.webp): downloaded from <a href="https://elements.envato.com/portrait-of-a-beautiful-happy-young-woman-headshot-GX3QC6N">Envato</a>
* [Our Story Carousel 1](assets/images/home-brewery.webp): downloaded from <a href="https://elements.envato.com/home-brew-74D8PZC">Envato</a>
* [Our Story Carousel 2](assets/images/warehouse.webp): downloaded from <a href="https://elements.envato.com/empty-warehouse-74D8PZC">Envato</a>
* [Our Story Carousel 3](assets/images/taproom.webp): downloaded from <a href="https://elements.envato.com/bar-pub">Envato</a>
* [Event img 1](assets/images/beer-pour.webp): downloaded from <a href="https://elements.envato.com/side-view-of-mans-hands-that-fills-glasses-by-beer-9WWBNZZ">Envato</a>
* [Event img 2](assets/images/beer-of-week.webp): downloaded from <a href="https://elements.envato.com/pale-beer-N4RX5NF">Envato</a>
* [Event img 3](assets/images/comedy-night.webp): downloaded from <a href="https://elements.envato.com/friends-laughing-and-drinking-draft-beer-CDXETQA">Envato</a>
* [Event img 4](assets/images/rocker.webp): downloaded from <a href="https://elements.envato.com/male-singer-in-sunglasses-rock-band-TYEQBLN">Envato</a>
* [Event img 5](assets/images/taco-tuesday.webp): downloaded from <a href="https://elements.envato.com/tacos-EUP92L7">Envato</a>

### Code
* Bootstrap was used in many areas of the website to make it responsive.
* grid image system by Dcode on youtube
* The contact/Map section a flex video was watched to understand how it works to implement this https://www.youtube.com/watch?v=JJSoEo8JSnc

All imagery was taken from  Envato Elements(https://elements.envato.com/) and is credited in my code.

[Back to Table Of Content](#Table-of-Content)

## Acknowledgements
I would like to take the opportunity to thank:
- My mentor Mo Shami for his feedback, advice, guidance and support.
- My Wife for her continued support and giving me the time to do this project
- My Parents for testing out the website when I asked of them