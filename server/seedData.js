const mongoose = require('mongoose');
require('dotenv').config();
const Testimonial = require('./models/Testimonial');
const University = require('./models/University');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/saaz';

// Sample testimonials
const testimonials = [
  {
    text: 'SAAZ made applying to university so much easier! The admission dates and guidelines were a lifesaver. Highly recommend!',
    author: 'Fatima K.',
    rating: 5
  },
  {
    text: 'The AI mentor feature really helped me understand my options and plan my future. I feel so much more confident now!',
    author: 'Ahmed R.',
    rating: 5
  },
  {
    text: 'Connecting with other students and tutors through SAAZ has been invaluable. Truly a supportive and inspiring community.',
    author: 'Zara B.',
    rating: 5
  },
  {
    text: 'I found the perfect internship through SAAZ! The platform is so user-friendly and helpful.',
    author: 'Hassan M.',
    rating: 5
  },
  {
    text: 'The community events feature helped me network with so many like-minded students. Amazing platform!',
    author: 'Ayesha N.',
    rating: 5
  }
];

// Sample universities
const universities = [
  {
    name: 'LUMS (Lahore University of Management Sciences)',
    location: 'Lahore',
    majors: ['Computer Science', 'Business Administration', 'Electrical Engineering'],
    requirements: {
      matricMarks: 900,
      interMarks: 800
    },
    applicationLink: 'https://lums.edu.pk/admissions',
    description: 'One of Pakistan\'s leading universities offering world-class education.',
    ranking: 1
  },
  {
    name: 'NUST (National University of Sciences and Technology)',
    location: 'Islamabad',
    majors: ['Computer Science', 'Electrical Engineering', 'Business Administration'],
    requirements: {
      matricMarks: 850,
      interMarks: 750
    },
    applicationLink: 'https://nust.edu.pk/admissions',
    description: 'Premier institution for science and technology education in Pakistan.',
    ranking: 2
  },
  {
    name: 'Aga Khan University',
    location: 'Karachi',
    majors: ['Pre-Medical', 'Business Administration'],
    requirements: {
      matricMarks: 880,
      interMarks: 800
    },
    applicationLink: 'https://www.aku.edu/admissions',
    description: 'Leading medical and healthcare education institution.',
    ranking: 3
  },
  {
    name: 'IBA (Institute of Business Administration)',
    location: 'Karachi',
    majors: ['Business Administration', 'Computer Science'],
    requirements: {
      matricMarks: 850,
      interMarks: 780
    },
    applicationLink: 'https://www.iba.edu.pk/admissions',
    description: 'Top business school in Pakistan with excellent placement records.',
    ranking: 4
  },
  {
    name: 'NCA (National College of Arts)',
    location: 'Lahore',
    majors: ['Fine Arts'],
    requirements: {
      matricMarks: 700,
      interMarks: 650
    },
    applicationLink: 'https://nca.edu.pk/admissions',
    description: 'Premier institution for arts, design, and architecture.',
    ranking: 5
  },
  {
    name: 'FAST (Foundation for Advancement of Science and Technology)',
    location: 'Multiple Cities',
    majors: ['Computer Science', 'Electrical Engineering'],
    requirements: {
      matricMarks: 800,
      interMarks: 720
    },
    applicationLink: 'https://www.nu.edu.pk/Admissions',
    description: 'Leading technology university with campuses across Pakistan.',
    ranking: 6
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Testimonial.deleteMany({});
    await University.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert testimonials
    const insertedTestimonials = await Testimonial.insertMany(testimonials);
    console.log(`✅ Inserted ${insertedTestimonials.length} testimonials`);

    // Insert universities
    const insertedUniversities = await University.insertMany(universities);
    console.log(`✅ Inserted ${insertedUniversities.length} universities`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\nSummary:');
    console.log(`  - ${insertedTestimonials.length} Testimonials`);
    console.log(`  - ${insertedUniversities.length} Universities`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n👋 Disconnected from MongoDB');
    process.exit(0);
  }
}

seedDatabase();
