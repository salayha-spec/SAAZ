# 🚀 Quick Start Guide for SAAZ

Get your SAAZ application up and running in minutes!

## Prerequisites Check

Make sure you have these installed:
- ✅ Node.js (v14+) - Already installed: v22.20.0
- ✅ npm - Already installed: 10.9.3
- ⚠️  MongoDB - Either install locally OR use MongoDB Atlas (free cloud option)

## Option 1: Using Local MongoDB

### Step 1: Install MongoDB
If you don't have MongoDB installed:
```bash
# For Ubuntu/Debian
sudo apt-get install mongodb

# For MacOS
brew install mongodb-community

# Start MongoDB
sudo systemctl start mongodb  # Linux
brew services start mongodb-community  # MacOS
```

### Step 2: Install Dependencies
```bash
# Install backend dependencies
cd /workspace/server
npm install

# Install frontend dependencies (open new terminal)
cd /workspace/client
npm install
```

### Step 3: Seed the Database
```bash
cd /workspace/server
node seedData.js
```

### Step 4: Start Both Servers

**Terminal 1 (Backend):**
```bash
cd /workspace/server
npm start
```

**Terminal 2 (Frontend):**
```bash
cd /workspace/client
npm start
```

### Step 5: Open Your Browser
Visit: `http://localhost:3000`

---

## Option 2: Using MongoDB Atlas (Cloud - Recommended for Quick Setup)

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a new cluster (choose the free tier)
4. Click "Connect" on your cluster
5. Choose "Connect your application"
6. Copy the connection string

### Step 2: Update Environment Variables
```bash
cd /workspace/server
# Edit the .env file
nano .env  # or use any text editor
```

Replace the MONGODB_URI line with your Atlas connection string:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/saaz?retryWrites=true&w=majority
```

### Step 3: Install & Run
```bash
# Install backend dependencies
cd /workspace/server
npm install

# Seed the database
node seedData.js

# Start backend (Terminal 1)
npm start

# Install frontend dependencies (Terminal 2)
cd /workspace/client
npm install

# Start frontend
npm start
```

### Step 4: Open Your Browser
Visit: `http://localhost:3000`

---

## 🎉 What You'll See

Your SAAZ homepage will feature:
1. **Hero Section**: Large "SAAZ" branding with tagline
2. **Satisfaction Stats**: 98% customer satisfaction, 10,000+ students
3. **Testimonials**: Customer reviews with star ratings
4. **Contact Section**: Phone, email, and location info

---

## 🔧 Troubleshooting

### MongoDB Connection Error
If you see "MongoDB connection error":
- **Local**: Make sure MongoDB is running (`sudo systemctl status mongodb`)
- **Atlas**: Check your connection string in `.env` file
- **Firewall**: Atlas requires IP whitelist (add your IP in Atlas dashboard)

### Port Already in Use
If port 3000 or 5000 is taken:
```bash
# Kill process on port
sudo lsof -t -i:3000 | xargs kill -9  # Frontend
sudo lsof -t -i:5000 | xargs kill -9  # Backend
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📊 Testing the API

Test if your backend is working:
```bash
# Health check
curl http://localhost:5000/api/health

# Get testimonials
curl http://localhost:5000/api/testimonials

# Get universities
curl http://localhost:5000/api/universities
```

---

## 🎯 Next Steps

Once you have the basic homepage running, you can:
1. Customize testimonials in the database
2. Add more universities
3. Migrate other pages (Admissions, Internships, etc.)
4. Customize the design and colors
5. Add authentication features

---

## 💡 Development Tips

- **Frontend hot reload**: Changes auto-refresh at `localhost:3000`
- **Backend hot reload**: Use `npm run dev` (with nodemon)
- **View database**: Use MongoDB Compass or Atlas web interface
- **API testing**: Use Postman or Thunder Client

---

Need help? Check the main README.md for detailed documentation!
