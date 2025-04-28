
// Course Data Structure for Educational Portal

export interface Subject {
  id: string;
  name: string;
  videoId?: string; // YouTube video ID
  description: string;
}

export interface CourseCategory {
  id: string;
  name: string;
  gradient: string;
  subjects: Subject[];
}

export const courseCategories: CourseCategory[] = [
  {
    id: "maths",
    name: "MATHEMATICS",
    gradient: "bg-math-gradient",
    subjects: [
      {
        id: "m1",
        name: "Mathematics-I",
        videoId: "HfACb4rXWmk",
        description: "Calculus and Differential Equations"
      },
      {
        id: "m2",
        name: "Mathematics-II",
        videoId: "XYQcXVPyVhc",
        description: "Linear Algebra and Numerical Methods"
      },
      {
        id: "m3",
        name: "Mathematics-III",
        videoId: "dNzoLAhBUJs",
        description: "Probability and Statistics"
      },
      {
        id: "m4",
        name: "Mathematics-IV",
        videoId: "HznUFM4ZxvA",
        description: "Complex Variables and Transform Techniques"
      }
    ]
  },
  {
    id: "programming",
    name: "PROGRAMMING",
    gradient: "bg-programming-gradient",
    subjects: [
      {
        id: "c",
        name: "C Programming",
        videoId: "KJgsSFOSQv0",
        description: "Introduction to C programming language"
      },
      {
        id: "java",
        name: "Java",
        videoId: "eIrMbAQSU34",
        description: "Object-Oriented Programming with Java"
      },
      {
        id: "python",
        name: "Python",
        videoId: "rfscVS0vtbw",
        description: "Python for data science and web applications"
      },
      {
        id: "web",
        name: "Web Development",
        videoId: "916GWv2Qs08",
        description: "HTML, CSS, JavaScript and web frameworks"
      },
      {
        id: "mobile",
        name: "Mobile Development",
        videoId: "0-S5a0eXPoc",
        description: "Android and iOS app development"
      }
    ]
  },
  {
    id: "core",
    name: "CORE CSE",
    gradient: "bg-core-gradient",
    subjects: [
      {
        id: "dsa",
        name: "Data Structures & Algorithms",
        videoId: "RBSGKlAvoiM",
        description: "Fundamental data structures and algorithms"
      },
      {
        id: "daa",
        name: "Design & Analysis of Algorithms",
        videoId: "0IAPZzGSbME",
        description: "Algorithm complexity and optimization"
      },
      {
        id: "os",
        name: "Operating Systems",
        videoId: "vBURTt97EkA",
        description: "Process management, memory management, and file systems"
      },
      {
        id: "cn",
        name: "Computer Networks",
        videoId: "qiQR5rTSshw",
        description: "Network protocols and architecture"
      },
      {
        id: "dbms",
        name: "Database Management Systems",
        videoId: "4Z9KEBexzcM",
        description: "Relational databases and SQL"
      }
    ]
  },
  {
    id: "software",
    name: "SOFTWARE & ENGINEERING",
    gradient: "bg-software-gradient",
    subjects: [
      {
        id: "se",
        name: "Software Engineering",
        videoId: "O753uuutqH8",
        description: "Software development life cycle and methodologies"
      },
      {
        id: "testing",
        name: "Software Testing",
        videoId: "sO8eGL6SFsA",
        description: "Unit testing, integration testing, and test automation"
      },
      {
        id: "devops",
        name: "DevOps",
        videoId: "Xrgk023l4lI",
        description: "Continuous integration and deployment"
      },
      {
        id: "agile",
        name: "Agile Methodologies",
        videoId: "Z9QbYZh1YXY",
        description: "Scrum, Kanban, and other agile frameworks"
      }
    ]
  },
  {
    id: "intelligent",
    name: "INTELLIGENT TECH",
    gradient: "bg-intelligent-gradient",
    subjects: [
      {
        id: "ai",
        name: "Artificial Intelligence",
        videoId: "JMUxmLyrhSk",
        description: "Introduction to AI concepts and applications"
      },
      {
        id: "ml",
        name: "Machine Learning",
        videoId: "ukzFI9rgwfU",
        description: "Supervised and unsupervised learning algorithms"
      },
      {
        id: "dl",
        name: "Deep Learning",
        videoId: "BR9h47Jtqyw",
        description: "Neural networks and deep learning architectures"
      },
      {
        id: "nlp",
        name: "Natural Language Processing",
        videoId: "zPpdfK8vwgA",
        description: "Text processing and language understanding"
      }
    ]
  },
  {
    id: "emerging",
    name: "EMERGING TECH",
    gradient: "bg-emerging-gradient",
    subjects: [
      {
        id: "cloud",
        name: "Cloud Computing",
        videoId: "M988_fsOSWo",
        description: "Cloud services and deployment models"
      },
      {
        id: "iot",
        name: "Internet of Things",
        videoId: "LlhmzVL5bm8",
        description: "Connected devices and IoT architecture"
      },
      {
        id: "blockchain",
        name: "Blockchain",
        videoId: "SSo_EIwHSd4",
        description: "Distributed ledger technology and cryptocurrencies"
      },
      {
        id: "cybersecurity",
        name: "Cybersecurity",
        videoId: "inWWhr5tnEA",
        description: "Network security and ethical hacking"
      }
    ]
  },
  {
    id: "theory",
    name: "THEORY BASED",
    gradient: "bg-theory-gradient",
    subjects: [
      {
        id: "flat",
        name: "Formal Languages & Automata Theory",
        videoId: "58N2N7zJGrQ",
        description: "Regular languages and formal grammars"
      },
      {
        id: "cg",
        name: "Computer Graphics",
        videoId: "NS_1we_DNsg",
        description: "2D and 3D graphics rendering"
      },
      {
        id: "hci",
        name: "Human-Computer Interaction",
        videoId: "F7g-8Psn5to",
        description: "User interface design and evaluation"
      },
      {
        id: "ethics",
        name: "Ethics in Computing",
        videoId: "UbDDyYHPVi0",
        description: "Ethical considerations in technology"
      },
      {
        id: "env",
        name: "Environmental Science",
        videoId: "oBn_eJ6wd8k",
        description: "Sustainability and environmental impact of technology"
      }
    ]
  },
  {
    id: "project",
    name: "PROJECT & ELECTIVES",
    gradient: "bg-project-gradient",
    subjects: [
      {
        id: "minor",
        name: "Minor Project",
        videoId: "DUa1Vy6mqNk",
        description: "Small-scale project development"
      },
      {
        id: "major",
        name: "Major Project",
        videoId: "vAZ5S3eABOs",
        description: "Capstone project development"
      },
      {
        id: "internship",
        name: "Internships",
        videoId: "UsDI6hDx5uI",
        description: "Industry experience and opportunities"
      },
      {
        id: "elective",
        name: "Elective Subjects",
        videoId: "R2Qh0O1DRcI",
        description: "Specialized topics and advanced courses"
      }
    ]
  }
];

/**
 * Get a subject by its ID
 * @param id - The ID of the subject to find
 * @returns The subject object or undefined if not found
 */
export const getSubjectById = (id: string): Subject | undefined => {
  for (const category of courseCategories) {
    const subject = category.subjects.find(subject => subject.id === id);
    if (subject) {
      return subject;
    }
  }
  return undefined;
};

/**
 * Get a list of quiz topics based on course categories
 * @returns An array of quiz topics
 */
export const getQuizTopics = (): string[] => {
  return courseCategories.map(category => category.name);
};
