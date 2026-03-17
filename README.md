# Personal Website Portfolio

## Project Overview

This project is a personal website created for the **CS 463 Intro to Web Development final project**. The site introduces my background, skills, and selected projects, and includes a contact form with client-side validation. It is built using HTML, CSS, JavaScript, and Bootstrap.

The site is structured as a **single-page portfolio** with the following sections:

- Navigation Menu – allows users to jump to different sections of the page
- About Me – a short introduction
- Skills – a list of technical skills
- Projects – a showcase of selected projects with descriptions
- Contact Me – a form that allows visitors to send a message

The goal of this project was to build a responsive and accessible personal website using **HTML, CSS, and JavaScript**, while applying concepts learned during the course such as layout design, responsive styling, and form validation.

---

# Live Website

Deployed Website:  
https://jh12333.github.io/jiehchen.github.io/

GitHub Repository:  
https://github.com/JH12333/jiehchen.github.io

---

# Run the Project

### Option 1 – Open Locally

1. Clone the repository:  
   `git clone https://github.com/JH12333/jiehchen.github.io.git`

2. Open the project folder

3. Open `index.html` in a web browser

### Option 2 – Use GitHub Pages

View the site at: https://jh12333.github.io/jiehchen.github.io/

---

# Features

## Responsive Layout

The layout adapts to different screen sizes using **CSS media queries** and **Bootstrap responsive utilities**.

- Large screens: project images are displayed side-by-side
- Medium screens: project images are displayed using a carousel
- Small screens: project images are stacked vertically

---

## Navigation

The navigation menu uses **anchor links** that allow users to jump to different sections.

---

## Contact Form Validation

The Contact section contains a form with the following fields:

- Name
- Email
- Message

JavaScript validation checks:

- empty fields
- minimum length requirements
- basic email format

If the form is valid, a success message is displayed and the form resets.  
No data is sent to a server because the project does not include a backend.

---

# External Resources

Bootstrap Documentation – Carousel  
https://getbootstrap.com/docs/5.0/components/carousel/  
Used for implementing the project image carousel.

Bootstrap Documentation – Display Utilities  
https://getbootstrap.com/docs/5.0/utilities/display/  
Used for controlling which layouts appear at different screen sizes.

Bootstrap Documentation – Images  
https://getbootstrap.com/docs/5.0/content/images/  
Used for making images responsive.

Bootstrap Documentation – Sizing  
https://getbootstrap.com/docs/5.0/utilities/sizing/  
Used for image width utility classes.
