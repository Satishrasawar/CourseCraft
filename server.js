const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Connect to SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Create tables
db.serialize(() => {
    // Courses table
    db.run(`CREATE TABLE IF NOT EXISTS courses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        cohort TEXT NOT NULL,
        duration TEXT NOT NULL
    )`);

    // Testimonials table
    db.run(`CREATE TABLE IF NOT EXISTS testimonials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        position TEXT NOT NULL,
        content TEXT NOT NULL
    )`);

    // Insert initial data (if tables are empty)
    db.get("SELECT COUNT(*) as count FROM courses", (err, row) => {
        if (row.count === 0) {
            const initialCourses = [
                ["Data Science Course", "Next Cohort: 14th Jun 2025", "7 Months"],
                ["Adv. Certification in DevOps & Cloud Computing", "Next Cohort: 28th Sep 2025", "6 Months"],
                ["Supply Chain and Logistics Management by IIM Mumbai", "Next Cohort: 3rd Aug 2025", "6 Months"]
            ];
            const stmt = db.prepare("INSERT INTO courses (title, cohort, duration) VALUES (?, ?, ?)");
            for (let course of initialCourses) {
                stmt.run(course);
            }
            stmt.finalize();
        }
    });

    db.get("SELECT COUNT(*) as count FROM testimonials", (err, row) => {
        if (row.count === 0) {
            const initialTestimonials = [
                ["Nikhil YN", "Cloud Engineer at Ciber Global", "I completed the GCP Course. It helped me change my career path to DevOps and Cloud..."],
                ["Rajesh Venganti", "Sr. Software Engineer at Wipro", "I was an Associate at Capgemini but due to some issues, I had to drop..."],
                ["Chandradip Banerjee", "Sr. Software Engineer at Accenture", "I am a Software Engineer at Accenture. I had good knowledge of SQL server..."]
            ];
            const stmt = db.prepare("INSERT INTO testimonials (name, position, content) VALUES (?, ?, ?)");
            for (let testimonial of initialTestimonials) {
                stmt.run(testimonial);
            }
            stmt.finalize();
        }
    });
});

// API Endpoints
// Get all courses
app.get('/api/courses', (req, res) => {
    db.all("SELECT * FROM courses", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Add a new course
app.post('/api/courses', (req, res) => {
    const { title, cohort, duration } = req.body;
    if (!title || !cohort || !duration) {
        res.status(400).json({ error: "All fields are required" });
        return;
    }
    const stmt = db.prepare("INSERT INTO courses (title, cohort, duration) VALUES (?, ?, ?)");
    stmt.run([title, cohort, duration], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: this.lastID, title, cohort, duration });
    });
    stmt.finalize();
});

// Get all testimonials
app.get('/api/testimonials', (req, res) => {
    db.all("SELECT * FROM testimonials", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Close the database connection on server shutdown
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        }
        console.log('Database connection closed.');
        process.exit(0);
    });
});