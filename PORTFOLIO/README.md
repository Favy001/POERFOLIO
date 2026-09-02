# CV Portfolio

A responsive CV portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on desktop and mobile
- Smooth scrolling navigation
- Interactive contact form
- Animated skills section
- Dark mode toggle
- Professional layout with work experience section

## Setup

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize the content in `index.html` with your personal information
4. Replace `profile.jpg` with your own profile picture (150x150px recommended)
5. Modify `styles.css` to change colors and styling if desired
6. Update `script.js` for additional functionality

## File Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `script.js` - JavaScript for interactivity
- `profile.jpg` - Profile picture (you need to add this)

## Customization

- Edit the personal information in `index.html`
- Add your work experience in the "Work Experience" section
- Update skills in the "Skills" section
- Modify contact information
- Change colors and fonts in `styles.css`

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the [MIT License](LICENSE).

## React + Node.js (new scaffold)

I added a minimal Express backend and a Vite + React frontend to simplify backend integration.

- **Server:** [server/index.js](server/index.js) — simple Express API at `/api/portfolio`.
- **Frontend:** [frontend/src/App.jsx](frontend/src/App.jsx) — React app (Vite) that fetches the API.

Quick start:

1. Install server dependencies and start the server:

```powershell
cd server
npm install
npm start
```

2. In a separate terminal, run the frontend dev server:

```powershell
cd frontend
npm install
npm run dev
```

3. To build the frontend and serve it from the backend:

```powershell
cd frontend
npm install
npm run build
cd ../server
npm start
```

If you'd like, I can run the installs and start the dev servers for you.