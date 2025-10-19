const express = require('express');
const router = express.Router();
const University = require('../models/University');

// GET all universities
router.get('/', async (req, res) => {
  try {
    const universities = await University.find({ isActive: true })
      .sort({ ranking: 1 });
    res.json(universities);
  } catch (error) {
    console.error('Error fetching universities:', error);
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
});

// POST search universities based on criteria
router.post('/search', async (req, res) => {
  try {
    const { matricMarks, interMarks, desiredMajor } = req.body;

    if (!matricMarks || !interMarks || !desiredMajor) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Find universities that match the criteria
    const universities = await University.find({
      isActive: true,
      majors: desiredMajor,
      'requirements.matricMarks': { $lte: matricMarks },
      'requirements.interMarks': { $lte: interMarks }
    }).sort({ ranking: 1 });

    res.json(universities);
  } catch (error) {
    console.error('Error searching universities:', error);
    res.status(500).json({ error: 'Failed to search universities' });
  }
});

// POST create new university
router.post('/', async (req, res) => {
  try {
    const university = new University(req.body);
    await university.save();
    res.status(201).json(university);
  } catch (error) {
    console.error('Error creating university:', error);
    res.status(500).json({ error: 'Failed to create university' });
  }
});

// GET single university by ID
router.get('/:id', async (req, res) => {
  try {
    const university = await University.findById(req.params.id);
    if (!university) {
      return res.status(404).json({ error: 'University not found' });
    }
    res.json(university);
  } catch (error) {
    console.error('Error fetching university:', error);
    res.status(500).json({ error: 'Failed to fetch university' });
  }
});

// PUT update university
router.put('/:id', async (req, res) => {
  try {
    const university = await University.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!university) {
      return res.status(404).json({ error: 'University not found' });
    }

    res.json(university);
  } catch (error) {
    console.error('Error updating university:', error);
    res.status(500).json({ error: 'Failed to update university' });
  }
});

// DELETE university (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const university = await University.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!university) {
      return res.status(404).json({ error: 'University not found' });
    }

    res.json({ message: 'University deleted successfully' });
  } catch (error) {
    console.error('Error deleting university:', error);
    res.status(500).json({ error: 'Failed to delete university' });
  }
});

module.exports = router;
