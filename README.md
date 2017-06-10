# Mongo DB News Scraper
	Web app that scrapes chosen news source for featured stories and saves the links and headlines. This edition features stories from Clickhole, an absurdist news site that lampoons social media websites.

## Live Link
[Clickhole Scraper](http://alltheclickholes.herokuapp.com/)	

## Description on how to use the app
	From the home page, click the scrape article button to scrape new articles from the featured news of Clickhole's website. 

	The news articles will then populate on the page. Articles can be saved and accessed on the saved articles page. From there, notes can be added to each article. 

## Requirements
  1. Whenever a user visits the site, the app will scrape stories from a news outlet of your choice. The data should at least include a link to the story and a headline, but feel free to add more content to your database (photos, bylines, and so on).

  2. Use Cheerio to grab the site content and Mongoose to save it to your MongoDB database. 

  3. All users can leave comments on the stories you collect. They should also be allowed to delete whatever comments they want removed. All stored comments should be visible to every user.

  4. You'll need to use Mongoose's model system to associate comments with particular articles. 	

## Technologies Used 
* Materialize CSS
* Express
* Express Handlebars
* Cheerio
* Mongoose
* Request
* Body-Parser

## Code Explanation

The app in its current iteration is still a work in progress. Features such as saving the article and adding notes are still being worked on. 
