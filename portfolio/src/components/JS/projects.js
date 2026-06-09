const projectImageModules = import.meta.glob('../assets/*/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default'
})

const getImagesForFolder = (folderName) => {
    return Object.entries(projectImageModules)
        .filter(([path]) => path.includes(`/assets/${folderName}/`))
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
        .map(([, source]) => source)
}

const opblockImages = getImagesForFolder('opblock')
const neuromotionImages = getImagesForFolder('neuromotion')
const EMGreaderImages = getImagesForFolder('EMGreader')
const quokkaImages = getImagesForFolder('quokka')
const CareerCanvas = getImagesForFolder('careercanvas')
const socialDist = getImagesForFolder('socialdist')
const nutriPlate = getImagesForFolder('nutriplate')

export const projectsData = [
    {
        id: 7,
        img: nutriPlate[0],
        images: nutriPlate,
        title: "NutriPlate",
        time: "May 2026",
        desc: "NutriPlate helps users build balanced diets using guidelines from Canada's Food Guide. The platform organizes foods into macronutrient categories such as proteins, carbohydrates, healthy fats, and fibre, making it easier for users to understand what a balanced plate looks like and plan their grocery shopping accordingly. Users can browse different food options while comparing prices across grocery stores to make choices that fit both their nutritional goals and budget. To make healthy eating more practical and accessible, NutriPlate also includes an AI-powered recipe generator that creates meal ideas based on ingredients added to a user’s virtual cart. This allows users to discover simple, nutritious, and affordable meals while reducing food waste and making use of ingredients they already plan to purchase.",
        visible: true,
        tags: ["Django", "Python", "React", "AI", "PostgreSQL",  "REST APIs"],
        github: "https://github.com/kprasad001/IBM-Hackathon-Health-Navigator"
    },
    {
        id: 6,
        img: socialDist[0],
        images: socialDist,
        title: "Social Distribution",
        time: "January 2026 - April 2026",
        desc: "A distributed social media platform where users can sign up, create posts, and follow other authors across connected servers. Posts can be written in plain text, Markdown, or shared as images, and authors can choose whether their content is visible to everyone, just their followers, or only close friends. A personal stream pulls together posts from everyone you follow alongside public content, keeping everything in one place. The platform has a full friend and follower system, where two people mutually following each other automatically become friends and can share more private content with each other. Node administrators have full control over user management and can link their server to other nodes to share content across the broader network.",
        visible: true,
        tags: ["Django", "Python", "HTML/CSS", "QA", "PostgreSQL", "REST APIs"],
        github: "https://github.com/kprasad001/social-distribution"
    },
    {
        id: 1,
        img: opblockImages[0],
        images: opblockImages,
        title: "OpBlock",
        time: "February 2026",
        desc: "OpBlock is an all-in-one platform that streamlines both user and admin workflows for a campus SafeWalk service. Through the user-facing interface, individuals can easily request a walker by selecting their desired pickup and drop-off locations. To ensure operational safety and efficiency, the system automatically enforces a 20-minute walking distance validation for all eligible pickup zones. Meanwhile, the administrator dashboard allows staff to assign available walkers to incoming requests in real time. Finally, the platform maintains a comprehensive, searchable history of all past, pending, and completed walk requests for complete oversight.",
        visible: true,
        tags: ["JavaScript", "HTML/CSS", "Flask", "SQLite", "Docker", "REST APIs"],
        github: ""
    },
    {
        id: 2,
        img: CareerCanvas[0],
        images: CareerCanvas,
        title: "CareerCanvas",
        time: "January 2026",
        desc: "In just three days, I developed a full-stack job application organizer designed to streamline the modern job search and alleviate the mental load for candidates. The platform features an applications dashboard with a visual pipeline to track progress from wishlist to offer, a Resume Studio for rapid customization of master templates, and a response tracker to centralize employer communications and ensure timely follow-ups.",
        visible: true,
        tags: ["JavaScript", "HTML/CSS", "SQLite", "Docker"],
        github: "https://github.com/401-hackathon-EDSS/401-hackathon"
    },
    {
        id: 3,
        img: neuromotionImages[0],
        images: neuromotionImages,
        title: "Neuromotion",
        time: "November 2025",
        desc: "NeuroMotion uses a person's electroencephalography (EEG) signals to predict the intent of motion. EEG signals are collected from an OpenBCI headset and passed to NeuroMotion. Here, the application filters, pre-processes, and extracts features from the raw data. This data is passed to our machine learning model, which was trained to classify the intent of left arm movement versus the intent of right arm movement versus neutral (non-movement). The model outputs a prediction from the above classes and is displayed on our GUI along with the raw EEG signals collected from the headset in real time.",
        visible: true,
        tags: ["Python", "JavaScript", "HTML/CSS", "Machine Learning", "EEGs", ],
        github: "https://github.com/Alberta-Bionix-natHacks-2025/natHacks2025"
    },
    {
        id: 4,
        img: EMGreaderImages[0],
        images: EMGreaderImages,
        title: "EMG Reader UI",
        time: "October 2025",
        desc: "As part of Alberta Bionix, I built a custom EMG data acquisition and analysis program to support the development of a responsive, user-controlled prosthetic leg. The software captures and processes signals from surface EMG electrodes positioned around the knee, allowing researchers to evaluate signal clarity and responsiveness across different placements. This work directly supported identifying optimal electrode locations for accurate, low-latency control of leg flexion and extension.",
        visible: true,
        tags: ["Python", "C", "C++", "EMGs","Arduino"],
        github: "https://github.com/albertabionix/EMG-UI-Data-Collections"
    },
    {
        id: 5,
        img: quokkaImages[0],
        images: quokkaImages,
        title: "Quokka Puff Events",
        time: "September 2025 - December 2025",
        desc: "We developed a mobile application that allows people to sign up for events that are popular and fill up fast. We want to ensure that people with limitations, such as work or disability, can sign up for these events fairly and without having to sit and refresh a webpage until they have a chance to reserve a spot. To that end, we implemented an app that uses a lottery system instead of a first-come, first-served basis.",
        visible: true,
        tags: ["Java", "Firestore", "QA", "Mobile App", "REST APIs"],
        github: "https://github.com/quokka-CMPUT301F25/quokka-puffs-events"
    },
];