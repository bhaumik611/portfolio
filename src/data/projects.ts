export type Project = {
  id:           string
  title:        string
  tagline:      string
  stack:        string[]
  color:        string
  glow:         string
  category:     string
  description:  string
  problem:      string
  approach:     string
  achievements: string[]
  challenges:   string[]
  github:       string
  demo:         string
}

export const projects: Project[] = [
  {
    id:       'face-detection',
    title:    'Face Detection System',
    tagline:  'Real-time detection at 25+ FPS with 92%+ accuracy',
    stack:    ['Python', 'OpenCV', 'ResNet SSD', 'MTCNN', 'Deep Learning'],
    color:    '#00ff88',
    glow:     'rgba(0,255,136,0.12)',
    category: 'ML Systems',
    description:
      'A real-time face detection system using Haar Cascade and deep learning-based models. Built to handle diverse lighting conditions, occlusion scenarios, and dynamic backgrounds with production-grade reliability.',
    problem:
      'Standard face detection models fail under low-light, occlusion, and dynamic backgrounds. Off-the-shelf solutions had unacceptably high false positive rates and couldn\'t maintain real-time FPS on live streams.',
    approach:
      'Designed advanced preprocessing pipelines using histogram equalization and noise reduction. Combined Haar Cascade with DNN-based models (ResNet SSD and MTCNN) and optimized detection thresholds for each scenario. Implemented CSV-based structured logging for real-time analytics.',
    achievements: [
      '92%+ detection accuracy across diverse lighting and occlusion scenarios',
      '25+ FPS sustained on live video streams',
      'Reduced false positives by 55% vs baseline model',
      'Structured CSV logging pipeline for real-time analytics',
    ],
    challenges: [
      'Maintaining FPS while running DNN inference on live streams',
      'Threshold tuning across wildly different lighting environments',
      'Balancing accuracy vs speed tradeoff for real-time use',
    ],
    github: 'https://github.com/bhaumik611',
    demo:   '#',
  },
  {
    id:       'intent-classification',
    title:    'Multi-Model Intent Classification',
    tagline:  'NLP pipeline routing across 9+ LLM backends',
    stack:    ['Python', 'HuggingFace Transformers', 'OpenAI API', 'FastAPI', 'JSON'],
    color:    '#0ea5e9',
    glow:     'rgba(14,165,233,0.12)',
    category: 'ML Systems',
    description:
      'An NLP pipeline that detects user intents, maps them to the optimal LLM backend, and optimizes responses using a GLM-based fallback. Integrates 9+ LLM backends with structured JSON history logging.',
    problem:
      'No single LLM handles all intents optimally. Routing every request to GPT-4 is expensive and overkill for simple tasks, while cheaper models fail on complex ones. There was no smart middle layer to handle this.',
    approach:
      'Built a two-stage pipeline: intent detection using HuggingFace Transformers, followed by dynamic model selection based on intent category and confidence score. Implemented GLM-based fallback handling and structured JSON logging for every interaction.',
    achievements: [
      'Integrated 9+ LLM backends in a unified routing pipeline',
      'Improved classification accuracy by 15% over baseline',
      'Structured JSON history logging for every session',
      'GLM-based fallback handling for low-confidence intents',
    ],
    challenges: [
      'Intent boundary ambiguity across similar categories',
      'Latency overhead from multi-model orchestration',
      'Keeping fallback logic stable as new models were added',
    ],
    github: 'https://github.com/bhaumik611',
    demo:   '#',
  },
  {
    id:       'trading-simulator',
    title:    'Bazaar — Trading Simulator',
    tagline:  'Real-time market simulation with live news triggers',
    stack:    ['React.js', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'ORPC'],
    color:    '#34d399',
    glow:     'rgba(52,211,153,0.12)',
    category: 'Full-Stack',
    description:
      'A real-time trading simulator built for the Bazaar event at PDEU. Stock prices fluctuate via a randomizer function while time-triggered news events dynamically influence the market and alter participant trading strategies.',
    problem:
      'Finance club events lacked a technically engaging simulation layer. Spreadsheet-based games felt static and couldn\'t simulate real-world market dynamics or handle concurrent participants.',
    approach:
      'Built the frontend in React.js with Tailwind CSS and Bootstrap. Integrated ORPC for event-driven real-time updates. Designed a randomizer-based price engine with news triggers that shift market sentiment mid-session. Built interactive dashboards for live portfolio tracking.',
    achievements: [
      'Delivered fully functional platform for live PDEU Bazaar event',
      'Real-time price fluctuation engine with news-driven market events',
      'Zero downtime during live event session',
      'Interactive dashboards with live portfolio valuation',
    ],
    challenges: [
      'Syncing price updates across all participants simultaneously',
      'Designing news triggers that felt realistic but not predictable',
      'Keeping UI responsive during high-frequency price updates',
    ],
    github: 'https://github.com/bhaumik611',
    demo:   '#',
  },
  {
    id:       'finance-club-website',
    title:    'Bulls & Bears Club Website',
    tagline:  'Animated multi-page club site with 3x faster navigation',
    stack:    ['React.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    color:    '#a78bfa',
    glow:     'rgba(167,139,250,0.12)',
    category: 'Full-Stack',
    description:
      'A responsive, animated multi-page website for the Bulls & Bears Finance Club at PDEU. Features interactive member profiles, theme toggle, smooth transitions, and reusable component architecture.',
    problem:
      'The club had no digital presence. Events were communicated informally and there was no central hub for members, events, or resources — hurting reach and engagement.',
    approach:
      'Led front-end development end to end. Built reusable React components with TypeScript, implemented smooth page transitions, and optimized for Core Web Vitals. Deployed on Vercel with CI/CD pipeline.',
    achievements: [
      'Improved navigation speed by 3x over previous setup',
      'Boosted Core Web Vitals score by 35%',
      'Deployed on Vercel with automated CI/CD',
      'Reusable component system for easy future updates',
    ],
    challenges: [
      'Building smooth animations without hurting performance scores',
      'Designing for a diverse audience — students, faculty, recruiters',
      'Maintaining component consistency across multiple pages',
    ],
    github: 'https://github.com/bhaumik611',
    demo:   '#',
  },
  {
    id:       'tatvam-ai',
    title:    'Tatvam AI',
    tagline:  'LLM startup for Indian language localization',
    stack:    ['Python', 'LLMs', 'HuggingFace', 'FastAPI', 'NLP'],
    color:    '#f59e0b',
    glow:     'rgba(245,158,11,0.12)',
    category: 'Startup',
    description:
      'Tatvam AI is an LLM startup building AI that genuinely works for Indian languages — focused on localization, linguistic diversity, and making language models accessible to underrepresented language communities.',
    problem:
      'Most LLMs perform poorly on Indian languages due to data scarcity, tokenizer inefficiency for non-Latin scripts, and lack of culturally aware training. The result is AI that feels foreign even to native speakers.',
    approach:
      'Co-founded the company, led LLM strategy and dataset design. Built scalable data collection pipelines for low-resource Indian languages. Designed the technical architecture for fine-tuning and evaluation. Pitched and won 1st place at PDEU B-Plan out of 85+ teams.',
    achievements: [
      '1st place out of 85+ teams at PDEU Business Plan Pitch',
      'Recognized by GoaMiles Founder for innovation and scalability',
      'Built multi-model intent classification across 9+ LLM backends',
      'Designed scalable dataset collection pipeline for Indian languages',
    ],
    challenges: [
      'Extremely limited high-quality data for low-resource Indian languages',
      'Tokenizer inefficiency causing token inflation for Indic scripts',
      'Balancing model quality vs inference cost at startup scale',
    ],
    github: 'https://github.com/bhaumik611',
    demo:   '#',
  },
  {
    id:       'rag-eval',
    title:    'Adaptive RAG Evaluation Framework',
    tagline:  'Benchmark 4 retrieval strategies with LLM-as-judge scoring',
    stack:    ['FastAPI', 'Python', 'Next.js', 'ChromaDB', 'Ollama', 'HuggingFace', 'PyMuPDF'],
    color:    '#06b6d4',
    glow:     'rgba(6,182,212,0.12)',
    category: 'ML Systems',
    description:
      'An adaptive framework that auto-benchmarks 4 RAG retrieval strategies (Naive RAG, HyDE, Re-ranking, Multi-query) using LLM-as-judge scoring across faithfulness, relevance, and correctness metrics. Upload any PDF and get data-driven evidence for which strategy performs best on your specific document.',
    problem:
      'Most teams build RAG pipelines and ship them blind — they pick retrieval strategies by intuition with no way to benchmark performance or explain why their system fails on certain questions. RAG evaluation is one of the most unsolved problems in production AI.',
    approach:
      'Built a fully automated pipeline: PDF ingestion with PyMuPDF, auto-generation of Q&A eval sets, parallel execution of 4 retrieval strategies, and LLM-as-judge scoring. Created an interactive Next.js frontend displaying ranked leaderboards with per-question breakdowns. Stack is fully local and free — no API costs.',
    achievements: [
      'Implemented 4 distinct retrieval strategies (Naive RAG, HyDE, Re-ranking, Multi-query) with comparative benchmarking',
      'LLM-as-judge scoring across 3 metrics: faithfulness, relevance, correctness',
      'Auto-generates evaluation questions and ground-truth answers from any PDF corpus',
      'Full-stack implementation: FastAPI backend + Next.js interactive frontend with live log streaming',
      'Fully local with Ollama + HuggingFace — zero API dependencies or costs',
    ],
    challenges: [
      'Designing an evaluation framework that works across document types and lengths',
      'LLM-as-judge consistency and scoring reliability with resource-constrained models',
      'Real-time streaming of results while orchestrating 4 parallel retrieval pipelines',
      'Generating meaningful synthetic questions that test actual retrieval capability',
    ],
    github: 'https://github.com/bhaumik611/RAG-eval',
    demo:   '#',
  },
]