# Personal Academic Website

This project is a personal academic website built using Vue.js and the Bootstrap frontend framework. It serves as a platform to showcase academic achievements, publications, and professional information.

## Project Structure

```
personal-academic-website
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── assets              # Directory for static assets (images, fonts, styles)
│   ├── components
│   │   └── AcademicProfile.vue  # Vue component for academic profile section
│   ├── views
│   │   └── Home.vue        # Vue view component for the homepage
│   ├── App.vue             # Root Vue component of the application
│   └── main.js             # Entry point of the Vue application
├── package.json            # npm configuration file
└── README.md               # Documentation for the project
```

## Features

- **Responsive Design**: Utilizes Bootstrap for a mobile-friendly layout.
- **Vue.js Components**: Modular structure with reusable components.
- **Dynamic Content**: Ability to update academic information easily.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd personal-academic-website
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run serve
   ```

4. **Open your browser** and navigate to `http://localhost:8080` to view the application.

## Usage Guidelines

- Modify the `src/components/AcademicProfile.vue` to update your academic profile information.
- Customize the `src/views/Home.vue` to include your introduction and achievements.
- Add any static assets (images, fonts) to the `src/assets` directory.

## License

This project is licensed under the MIT License.