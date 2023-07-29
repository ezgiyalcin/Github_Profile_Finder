# GitHub Finder 

GitHub Finder is a web application that allows users to search for GitHub profiles and view basic information about the users, as well as their repositories.

## Preview

[Live Preview](screen_record.gif)

# Getting Started
To use GitHub Finder, you can either clone this repository or download the source code directly. The application is a client-side JavaScript application, so you can run it in any modern web browser. No additional server-side setup is required.

# Prerequisites
Ensure you have a modern web browser like Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari installed on your computer.

# Usage
Open the index.html file in your web browser.

The GitHub Finder page will load, where you will see a simple interface with a navigation bar, a search input field, and a search button.

Enter a GitHub username you wish to search for in the search input field.

Press the "Search" button or hit the "Enter" key on your keyboard.

The application will retrieve the user's profile and repositories from the GitHub API.

If the user is found, their profile information, including avatar, username, repository count, gist count, followers, following, bio, company, website, location, and account creation date, will be displayed on the page.

If the user is not found, an error message will be displayed indicating that the user was not found.

If you wish to change the application theme, you can click the "Dark Mode" or "Light Mode" button located in the navigation bar.

# Technologies Used
HTML: The structure of the web page.
CSS: Styling and layout of the page.
Bootstrap: A popular CSS framework used for styling components.
JavaScript: The main programming language for implementing the search functionality and interacting with the GitHub API.
# Project Files
index.html: The main HTML file for the application.
style.css: The custom CSS file for styling the application.
main.js: The main JavaScript file that handles user input, API calls, and DOM manipulation.
api.js: The JavaScript file containing the GitHub class responsible for fetching user data from the GitHub API.
ui.js: The JavaScript file containing the UI class responsible for rendering user data on the page.
# APIs Used
GitHub API is used to fetch user profile and repository data based on the search query.

# Authors
This project was created by Ezgi Yalcin.

# Acknowledgments
Special thanks to GitHub for providing the API used in this project.

