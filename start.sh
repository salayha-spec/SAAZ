#!/bin/bash

echo "🚀 Starting SAAZ Application..."
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if MongoDB is running
echo "📊 Checking MongoDB..."
if pgrep -x "mongod" > /dev/null; then
    echo -e "${GREEN}✅ MongoDB is running${NC}"
else
    echo -e "${YELLOW}⚠️  MongoDB is not running${NC}"
    echo "Please start MongoDB first:"
    echo "  - Linux: sudo systemctl start mongodb"
    echo "  - MacOS: brew services start mongodb-community"
    echo "  - Or use MongoDB Atlas (cloud)"
    echo ""
fi

# Check if node_modules exist
echo ""
echo "📦 Checking dependencies..."

if [ ! -d "server/node_modules" ]; then
    echo -e "${YELLOW}Installing backend dependencies...${NC}"
    cd server && npm install
    cd ..
else
    echo -e "${GREEN}✅ Backend dependencies installed${NC}"
fi

if [ ! -d "client/node_modules" ]; then
    echo -e "${YELLOW}Installing frontend dependencies...${NC}"
    cd client && npm install
    cd ..
else
    echo -e "${GREEN}✅ Frontend dependencies installed${NC}"
fi

echo ""
echo "🌱 To seed the database, run:"
echo "   cd server && node seedData.js"
echo ""
echo "🚀 Starting servers..."
echo ""
echo "Backend will start on: http://localhost:5000"
echo "Frontend will start on: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Start backend in background
cd server
npm start &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend
cd ../client
npm start &
FRONTEND_PID=$!

# Wait for Ctrl+C
trap "echo ''; echo 'Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT

# Keep script running
wait
