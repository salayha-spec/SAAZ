# SAAZ - University Application Platform

**Your Journey to Success: Empowering your mind, supporting your journey, securing your future.**

SAAZ is a comprehensive web platform designed to help students in Pakistan navigate their educational journey, from finding the right university to connecting with tutors, discovering internships, and getting AI-powered mentorship.

## 🚀 Project Structure

This project is built with a modern **MERN stack** architecture:

```
workspace/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── Contact.jsx
│   │   ├── pages/         # Page components
│   │   │   └── Home.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── server/                # Node.js/Express backend
│   ├── models/           # MongoDB schemas
│   │   ├── Testimonial.js
│   │   └── University.js
│   ├── routes/           # API routes
│   │   ├── testimonials.js
│   │   └── universities.js
│   ├── server.js         # Main server file
│   ├── seedData.js       # Database seeding script
│   ├── .env.example      # Environment variables template
│   └── package.json
│
└── README.md
```

## ✨ Features

### Current Features (Implemented)
- 🏠 **Modern Homepage**: Stunning hero section with website branding
- ⭐ **Customer Satisfaction Display**: Showcases user satisfaction statistics (98% satisfaction rate, 10,000+ happy students)
- 💬 **Dynamic Testimonials**: Customer reviews fetched from MongoDB database
- 📞 **Contact Information**: Easy-to-find contact details (phone, email, location)
- 🎨 **Modern UI/UX**: Beautiful design with glowing effects and smooth animations
- 📱 **Responsive Design**: Works seamlessly on all devices

### Planned Features
- 🎓 University admissions search and application system
- 👨‍🏫 Connect with tutors and instructors
- 💼 Internship listings and applications
- 🤖 AI-powered mentor for career guidance
- 💬 Community chat hub
- 📅 Educational events calendar

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas cloud)
- npm or yarn

### 1. Clone the Repository
```bash
cd /workspace
```

### 2. Set Up the Backend

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB connection string
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/saaz
# NODE_ENV=development

# Seed the database with initial data
node seedData.js

# Start the server
npm start

# Or for development with auto-restart:
npm run dev
```

The backend server will start on `http://localhost:5000`

### 3. Set Up the Frontend

```bash
# Open a new terminal and navigate to client directory
cd client

# Install dependencies
npm install

# Start the React development server
npm start
```

The frontend will start on `http://localhost:3000`

## 🗄️ Database Setup

### Local MongoDB
If you have MongoDB installed locally:
```bash
# Start MongoDB
mongod

# The app will connect to mongodb://localhost:27017/saaz by default
```

### MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in `server/.env`:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/saaz?retryWrites=true&w=majority
   ```

## 🌱 Seeding Data

To populate your database with sample testimonials and universities:

```bash
cd server
node seedData.js
```

This will create:
- 5 sample testimonials
- 6 sample universities with different requirements and majors

## 🔗 API Endpoints

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Create a new testimonial
- `GET /api/testimonials/:id` - Get a specific testimonial
- `PUT /api/testimonials/:id` - Update a testimonial
- `DELETE /api/testimonials/:id` - Soft delete a testimonial

### Universities
- `GET /api/universities` - Get all universities
- `POST /api/universities/search` - Search universities by criteria
- `POST /api/universities` - Create a new university
- `GET /api/universities/:id` - Get a specific university
- `PUT /api/universities/:id` - Update a university
- `DELETE /api/universities/:id` - Soft delete a university

### Health Check
- `GET /api/health` - Check if the API is running

## 🎨 Design Philosophy

SAAZ features a **modern, tech-inspired design** with:
- **Dark theme** with cyan/teal accents (#00ffc8)
- **Orbitron font** for headings (futuristic feel)
- **Poppins font** for body text (clean readability)
- **Glowing effects** for emphasis and interactivity
- **Smooth animations** for better user experience
- **Responsive layouts** that work on all screen sizes

## 📝 Environment Variables

### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/saaz
NODE_ENV=development
```

## 🚀 Deployment

### Backend (Heroku/Railway/Render)
1. Set up environment variables on your hosting platform
2. Ensure MongoDB URI points to your production database
3. Deploy the `server` directory

### Frontend (Vercel/Netlify)
1. Build the React app: `npm run build`
2. Deploy the `build` directory
3. Set up environment variables if needed

## 🤝 Contributing

This project is part of an educational platform to help students in Pakistan. Contributions are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

For questions or support:
- **Email**: admin@saaz.com.pk
- **Phone**: +92 3XX XXXXXXX

---

**Built with ❤️ for Pakistani students seeking their educational dreams**
