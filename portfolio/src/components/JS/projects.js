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

export const projectsData = [
    {
        id: 1,
        img: opblockImages[0],
        images: opblockImages,
        title: "OpBlock",
        time: "February 2026",
        desc: "Developed in just three days, this full-stack job application organizer reduces the mental load of modern recruiting by providing a centralized Applications Dashboard to visualize the hiring pipeline from wishlist to offer. The platform features a Resume Studio for rapid template customization and a Response Tracker to log employer communications, ensuring candidates stay organized and proactive throughout their search.",
        visible: true,
        tags: ["Java Script", "HTML", "CSS", "Django", "SQLite", "FullStack", "Docker", "Hackathon", "Mobile"],
        github: "https://github.com/SirOrangePeel/platformagnostic-OpBlock"
    },
    {
        id: 2,
        img: CareerCanvas[0],
        images: CareerCanvas,
        title: "CareerCanvas",
        time: "January 2026",
        desc: "testing",
        visible: true,
        tags: ["Java Script", "HTML", "SQLite", "Docker", "Hackathon", "CSS", "Frontend"],
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
        tags: ["Java Script", "AI",  "HTML", "CSS", "Backend", "Electroencephalogram (EEG)", "OpenBCI", "PyTorch", "Machine Learning", "Python", "Hackathon"],
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
        tags: ["Electromyography (EMG)", "Python", "Arduino", "Hardware", "MNE"],
        github: "https://github.com/albertabionix/EMG-UI-Data-Collections"
    },
    {
        id: 5,
        img: quokkaImages[0],
        images: quokkaImages,
        title: "Quokka Puff Events",
        time: "September 2025",
        desc: "We developed a mobile application that allows people to sign up for events that are popular and fill up fast. We want to ensure that people with limitations, such as work or disability, can sign up for these events fairly and without having to sit and refresh a webpage until they have a chance to reserve a spot. To that end, we implemented an app that uses a lottery system instead of a first-come, first-served basis.",
        visible: true,
        tags: ["Android Studio", "Java", "Team Project", "QA", "Mobile"],
        github: "https://github.com/quokka-CMPUT301F25/quokka-puffs-events"
    }
];