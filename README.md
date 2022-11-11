# SneakyBird Prelaunch Website
Placeholder website for a modern eatery prior to launching of its official site.

## Features and requirements
- Frontend:
  - Showcasing a set of 10 featured images with the displayed image changing at a specified time interval.
  - A form that is a job application, with file upload capability for résumés.
- Backend:
  - Accessibility of the data persistence layer for the project client whose background is not technical.
  - Progammatic file uploads to cloud storage.
- Timeline: 4 full days for development

## Screenshots
### Demo video
![Demo video](https://i.imgur.com/JO0fotZ.gif)
### Desktop
![Desktop1](https://i.imgur.com/FctuGVv.png)
![Desktop2](https://i.imgur.com/zRE4GA7.png)
![Desktop3](https://i.imgur.com/szI3ZAj.png)
![Desktop4](https://i.imgur.com/E6KW5eN.png)
### Mobile
<div align="center" width="100%">
  <img src="https://i.imgur.com/KnczUs8.jpg" />
  <img src="https://i.imgur.com/nAT4Otu.png" />
  <img src="https://i.imgur.com/OchgmiT.png" />
  <img src="https://i.imgur.com/MKXBbYv.png" />
</div>

## Tech stack and approach:
### Frontend
1. [NextJS](https://nextjs.org/) was the frontend framework of choice because it:
- builds on React - the frontend technology I’m most familiar with.
- supports server-side rendering by default, which is great for SEO for a static site like this.
- removes the hassle of setting up Babel and Webpack for React.
- removes the hassle of setting up my own Express server, especially for such a small API, through Next’s `api` routes.
All of these factors enabled me to write code that I could feel confident in, in the shortest amount of time possible given the fast-approaching project deadline.

2. State management of form via [React Hook Form](https://react-hook-form.com/).

3. CSS keyframes animation for images slideshow.

### Backend
1. AWS S3 for cloud storage of file uploads.
- Approach: When the backend gets a POST request from the frontend, the backend will call AWS API with the appropriate IAM credentials to obtain an ephemeral pre-signed URL link pointing to a specific object in the S3 bucket. The URL will then be passed back to the frontend, and the frontend will upload the file directly to AWS S3 via a PUT request to the endpoint that is the pre-signed URL.
- Advantages: The backend does not have to process the files, and no unnecessary bandwidth is wasted uploading these files in two trips each (frontend to backend, then backend to cloud storage).

2. Data persistence was achieved by keeping a record of all form submissions in a [Notion](https://developers.notion.com/) (a note-taking application) database. Google Sheets would have worked just as well.
