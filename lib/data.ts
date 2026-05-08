export const personal = {
  name: "Awais Shah",
  title: "Edge AI Researcher & Computer Vision Engineer",
  subtitles: [
    "Edge AI Researcher",
    "Computer Vision Engineer",
    "Embedded Systems Developer",
    "Real-Time Object Detection Expert",
  ],
  bio: "Computer Science graduate from University of Haripur with a CGPA of 3.14. Published researcher in real-time deep learning for embedded systems. Passionate about making AI work on devices that others say \"can't run AI.\"",
  location: "Haripur, Pakistan",
  education: "B.Sc. Computer Science — 2020–2024",
  focus: "Edge Intelligence, Lightweight Models, Vision AI",
  email: "awais030380@gmail.com",
  phone: "(+92) 306-5141475",
  github: "https://github.com/AwaisShah75",
  orcid: "https://orcid.org/0009-0007-0928-0378",
  availability: "Open to Graduate Research Opportunities · MS/PhD · Research Collaborations · Remote Work",
};

export const stats = [
  { value: 3, label: "Publications", suffix: "" },
  { value: 2, label: "Projects", suffix: "" },
  { value: 400, label: "Training Images", suffix: "+" },
  { value: 15000, label: "Training Iters", suffix: "" },
];

export const publications = [
  {
    id: 1,
    status: "Published",
    statusColor: "#00FFCC",
    venue: "NIJEC 2025",
    title: "A Review of Real-Time Deep Learning–Based Object Detection for Embedded Systems",
    journal: "NUML Int'l Journal of Eng & CS",
    doi: "10.52015/nijec.v4i2.110",
    link: "https://doi.org/10.52015/nijec.v4i2.110",
    icon: "📄",
  },
  {
    id: 2,
    status: "Under Review",
    statusColor: "#FF6B35",
    venue: "SSRN Preprint",
    title: "Latency-Aware Edge–Cloud Perception for Medical Metaverse Applications",
    journal: "Key Result: 83.6% latency reduction vs. cloud-only deployment",
    doi: "",
    link: "https://ssrn.com",
    icon: "🏥",
  },
  {
    id: 3,
    status: "Preprint",
    statusColor: "#7B2FBE",
    venue: "Zenodo 2026",
    title: "XR Readiness Index (XRI): Assessing XR Adoption in Medical Education — Pakistan",
    journal: "191 Respondents · α = 0.750–0.801 · Mean XRI: 58.69/100",
    doi: "",
    link: "https://zenodo.org",
    icon: "🎓",
  },
];

export const projects = [
  {
    id: 1,
    title: "Real-Time License Plate Detection & Recognition",
    stack: ["Python", "TensorFlow", "OpenCV", "SSD MobileNet V2", "EasyOCR"],
    highlights: [
      "Fine-tuned on 400+ annotated images",
      "60% region-based OCR thresholding",
      "UUID-based CSV logging system",
      "CPU-optimized parallel TF + PyTorch inference",
    ],
    useCases: ["Parking Automation", "Traffic Monitoring", "Access Control"],
    github: "https://github.com/AwaisShah75",
    demo: "",
    color: "#00FFCC",
    icon: "🚗",
    metrics: null,
  },
  {
    id: 2,
    title: "Real-Time Sign Language Detection System",
    stack: ["Python", "TensorFlow", "OpenCV", "SSD MobileNet V2"],
    highlights: [
      "280+ images, Pascal VOC XML annotation",
      "15,000 training iterations",
      "AP@50: 0.990 | AP@75: 0.708",
      "mAP (0.50–0.95): 0.608 | AR@100: 0.677",
    ],
    useCases: ["Accessibility", "Communication Aid", "Education"],
    github: "https://github.com/AwaisShah75",
    demo: "",
    color: "#7B2FBE",
    icon: "🤟",
    metrics: [
      { label: "AP@50", value: 99.0 },
      { label: "AP@75", value: 70.8 },
      { label: "mAP", value: 60.8 },
      { label: "AR@100", value: 67.7 },
    ],
  },
];

export const skills = {
  programming: [{ name: "Python", level: 90 }],
  ml: [
    { name: "TensorFlow", level: 85 },
    { name: "Keras", level: 80 },
    { name: "PyTorch", level: 70 },
    { name: "OpenCV", level: 85 },
  ],
  tools: ["Git", "VS Code", "Jupyter", "Google Colab", "LabelImg"],
  domains: ["Embedded AI", "Edge Computing", "Computer Vision", "Deep Learning", "Object Detection", "CNNs"],
  languages: ["Pashto (Native)", "Urdu (Native)", "English (Professional)"],
};

export const timeline = [
  { year: "2020", event: "Enrolled B.Sc. CS, University of Haripur", icon: "🎓" },
  { year: "2024", event: "Graduated (CGPA 3.14) · Started Teaching Role at Brainiac", icon: "🏫" },
  {
    year: "2025",
    event: "Published in NIJEC · Kaggle ML & Python Certifications · IT Exhibition: ANPR Demo to GM of WAPDA",
    icon: "🏆",
  },
  { year: "2026", event: "XRI Preprint on Zenodo · SSRN Preprint Under Review", icon: "🔬" },
];

export const certifications = [
  { name: "Python Programming", issuer: "Kaggle", year: "2025" },
  { name: "Introduction to Machine Learning", issuer: "Kaggle", year: "2025" },
];

export const featuredAchievement = {
  title: "Guest Presenter — Annual IT Exhibition 2025",
  description: "ANPR system demonstrated to the General Manager of WAPDA. Recognized for innovation and execution.",
  icon: "🎤",
};
