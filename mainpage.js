const semesterSubjects = [{
        name: "Semester 1",
        subjects: [{
            name: "Communicative English",
            credits: 2
        }, {
            name: "Matrices,Differential and Integral Calculus",
            credits: 4
        }, {
            name: "Engineering Chemistry",
            credits: 3
        }, {
            name: "Programming for Problem Solving in C",
            credits: 3
        }, {
            name: "Engineering Graphics",
            credits: 4
        }, {
            name: "Chemistry Laboratory",
            credits: 1
        }, {
            name: "C Programming Laboratory",
            credits: 2
        }, {
            name: "Communication English Laboratory",
            credits: 1
        }]
    }, {
        name: "Semester 2",
        subjects: [{
            name: "Vector Calculas and Complex Functions",
            credits: 4
        }, {
            name: "Engineering Physics",
            credits: 3
        }, {
            name: "Programming for Problem Solving in Python",
            credits: 4
        }, {
            name: "Basic Electrical Electronics And Communication Enginnering",
            credits: 3
        }, {
            name: "Introduction To Information And Computing Technology",
            credits: 3
        }, {
            name: "Constitution Of India",
            credits: 0
        }, {
            name: "Physics Laboratory",
            credits: 1
        }, {
            name: "Basic Electrical Electronics And Communication Enginnering Laboratory",
            credits: 1
        }, {
            name: "Workshop Practice",
            credits: 2
        }, {
            name: "QA/VR",
            credits: 1
        }]
    },

    {
        name: "Semester 3",
        subjects: [{
            name: "Data Structures",
            credits: 3
        }, {
            name: "Digital Logic Circuits",
            credits: 4
        }, {
            name: "Object Oriented Programming",
            credits: 3
        }, {
            name: "Computer Architecture",
            credits: 3
        }, {
            name: "Discrete Mathematics",
            credits: 4
        }, {
            name: "Fundamental Of Nano Science",
            credits: 0
        }, {
            name: "Data Structure Laboratory",
            credits: 1
        }, {
            name: "Object Oriented Programming Laboratory",
            credits: 1
        }, {
            name: "Personality And Character Development",
            credits: 0
        }, {
            name: "QA/BS",
            credits: 1
        }]
    },

    {
        name: "Semester 4",
        subjects: [{
            name: "Operating System",
            credits: 3
        }, {
            name: "Design And Analysis Of Algorithms",
            credits: 4
        }, {
            name: "Object Oriented Software Engineering",
            credits: 3
        }, {
            name: "Database Management System",
            credits: 3
        }, {
            name: "Java Programming",
            credits: 3
        }, {
            name: "Probability And Queueing Theory",
            credits: 4
        }, {
            name: "Environmental Science And Engineering",
            credits: 0
        }, {
            name: "Operating System Laboratory",
            credits: 1
        }, {
            name: "Programming in JAVA Laboratory",
            credits: 1
        }, {
            name: "Database Management System",
            credits: 1
        }, {
            name: "QA/CS",
            credits: 1
        }]
    },

    {
        name: "Semester 5",
        subjects: [{
            name: "Internet Programming",
            credits: 3
        }, {
            name: "Theory Of Computation",
            credits: 4
        }, {
            name: "Computer Network",
            credits: 3
        }, {
            name: "Professional Ethics And Human Values",
            credits: 3
        }, {
            name: "Professional Elective-I",
            credits: 3
        }, {
            name: "Open Elective-I",
            credits: 3
        }, {
            name: "Internet Programming Laboratory",
            credits: 1
        }, {
            name: "Computer Network Laboratory",
            credits: 1
        }, {
            name: "QA/SS",
            credits: 1
        }]
    },

    {
        name: "Semester 6",
        subjects: [{
            name: "Mobile Computing",
            credits: 3
        }, {
            name: "Compiler Design",
            credits: 3
        }, {
            name: "Artificial Intelligence",
            credits: 4
        }, {
            name: "Resource Management And Techniques",
            credits: 3
        }, {
            name: "Professional Elective-II",
            credits: 3
        }, {
            name: "Open Elective-II",
            credits: 3
        }, {
            name: "Mobile Application Development Laboratory",
            credits: 1
        }, {
            name: "Compiler Design Laboratory",
            credits: 1
        }, {
            name: "Internship",
            credits: 1
        }, {
            name: "Mini Project",
            credits: 1
        }]
    },

    {
        name: "Semester 7",
        subjects: [{
            name: "Cryptography And Network Security",
            credits: 3
        }, {
            name: "Data Science Using Python",
            credits: 3
        }, {
            name: "Cloud Computing And Virtualization",
            credits: 3
        }, {
            name: "Professional Elective-III",
            credits: 3
        }, {
            name: "Professional Elective-IV",
            credits: 3
        }, {
            name: "Open Elective-III",
            credits: 3
        }, {
            name: "Cloud Computing Laboratory",
            credits: 2
        }, {
            name: "Data Science Using Python Laboratory",
            credits: 2
        }, ]
    },

    {
        name: "Semester 8",
        subjects: [{
            name: "Professional Elective-V",
            credits: 3
        }, {
            name: "Professional Elective-VI",
            credits: 3
        }, {
            name: "Project Work",
            credits: 6
        }]
    },

];

