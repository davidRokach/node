# Business Card Builder Website

The Business Card Builder Website is a React-based project aimed at providing users with a platform to create and manage their own business cards. The website features a user-friendly and responsive interface with top and bottom navigation menus, offering various functionalities such as card creation, editing, deletion, and favoriting. Additionally, the project incorporates user registration and login capabilities, as well as a CRM (Customer Relationship Management) feature for administrators to edit other users' details.

## Functionality

#### 1. Navigation Menu:

- The website includes a top and bottom navigation menu for easy access to different sections and features of the application.
- Navigation menu changes according to user permissions (business or administrator)
- The website includes a search bar where you can search for cards on any page that displays cards, and also search by users on the CRM page
- The top navigation menu also includes a button that changes the website to dark mode and vice versa, the button is connected to the device that displays it - if the device itself is in dark mode then the website will be in dark mode

#### 2. Card Creation:

- Users can create customized business cards by providing relevant details such as name, contact information, job title, and company details.
- Creating a card also creates a landing page with full business details, plus a map with the location of the business

#### 3. Card Editing:

- Users have the ability to edit their existing business cards. They can modify the card content of the business card.
- The editing feature enables users to update their contact details, change the design, or make any necessary adjustments to keep their business cards up to date.
- This option is only for cards you have created

#### 4. Card Deletion:

- Users can delete unwanted or outdated business cards from their collection. The deletion option allows users to remove cards they no longer need or wish to keep.
- This option is only available for cards you've created, but if you're an admin you can delete any card

#### 5. Favorites:

- The website provides a favorites feature that allows users to mark specific business cards as favorites for quick access or reference.
- Users can easily identify and access their favorite cards, ensuring they have quick access to important contacts or designs.

#### 6. User Registration and Login:

- To utilize the website's features, users are required to register an account.
- The registration process typically involves providing necessary information such as name, email address, and password.
- Once registered, users can log in securely using their credentials to access their saved business cards and other functionalities.
- Logging in with an incorrect password more than three times blocked the user from logging into the site for 24 hours

#### 7. User Details Editing:

- Users have the option to edit their personal details, such as name, email address, and password, through the edit account section.
- This feature allows users to keep their information up to date and make any necessary changes as required.

#### 8. CRM (Administrator Access):

- The website incorporates a CRM feature that grants administrators the ability to manage and edit users details.
- The design is of a crm page is responsive, on a small screen display the table is replaced by the users' cards
- Administrators can access a separate interface that provides them with necessary tools and permissions to edit user information
- The admins can edit whether the users will be admin or business type and can delete users

## Getting Started

To get started with the Business Card Builder Website, follow these steps:

1. Clone the repository: `git clone https://github.com/davidRokach/ReactProject.git`
2. Install dependencies in the project and the server : `npm install`
3. Start the development server in the project and the server: `npm start`
4. Access the website locally at: `http://localhost:3000`

## Technologies Used

- React
- JavaScript
- HTML
- CSS
