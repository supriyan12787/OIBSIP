Personal Portfolio Website
OIBSIP Web Development Internship --- Task 2
Project Overview
This project is a personal portfolio website designed to showcase my
profile, technical skills, projects, education, and contact information.
It provides a simple and professional way to present my background and
development skills.
The website is built using HTML5 and CSS3, with JavaScript used to
enhance navigation by automatically highlighting the active navigation
link as the user scrolls through different sections.
Objectives
- Create a personal portfolio website.
- Present personal and professional information in an organized
  layout.
- Showcase technical skills and projects.
- Provide easy navigation between page sections.
- Build a responsive and user-friendly interface.
- Practise HTML, CSS, and JavaScript fundamentals.
Technologies Used
- HTML5: Structures the portfolio content and sections.
- CSS3: Styles the website and manages its layout and
  responsiveness.
- JavaScript: Detects visible sections and updates the active
  navigation link using IntersectionObserver.
Features
- Profile and introduction section.
- About Me section.
- Technical skills section.
- Projects showcase.
- Education section.
- Contact information and social profile links.
- Navigation links for moving between sections.
- Active navigation highlighting while scrolling.
- Accessibility support using the aria-current attribute.
- Responsive layout for desktop, tablet, and mobile devices.
How Active Navigation Works
The JavaScript code uses the browser's IntersectionObserver API to
detect when a section inside the <main> element becomes visible.
When a section is detected:
1. The code identifies the section's ID.
2. It compares the ID with each navigation link's href.
3. It adds aria-current="location" to the matching navigation link.
4. It removes the attribute from the other navigation links.
5. CSS styles the active link to make the current section easier to
   identify.
Project Structure
WebDev-L1-PersonalPortfolio/
├── index.html
├── style.css
├── script.js
└── README.md
Include any additional files, such as images or other assets, that your
actual project uses. Update filenames above if your project uses
different names.
How to Run the Project
1. Download or clone the repository.
2. Open the WebDev-L1-PersonalPortfolio folder.
3. Ensure that index.html links to the correct CSS and JavaScript
   files.
4. Open index.html in a web browser.
5. Scroll through the portfolio sections to test the active navigation
   highlighting.
No external JavaScript libraries are required for the active navigation
feature.
Testing
- Verify that all navigation links point to the correct section IDs.
- Scroll through the page and check whether the active navigation link
  changes.
- Confirm that the CSS styles the active navigation link.
- Test the layout at different screen sizes.
- Check that the website loads without JavaScript errors.
Developer Information
- Name: Supriya N
- Role: Aspiring Software Developer
- Degree: Bachelor of Engineering (BE)
- College: SDMIT, Ujire
- Email: 23c51@sdmit.in
- GitHub: supriyan12787
- LinkedIn:
  supriya-n-b52771353
Internship Details
- Organization: Oasis Infobyte
- Track: Web Development
- Task: Task 2 --- Personal Portfolio Website
Project Links
- GitHub Repository: Add your portfolio repository or project
  folder URL after uploading.
- Live Demo: Add your deployed website URL after hosting the
  project.
Learning Outcomes
Through this project, I practised:
- Structuring web pages with HTML5.
- Designing layouts with CSS3.
- Creating navigation between page sections.
- Using JavaScript's querySelectorAll() method.
- Implementing IntersectionObserver for scroll-based interactions.
- Improving navigation accessibility with aria-current.
- Organizing project files for GitHub.
Conclusion
This personal portfolio project demonstrates my practical learning in
front-end web development. It combines HTML, CSS, and JavaScript to
create an organized portfolio with scroll-aware navigation and a
user-friendly interface.