let currentSemesterIndex = 0;

function loadSemesters() {
    const semestersContainer = document.getElementById('semesters');
    semestersContainer.innerHTML = '';

    for (let i = 0; i <= currentSemesterIndex; i++) {
        const semester = semesterSubjects[i];
        const semesterContainer = document.createElement('div');
        semesterContainer.className = 'semester-container';

        const semesterTitle = document.createElement('h3');
        semesterTitle.textContent = semester.name;
        semesterContainer.appendChild(semesterTitle);

        const table = document.createElement('table');
        table.className = 'subject-list';

        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `
        <th>Subject</th>
        <th>Grade</th>
        <th>Credit Hours</th>
    `;
        table.appendChild(headerRow);

        semester.subjects.forEach(subject => {
            const row = document.createElement('tr');

            const subjectCell = document.createElement('td');
            subjectCell.textContent = subject.name;

            const gradeCell = document.createElement('td');
            const gradeSelect = document.createElement('select');
            ['O', 'A+', 'A', 'B+', 'B', 'C+', 'C'].forEach(grade => {
                const option = document.createElement('option');
                option.value = grade;
                option.textContent = grade;
                gradeSelect.appendChild(option);
            });
            gradeSelect.onchange = calculateCGPA;
            gradeCell.appendChild(gradeSelect);

            const creditsCell = document.createElement('td');
            creditsCell.textContent = subject.credits;

            row.appendChild(subjectCell);
            row.appendChild(gradeCell);
            row.appendChild(creditsCell);

            table.appendChild(row);
        });

        semesterContainer.appendChild(table);
        semestersContainer.appendChild(semesterContainer);
    }
}







function calculateCGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;
    let gpa = 0;

    const semesters = document.querySelectorAll('.semester-container');
    semesters.forEach((semester, semesterIndex) => {
        let semesterCredits = 0;
        let semesterGradePoints = 0;

        const rows = semester.querySelectorAll('.subject-list tr');
        rows.forEach((row, rowIndex) => {
            if (rowIndex === 0) return; // Skip header row
            const grade = row.cells[1].querySelector('select').value;
            const credits = parseInt(row.cells[2].textContent);
            semesterCredits += credits;
            semesterGradePoints += getGradePoint(grade) * credits;
        });

        gpa = semesterGradePoints / semesterCredits;
        document.getElementById('overall-gpa-display').textContent = `GPA for Current Semester: ${gpa.toFixed(2)}`;

        totalCredits += semesterCredits;
        totalGradePoints += semesterGradePoints;
    });

    const overallCGPA = totalGradePoints / totalCredits;
    document.getElementById('overall-cgpa-display').textContent = `Overall CGPA: ${overallCGPA.toFixed(2)}`;
}

function addSemester() {
    if (currentSemesterIndex < semesterSubjects.length - 1) {
        currentSemesterIndex++;

        calculateCGPA();
        loadSemesters();
    }
}

function getGradePoint(grade) {
    switch (grade) {
        case 'O':
            return 10;
        case 'A+':
            return 9;
        case 'A':
            return 8;
        case 'B+':
            return 7;
        case 'B':
            return 6;
        case 'C+':
            return 5;
        case 'C':
            return 4;
        default:
            return 0;
    }
}

// Load the first semester initially
loadSemesters();

// Event listener for screenshot button (optional)
document.getElementById('screenshot-button').addEventListener('click', function() {
    const captureArea = document.getElementById('semesters');
    html2canvas(captureArea).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'screenshot.png';
        link.click();
    });
});