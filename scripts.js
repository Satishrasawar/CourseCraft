document.addEventListener('DOMContentLoaded', () => {
    const courseContainer = document.getElementById('course-container');
    const testimonialContainer = document.getElementById('testimonial-container');
    const searchInput = document.getElementById('search-input');
    const loginForm = document.getElementById('login-form');
    const coursesList = document.getElementById('courses-list');
    const coursesContainer = document.getElementById('courses-container');

    if (!coursesList || !coursesContainer) {
        console.error('Error: #courses-list or #courses-container not found in the DOM!');
        return;
    }

    // Course data with sample videos and pictures
    const courses = [
        { 
            title: 'Executive Post Graduate Certification in Data Science & Artificial Intelligence', 
            institution: 'IIT Roorkee', 
            duration: '11 Months',
            syllabus: `
                <ol>
                    <li>Preparatory Sessions
                        <ul>
                            <li>Python & Linux</li>
                        </ul>
                    </li>
                    <li>Data Transformation
                        <ul>
                            <li>Using SQL</li>
                        </ul>
                    </li>
                    <li>Python Libraries
                        <ul>
                            <li>For Data Science</li>
                        </ul>
                    </li>
                    <li>Inferential Analytics</li>
                    <li>Machine Learning
                        <ul>
                            <li>Supervised & Unsupervised</li>
                        </ul>
                    </li>
                    <li>Power BI</li>
                    <li>Business Case Studies
                        <ul>
                            <li>Excel Analytics</li>
                        </ul>
                    </li>
                </ol>
            `,
            photo: '/images/data-science-sample.jpg',
            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        { 
            title: 'Data Science and Machine Learning Course with Guaranteed Placement', 
            institution: 'MIT', 
            duration: '8 Months',
            syllabus: `
                <ol>
                    <li>Introduction to Python</li>
                    <li>Basic Data Types</li>
                    <li>Variables</li>
                    <li>Operators</li>
                    <li>Data Structures</li>
                    <li>Control Flow</li>
                    <li>Functions</li>
                </ol>
            `,
            photo: '/images/ml-sample.jpg',
            video: '/videos/ml-intro-sample.mp4'
        },
        { 
            title: 'Ex. M.Tech in Artificial Intelligence & ML', 
            institution: 'IIT Jammu', 
            duration: '2 Years',
            syllabus: `
                <ol>
                    <li>Introduction to Power BI</li>
                    <li>Power BI Desktop Installation And User Interface</li>
                    <li>Data Connectivity and Transformation
                        <ul>
                            <li>Connecting to Data Sources in Power BI Desktop</li>
                            <li>Data Transformation using Power Query Editors</li>
                            <li>Data Transformation Example I</li>
                            <li>Data Transformation Example II</li>
                            <li>Data Transformation Example III</li>
                            <li>Data Transformation Example IV</li>
                        </ul>
                    </li>
                    <li>Data Modeling And DAX
                        <ul>
                            <li>Introduction to Data Modeling</li>
                            <li>Relationship And Their Properties</li>
                            <li>Data Analysis Expression (DAX)</li>
                        </ul>
                    </li>
                    <li>DAX Applications
                        <ul>
                            <li>Data Expression Application I</li>
                            <li>Data Expression Application II</li>
                            <li>Data Expression Application III</li>
                        </ul>
                    </li>
                    <li>Report Creation and Data Visualization
                        <ul>
                            <li>Data Visualization and Report Creation</li>
                            <li>Enhancing and Publishing Reports</li>
                            <li>Identifying Trends and Patterns</li>
                            <li>Building and Publishing Paginated Reports</li>
                        </ul>
                    </li>
                    <li>Dash Board Creation, Sharing, and Collaborations
                        <ul>
                            <li>Creating Managing Dashboards</li>
                            <li>Managing Dataset Configuration and permissions</li>
                            <li>Creating and Managing Workspaces and Apps</li>
                        </ul>
                    </li>
                    <li>Scaler Function
                        <ul>
                            <li>Common Scalar Function</li>
                            <li>Aggregation Functions</li>
                            <li>PRO TIP:SUM&SUMX</li>
                            <li>Rounding Functions</li>
                            <li>Information Functions</li>
                            <li>Conversion Functions</li>
                            <li>Logical Functions :SWITCH</li>
                            <li>Logical Functions :COALESCE</li>
                        </ul>
                    </li>
                    <li>Advanced Caluculate
                        <ul>
                            <li>Expand Tables</li>
                            <li>Context Transition</li>
                            <li>Evaluation Order</li>
                            <li>Calculate Modifier</li>
                            <li>REMOVE FILTERS</li>
                            <li>KEEP FILTERS</li>
                        </ul>
                    </li>
                    <li>Table And Filter Functions
                        <ul>
                            <li>Common Table and Filter Functions</li>
                            <li>DISTINCTS</li>
                            <li>VALUES</li>
                            <li>SELECTEDVALUE</li>
                            <li>ALLEXCEPT</li>
                            <li>ALLSELECTED</li>
                            <li>SELECTCOLUMNS</li>
                            <li>ADDCOLUMNS</li>
                            <li>SUMMERISE</li>
                            <li>Generating New data</li>
                            <li>Row</li>
                            <li>Data Table</li>
                            <li>Generate series</li>
                            <li>The Table Constructors</li>
                        </ul>
                    </li>
                    <li>Relationship Functions
                        <ul>
                            <li>Physical Vs Virtual Relationship</li>
                            <li>RELATED</li>
                            <li>RELATED TABLE</li>
                            <li>USE RELATIONSHIP</li>
                            <li>CROSS FILTER</li>
                            <li>TREATAS (SALES TARGETS)</li>
                        </ul>
                    </li>
                    <li>Advanced Time Intelligence
                        <ul>
                            <li>Automatic Date Tables</li>
                            <li>Date table Requirements</li>
                            <li>CALENDAR AUTO</li>
                            <li>Date Formatting</li>
                            <li>Common Time Intelligence Functions</li>
                            <li>Time period</li>
                            <li>Week Based Calculation</li>
                            <li>Previous Fiscal Week</li>
                            <li>Fiscal Period to Date</li>
                        </ul>
                    </li>
                    <li>Project
                        <ul>
                            <li>Capstone Project</li>
                        </ul>
                    </li>
                </ol>
            `,
            photo: '/images/ai-ml-sample.jpg',
            video: 'https://www.youtube.com/embed/xyz123'
        },
        { 
            title: 'Generative AI and Prompt Engineering Course', 
            institution: 'Microsoft', 
            duration: 'Live Sessions: 50+',
            syllabus: `
                <ol>
                    <li>Fundamentals of Generative AI Frameworks</li>
                </ol>
            `,
            photo: '/images/gen-ai-sample.jpg',
            video: '/videos/gen-ai-sample.mp4'
        },
        { 
            title: 'Artificial Intelligence Course', 
            institution: 'Microsoft', 
            duration: 'Live Classes: 100 Hrs',
            syllabus: `
                <ol>
                    <li>Introduction to Machine Learning</li>
                    <li>Supervised Learning</li>
                    <li>Unsupervised Learning</li>
                </ol>
            `,
            photo: '/images/ai-sample.jpg',
            video: 'https://www.youtube.com/embed/abc789'
        },
        { 
            title: 'Machine Learning Course', 
            institution: 'Microsoft', 
            duration: 'Live Classes: 100 Hrs',
            syllabus: `
                <ol>
                    <li>Introduction to Machine Learning</li>
                    <li>Supervised Learning</li>
                    <li>Unsupervised Learning</li>
                </ol>
            `,
            photo: '/images/ml-advanced-sample.jpg',
            video: '/videos/ml-advanced-sample.mp4'
        }
    ];

    // Static testimonial data (removed from display but kept for potential future use)
    const testimonials = [
        { name: 'Nikhil YN', position: 'Cloud Engineer at Ciber Global', content: 'I completed the GCP Course. It helped me change my career path to DevOps and Cloud...' },
        { name: 'Rajesh Venganti', position: 'Sr. Software Engineer at Wipro', content: 'I was an Associate at Capgemini but due to some issues, I had to drop...' },
        { name: 'Chandradip Banerjee', position: 'Sr. Software Engineer at Accenture', content: 'I am a Software Engineer at Accenture. I had good knowledge of SQL server...' }
    ];

    // Toggle courses list
    window.toggleCoursesList = function() {
        console.log('ToggleCoursesList called');
        if (!coursesList || !coursesContainer) {
            console.error('Error: #courses-list or #courses-container not accessible!');
            return;
        }
        coursesList.classList.toggle('hidden');
        if (!coursesList.classList.contains('hidden') && coursesContainer.children.length === 0) {
            console.log('Populating courses list');
            try {
                courses.forEach(course => {
                    const card = document.createElement('div');
                    card.className = 'course-card';
                    let mediaHtml = '';
                    if (course.photo) {
                        mediaHtml = `<div class="course-media"><img src="${course.photo}" alt="${course.title} Preview"></div>`;
                    } else if (course.video) {
                        if (course.video.includes('youtube.com')) {
                            mediaHtml = `<div class="course-media"><iframe src="${course.video}" allowfullscreen></iframe></div>`;
                        } else {
                            mediaHtml = `<div class="course-media"><video controls><source src="${course.video}" type="video/mp4">Your browser does not support the video tag.</video></div>`;
                        }
                    }
                    card.innerHTML = `
                        <div class="flex items-center">
                            <div>
                                <h3 class="text-lg font-semibold">${course.title}</h3>
                                <p class="text-gray-600">${course.institution} - ${course.duration}</p>
                            </div>
                        </div>
                        ${mediaHtml}
                        <a href="#" class="learn-btn mt-2 inline-block">Learn for free</a>
                        <button class="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 toggle-syllabus">View Syllabus</button>
                        <div class="syllabus">${course.syllabus}</div>
                    `;
                    coursesContainer.appendChild(card);
                });
                // Add event listener for syllabus toggle
                document.querySelectorAll('.toggle-syllabus').forEach(button => {
                    button.addEventListener('click', function() {
                        const syllabus = this.nextElementSibling;
                        syllabus.classList.toggle('show');
                        this.textContent = syllabus.classList.contains('show') ? 'Hide Syllabus' : 'View Syllabus';
                    });
                });
            } catch (error) {
                console.error('Error populating courses list:', error);
            }
        }
    };

    // Display testimonials (removed from active use)
    function displayTestimonials() {
        // No longer called since section is removed
    }

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        coursesContainer.innerHTML = '';
        const searchTerm = e.target.value.toLowerCase();
        const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchTerm));
        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            let mediaHtml = '';
            if (course.photo) {
                mediaHtml = `<div class="course-media"><img src="${course.photo}" alt="${course.title} Preview"></div>`;
            } else if (course.video) {
                if (course.video.includes('youtube.com')) {
                    mediaHtml = `<div class="course-media"><iframe src="${course.video}" allowfullscreen></iframe></div>`;
                } else {
                    mediaHtml = `<div class="course-media"><video controls><source src="${course.video}" type="video/mp4">Your browser does not support the video tag.</video></div>`;
                }
            }
            card.innerHTML = `
                <div class="flex items-center">
                    <div>
                        <h3 class="text-lg font-semibold">${course.title}</h3>
                        <p class="text-gray-600">${course.institution} - ${course.duration}</p>
                    </div>
                </div>
                ${mediaHtml}
                <a href="#" class="learn-btn mt-2 inline-block">Learn for free</a>
                <button class="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 toggle-syllabus">View Syllabus</button>
                <div class="syllabus">${course.syllabus}</div>
            `;
            coursesContainer.appendChild(card);
        });
        // Add event listener for syllabus toggle in search results
        document.querySelectorAll('.toggle-syllabus').forEach(button => {
            button.addEventListener('click', function() {
                const syllabus = this.nextElementSibling;
                syllabus.classList.toggle('show');
                this.textContent = syllabus.classList.contains('show') ? 'Hide Syllabus' : 'View Syllabus';
            });
        });
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`Login Attempt:\nUsername: ${username}\nPassword: ${password}`);
        document.getElementById('login-modal').classList.add('hidden');
        loginForm.reset();
    });

    // Initial display
    displayTestimonials();
});