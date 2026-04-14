// paulaiverse — Topic Data
// category: "both" | "pm" | "hfr"
// addedDate: "YYYY-MM-DD" — used for "New" badge (shows for 30 days)
// updatedDate: "YYYY-MM-DD" — shown in changelog

const CHANGELOG = [
  { date: "2026-04-14", description: "Added 3 new topics: Multimodal AI, AI Agent Governance & Security, and Agentic AI in the Enterprise. Updated Foundation Models and AI Agents cards to reflect the April 2026 model landscape and production adoption shift." },
  { date: "2026-03-13", description: "Initial launch — 21 topics across PM, HFR, and shared categories. Added research questions to all cards." }
];

const TOPICS = [

  // ──────────────────────────────────────────────
  // PM + HFR — Topics relevant to both roles
  // ──────────────────────────────────────────────

  {
    id: "multimodal-ai",
    category: "both",
    title: "Multimodal AI",
    tagline: "AI that sees, hears, reads, and reasons — all at once.",
    summary: "Multimodal AI models process multiple types of input simultaneously: text, images, audio, and video — without bolt-on modules. As of 2026, this is standard in frontier models: Gemini 3.1 Ultra, GPT-5.4, and Claude Opus 4.6 are all natively multimodal. A single model can now watch a video, cross-reference a document, and generate insights in seconds. For products, this expands the design space dramatically — interfaces can accept voice, image, and text interchangeably.",
    whyItMatters: {
      pm: "Multimodal capabilities open entirely new product surfaces. PMs need to define which modalities add genuine value for their users vs. which are novelty, and design evaluation frameworks for outputs that span text, image, and audio.",
      hfr: "Multimodal AI raises new questions about user comprehension, attention, and mental models — how do people understand and trust AI that simultaneously processes inputs across senses? Accessibility implications are also significant."
    },
    keyTerms: ["multimodal", "vision-language models", "audio models", "cross-modal reasoning", "Gemini 3.1", "GPT-5.4", "input modality"],
    learnMore: "https://blog.mean.ceo/new-ai-model-releases-news-april-2026/",
    addedDate: "2026-04-14",
    researchQuestions: [
      "When AI can accept voice, image, and text interchangeably, how do users choose which modality to use — and does the choice affect task success and satisfaction?",
      "How do multimodal AI outputs (e.g., AI-generated images alongside text explanations) affect trust and comprehension compared to text-only outputs?"
    ]
  },

  {
    id: "agent-governance",
    category: "both",
    title: "AI Agent Governance & Security",
    tagline: "Who's watching the agents — and what are they allowed to do?",
    summary: "As AI agents move from demos to production in 2026, governance has become the critical gap. 97% of enterprises expect a major AI agent security incident this year (CrowdStrike). Key risks: goal hijacking, memory poisoning, rogue agents, and unauthorized data access. Most companies don't know where their agents are, what systems they can access, or what they're doing. Gartner predicts over 40% of agent projects will fail by 2027 due to costs and security issues — not technical capability. Tools like Microsoft's Agent Governance Toolkit and monitoring platforms like AgentMon are emerging to address this.",
    whyItMatters: {
      pm: "Governance is a product requirement, not an IT afterthought. PMs need to define agent permission scopes, audit trails, spending controls (uncontrolled agents can cost $300/day), and human escalation paths before shipping agentic features.",
      hfr: "Agent governance raises profound questions about transparency and user consent: do users know what their AI agents can access and do? Research on user understanding of agent permissions and trust in autonomous systems is urgently needed."
    },
    keyTerms: ["agent permissions", "goal hijacking", "memory poisoning", "audit trail", "spending controls", "agent monitoring", "human escalation"],
    learnMore: "https://joget.com/ai-agent-adoption-in-2026-what-the-analysts-data-shows/",
    addedDate: "2026-04-14",
    researchQuestions: [
      "Do users understand what permissions they are granting when they authorize an AI agent — and how does that understanding change their willingness to deploy agents for sensitive tasks?",
      "What mental models do users form about agent 'oversight' — do they assume someone is watching, or do they assume the agent is fully autonomous?"
    ]
  },

  {
    id: "llms",
    category: "both",
    title: "Large Language Models (LLMs)",
    tagline: "The engine behind most modern AI systems.",
    summary: "LLMs are AI models trained on massive text datasets to understand and generate language. They predict the next token — word fragment — based on context. GPT-4, Claude, Gemini, and Llama are all LLMs. They are not databases, search engines, or rule systems: they generate plausible continuations, which means they can be wrong confidently.",
    whyItMatters: {
      pm: "LLMs are the core technology in most AI products you'll build or evaluate. Understanding their capabilities, limitations, and failure modes lets you scope features realistically.",
      hfr: "LLM behavior — hallucination, inconsistency, style shifts — directly shapes how users form trust, mental models, and expectations of AI systems."
    },
    keyTerms: ["tokens", "context window", "temperature", "hallucination", "fine-tuning", "RLHF"],
    learnMore: "https://www.anthropic.com/news/core-views-on-ai-safety",
    addedDate: "2026-03-13",
    researchQuestions: [
      "How do users' mental models of LLMs differ from how LLMs actually work — and what are the downstream consequences for trust and misuse?",
      "Does explaining the probabilistic nature of LLM outputs (tokens, temperature) change how users calibrate their reliance on them?"
    ]
  },

  {
    id: "ai-agents",
    category: "both",
    title: "AI Agents & Agentic Systems",
    tagline: "AI that acts, not just answers.",
    summary: "An AI agent is a system that takes a high-level goal and autonomously plans, uses tools, and executes multi-step tasks — without a human prompt at each step. Unlike a chatbot that responds once, an agent runs a loop: perceive → plan → act → observe → repeat. Current agents are powerful for well-scoped tasks but unreliable for complex, open-ended ones.",
    whyItMatters: {
      pm: "Agents are the next generation of AI products. PMs need to define the human-in-the-loop checkpoints, failure recovery paths, and trust thresholds for agentic features.",
      hfr: "Agentic AI raises fundamental questions about human oversight, agency loss, and appropriate automation. How do users understand, correct, and trust systems that act on their behalf?"
    },
    keyTerms: ["tool use", "function calling", "planning loop", "human-in-the-loop (HITL)", "multi-agent", "orchestration"],
    learnMore: "https://www.ibm.com/think/insights/ai-agents-2025-expectations-vs-reality",
    addedDate: "2026-03-13",
    updatedDate: "2026-04-14",
    researchQuestions: [
      "At what point in an agentic task do users feel they have lost meaningful control — and what interface signals trigger that feeling?",
      "How should AI agents communicate uncertainty or failure mid-task without breaking user trust in the overall system?"
    ]
  },

  {
    id: "mcp",
    category: "both",
    title: "Model Context Protocol (MCP)",
    tagline: "The USB-C port for AI — a standard for connecting models to tools.",
    summary: "MCP is an open standard (created by Anthropic, Nov 2024) that lets AI systems connect to external data sources, apps, and tools in a standardized way. Before MCP, every integration was custom. MCP defines a shared language: an AI client asks an MCP server 'what can you do?', the server responds with a list of tools, and the AI calls them as needed. Think of it like a universal adapter.",
    whyItMatters: {
      pm: "MCP is driving rapid ecosystem growth — products that expose MCP servers become composable with AI. PMs need to evaluate when to build MCP-native features vs. direct integrations.",
      hfr: "MCP enables AI to take actions across many systems. For researchers, it raises questions about consent, auditability, and what users understand about what their AI can touch."
    },
    keyTerms: ["MCP server", "MCP client", "tool manifest", "context engineering", "JSON-RPC", "protocol"],
    learnMore: "https://modelcontextprotocol.io/docs/getting-started/intro",
    addedDate: "2026-03-13",
    researchQuestions: [
      "Do users understand what data and systems their AI assistant can access via MCP — and how does that understanding (or lack of it) affect consent and privacy behavior?",
      "What mental models do non-technical users form about AI 'tool use' — and how accurately do they map to the underlying protocol?"
    ]
  },

  {
    id: "rag",
    category: "both",
    title: "Retrieval-Augmented Generation (RAG)",
    tagline: "Giving AI models access to knowledge beyond their training.",
    summary: "LLMs are trained on data with a cutoff date and know nothing about your specific documents. RAG solves this: before generating a response, the system retrieves relevant documents from a database and injects them into the model's context. The model then answers based on retrieved facts rather than pure memory. This dramatically reduces hallucinations for domain-specific questions.",
    whyItMatters: {
      pm: "RAG is the most common pattern for enterprise AI products — customer support, internal knowledge bases, code assistants. PMs need to understand retrieval quality, chunking, and reranking as product levers.",
      hfr: "RAG changes the provenance of AI answers. For researchers: how do users attribute information from AI that cites documents? Does citation increase trust appropriately or inappropriately?"
    },
    keyTerms: ["vector database", "embeddings", "chunking", "semantic search", "reranking", "context window"],
    learnMore: "https://vercel.com/blog/model-context-protocol-mcp-explained",
    addedDate: "2026-03-13",
    researchQuestions: [
      "When AI systems cite retrieved documents, do users calibrate trust in the citation itself — or does the act of citation create uniform trust inflation?",
      "How does RAG-based grounding affect the persuasiveness of AI outputs, even when the retrieved sources are of low quality?"
    ]
  },

  {
    id: "prompt-engineering",
    category: "both",
    title: "Prompt Engineering & Context Engineering",
    tagline: "The craft of getting what you want from an LLM.",
    summary: "Prompt engineering is designing inputs to LLMs to reliably produce useful outputs. Context engineering is the broader discipline — structuring everything the model receives: instructions, examples, retrieved documents, conversation history, tool outputs. As models improve, raw prompting matters less; context design matters more. Both are core PM and researcher skills because they shape system behavior without changing the model.",
    whyItMatters: {
      pm: "Most AI product 'features' are really prompt and context design. Understanding this gives PMs direct leverage to improve product behavior without engineering changes.",
      hfr: "Prompts encode assumptions about users. Researchers should examine how system prompts frame user interactions and whether they introduce bias, false confidence, or inappropriate framing."
    },
    keyTerms: ["system prompt", "few-shot examples", "chain-of-thought", "temperature", "context window", "grounding"],
    learnMore: "https://www.thoughtworks.com/en-us/insights/blog/generative-ai/model-context-protocol-mcp-impact-2025",
    addedDate: "2026-03-13",
    researchQuestions: [
      "How does the framing of a system prompt shape user behavior in ways users are unaware of — and what are the ethical implications for PM ownership of those prompts?",
      "Can users detect when an AI response has been constrained by a system prompt, and does awareness change their relationship with the product?"
    ]
  },

  {
    id: "ai-ethics-safety",
    category: "both",
    title: "AI Ethics, Safety & Alignment",
    tagline: "Making sure AI systems do what we actually want.",
    summary: "Alignment is the problem of ensuring AI systems pursue human-intended goals. Safety is designing systems that fail gracefully and don't cause harm. Ethics covers fairness, bias, privacy, and societal impact. These aren't compliance checkboxes — they're fundamental design constraints. RLHF (Reinforcement Learning from Human Feedback) is the main technique used to align current models to human values.",
    whyItMatters: {
      pm: "Safety and ethics are product requirements, not afterthoughts. PMs at AI companies must define acceptable use policies, safeguards, and escalation paths for model failures.",
      hfr: "This is a core HFR research domain — studying how AI systems affect vulnerable populations, perpetuate biases, and how users understand AI limitations and ethical tradeoffs."
    },
    keyTerms: ["alignment", "RLHF", "bias", "hallucination", "fairness", "explainability", "responsible AI"],
    learnMore: "https://2025.hci.international/ai-hci",
    addedDate: "2026-03-13",
    researchQuestions: [
      "How do different user populations (e.g. scientists, non-experts, high-stakes decision-makers) weigh AI fairness vs. AI accuracy when they are in tension?",
      "What is the relationship between perceived AI bias and long-term product abandonment — particularly in professional contexts like pharma or clinical research?"
    ]
  },

  {
    id: "explainable-ai",
    category: "both",
    title: "Explainable AI (XAI)",
    tagline: "Helping people understand why AI makes the decisions it does.",
    summary: "XAI is the set of methods and principles that make AI decision-making interpretable to humans. It ranges from technical approaches (saliency maps, attention visualization) to UX patterns (confidence scores, rationale summaries). There is a fundamental tradeoff: the most capable models are often the least interpretable. XAI research asks: what kind of explanation is actually useful for which user, in which context?",
    whyItMatters: {
      pm: "Users and regulators increasingly require AI to explain itself. PMs must design explanations that are useful, not just technically present — avoiding 'quasi-explanations' that create false confidence.",
      hfr: "XAI is a central HFR topic. Key questions: Do explanations actually improve human decision-making? Can they cause over-trust? How do different user populations respond to different explanation formats?"
    },
    keyTerms: ["LIME", "SHAP", "attention maps", "confidence scores", "counterfactuals", "interpretability"],
    learnMore: "https://dl.acm.org/doi/proceedings/10.1145/3706598",
    addedDate: "2026-03-13",
    researchQuestions: [
      "Do XAI explanations actually support better human decision-making — or do they primarily function as post-hoc reassurance that doesn't change behavior?",
      "How does explanation format (visual vs. textual vs. counterfactual) interact with user expertise to affect understanding and appropriate reliance?"
    ]
  },

  {
    id: "generative-ai",
    category: "both",
    title: "Generative AI",
    tagline: "AI that creates — text, images, audio, video, code.",
    summary: "Generative AI encompasses all AI systems that produce new content: LLMs for text and code, diffusion models for images (DALL-E, Midjourney, Stable Diffusion), audio models (ElevenLabs, Suno), and video models (Sora, Runway). The defining shift from earlier AI: outputs are novel and open-ended, not just classifications or predictions. This is what caused the mainstream AI wave starting in 2022.",
    whyItMatters: {
      pm: "GenAI is redefining the product surface area — nearly every software product is embedding or rebuilding around generative capabilities. PMs need to evaluate when GenAI is the right tool vs. a simpler system.",
      hfr: "Generative AI raises new questions about creativity, authorship, misinformation, and homogenization of thought. Research shows LLMs may reduce diversity of creative outputs."
    },
    keyTerms: ["diffusion models", "foundation models", "multimodal", "tokens", "DALL-E", "fine-tuning"],
    learnMore: "https://hbr.org/2026/02/to-drive-ai-adoption-build-your-teams-product-management-skills",
    addedDate: "2026-03-13",
    researchQuestions: [
      "Does the homogenization effect of LLMs (reducing diversity of creative outputs) extend to strategic and analytical thinking when used in PM workflows?",
      "How do teams that heavily use generative AI for ideation differ in their output diversity compared to teams that don't?"
    ]
  },


  // ──────────────────────────────────────────────
  // PM — Product management focused
  // ──────────────────────────────────────────────

  {
    id: "enterprise-agents",
    category: "pm",
    title: "Agentic AI in the Enterprise",
    tagline: "Moving AI agents from experiments to production — and why most fail.",
    summary: "2026 is the year AI agents moved from lab to production. 65% of organizations are experimenting with agents, but fewer than 25% have successfully scaled them. Gartner's first-ever AI agent report (April 2026) found 42% of companies plan to deploy within 12 months — but predicts 40% of those projects will be abandoned by 2027 due to costs and security. The real bottleneck isn't model capability: it's clean data (Snowflake), integration complexity, workflow redesign, and organizational change. By end of 2026, 40% of business applications are expected to include AI agents — up from under 5% in 2025.",
    whyItMatters: {
      pm: "PMs leading agentic product initiatives need to plan for the 'scaling wall' — the gap between a working demo and a reliable production deployment. Success requires defining governance frameworks, spending controls, and human-override paths before launch, not after."
    },
    keyTerms: ["agent deployment", "scaling wall", "multi-agent systems", "data governance", "ROI", "workflow redesign", "enterprise adoption"],
    learnMore: "https://joget.com/ai-agent-adoption-in-2026-what-the-analysts-data-shows/",
    addedDate: "2026-04-14",
    researchQuestions: [
      "What organizational factors (culture, data maturity, governance readiness) best predict whether an enterprise AI agent initiative will succeed or be abandoned?",
      "How should PMs communicate agentic AI risks and costs to executives who see demos but don't understand production complexity?"
    ]
  },

  {
    id: "ai-product-strategy",
    category: "pm",
    title: "AI Product Strategy & Roadmapping",
    tagline: "Building products where the model is part of the stack.",
    summary: "AI products differ from traditional software: they depend on data quality, have non-deterministic outputs, and improve via feedback loops rather than code changes alone. Good AI PM strategy starts with problem-first thinking — not 'where can we add AI?' but 'what painful user problem does AI unlock?'. Key filters: reversibility, model agnosticism, human oversight design, and realistic capability assessment.",
    whyItMatters: {
      pm: "This is the core PM skill for AI products. Roadmapping must account for data pipelines, model evaluation cycles, ethical review, and the fact that AI features can regress unexpectedly."
    },
    keyTerms: ["product-market fit", "model agnosticism", "orchestration layer", "feedback loops", "MLOps", "data flywheel"],
    learnMore: "https://www.mindtheproduct.com/the-2026-ai-product-strategy-huide-how-to-plan-budget-and-build-without-buying-into-the-hype/",
    addedDate: "2026-03-13",
    researchQuestions: [
      "How should PMs frame the 'problem-first, AI-second' principle in stakeholder conversations where AI is being pushed top-down?"
    ]
  },

  {
    id: "mlops",
    category: "pm",
    title: "MLOps (Machine Learning Operations)",
    tagline: "The engineering discipline of shipping and maintaining ML models in production.",
    summary: "MLOps covers the practices for deploying, monitoring, and updating ML models reliably. For PMs, the key concepts are: models degrade over time (data drift), retraining requires pipelines not just code pushes, and A/B testing AI features has added complexity (model changes interact with product changes). You don't need to run the pipelines — you need to understand what they mean for product velocity and quality.",
    whyItMatters: {
      pm: "MLOps constraints shape your roadmap. Understanding deployment cycles, model latency, cost-per-inference, and monitoring requirements helps you make realistic commitments and trade-off decisions."
    },
    keyTerms: ["data drift", "model monitoring", "A/B testing", "latency", "inference cost", "canary deployment"],
    learnMore: "https://www.eicta.iitk.ac.in/knowledge-hub/product-management/ai-product-manager-skills",
    addedDate: "2026-03-13",
    researchQuestions: [
      "How do you communicate the cost implications of model monitoring and retraining cycles to non-technical stakeholders without losing them?"
    ]
  },

  {
    id: "model-evaluation",
    category: "pm",
    title: "Model Evaluation & Evals",
    tagline: "How do you know if your AI is actually good?",
    summary: "Evals are the test suites for AI systems — datasets and metrics that measure model performance against defined criteria. Unlike traditional software tests (pass/fail), AI evals involve distributions, edge cases, and human judgment. Common metrics: precision, recall, F1-score, BLEU (translation), ROUGE (summarization). But for most product use cases, human eval and task completion rates matter more than academic benchmarks.",
    whyItMatters: {
      pm: "You can't improve what you can't measure. PMs need to define success criteria for AI features before building them, then design eval sets that reflect real user scenarios — not just clean benchmark cases."
    },
    keyTerms: ["precision", "recall", "F1-score", "benchmark", "human eval", "LLM-as-judge", "red-teaming"],
    learnMore: "https://www.eicta.iitk.ac.in/knowledge-hub/product-management/ai-product-manager-skills",
    addedDate: "2026-03-13",
    researchQuestions: [
      "What's the right eval strategy for a PM who wants to measure 'user trust' in an AI feature — what metrics are proxy-valid and which are misleading?"
    ]
  },

  {
    id: "data-literacy",
    category: "pm",
    title: "Data Literacy for AI PMs",
    tagline: "Understanding the raw material that makes AI work.",
    summary: "AI models are only as good as the data they're trained on. PMs need to understand: how data is collected and annotated, what data drift means, how class imbalance affects outputs, and how privacy regulations (GDPR, CCPA) constrain data strategy. You don't need to write SQL — but you need to ask the right questions about your data before committing to an AI feature.",
    whyItMatters: {
      pm: "Data strategy is product strategy in AI. Sustainable AI products are built on data flywheels where usage generates better training data. PMs define these loops."
    },
    keyTerms: ["data annotation", "data drift", "class imbalance", "GDPR", "data flywheel", "synthetic data"],
    learnMore: "https://www.eicta.iitk.ac.in/knowledge-hub/product-management/ai-product-manager-skills",
    addedDate: "2026-03-13",
    researchQuestions: [
      "How do you design a data strategy for a scientific software product where user-generated data is sensitive and regulatory constraints limit what can be used for training?"
    ]
  },

  {
    id: "agentic-ux",
    category: "pm",
    title: "UX for AI Products",
    tagline: "Designing interfaces where the output is probabilistic, not deterministic.",
    summary: "AI UX differs from traditional UX: outputs vary, confidence matters, errors look like correct answers, and users need to understand when to trust and when to verify. Key design principles: progressive disclosure of AI involvement, appropriate uncertainty communication, easy correction flows, and human override mechanisms. The PAIR Guidebook (Google) and Microsoft's HAX toolkit are essential PM references.",
    whyItMatters: {
      pm: "The biggest AI product failures are UX failures — not model failures. Users abandon AI features that produce confusing, inconsistent, or untrustworthy outputs even when the model is technically capable."
    },
    keyTerms: ["AI affordances", "uncertainty communication", "override mechanisms", "feedback loops", "PAIR Guidebook", "HAX toolkit"],
    learnMore: "https://www.mindtheproduct.com/the-2026-ai-product-strategy-huide-how-to-plan-budget-and-build-without-buying-into-the-hype/",
    addedDate: "2026-03-13",
    researchQuestions: [
      "How should AI product UX communicate model uncertainty to users who have no statistical background — what metaphors or patterns work?"
    ]
  },

  {
    id: "foundation-models",
    category: "pm",
    title: "Foundation Models & the Model Landscape",
    tagline: "Knowing your options: which model, when, and why.",
    summary: "Foundation models are large, general-purpose models that can be adapted for many tasks. As of April 2026, the frontier is: GPT-5.4 (OpenAI, released March 5), Claude Opus 4.6 & Sonnet 4.6 (Anthropic, Feb 2026), Gemini 3.1 Pro (Google — leads 13/16 benchmarks, best cost efficiency), and Grok 4.20 (xAI, multi-agent architecture). The pace of releases has compressed: 7 major models dropped in February 2026 alone. PMs need to understand the trade-offs: capability vs. cost vs. latency vs. privacy (cloud vs. on-device). Model agnosticism — designing your product to work with any capable model — is increasingly important as the landscape shifts every few weeks.",
    whyItMatters: {
      pm: "Model selection is a product and business decision. Vendor lock-in, cost-per-token at scale, and capability gaps across models all affect your product's economics and roadmap."
    },
    keyTerms: ["GPT-5.4", "Claude Opus 4.6", "Gemini 3.1 Pro", "Grok 4.20", "model agnosticism", "inference cost", "fine-tuning vs. prompting"],
    learnMore: "https://blog.mean.ceo/new-ai-model-releases-news-april-2026/",
    addedDate: "2026-03-13",
    updatedDate: "2026-04-14",
    researchQuestions: [
      "How do you evaluate vendor lock-in risk for an AI product built on a foundation model — and what contractual and architectural mitigations exist?"
    ]
  },


  // ──────────────────────────────────────────────
  // HFR — Human Factors Research focused
  // ──────────────────────────────────────────────

  {
    id: "human-centered-ai",
    category: "hfr",
    title: "Human-Centered AI (HCAI)",
    tagline: "Designing AI systems around human needs, abilities, and values.",
    summary: "HCAI is the paradigm that positions human well-being, agency, and oversight at the center of AI design — as opposed to optimizing purely for technical capability. It draws from HCI, cognitive science, and ethics. Key principles: AI should augment rather than replace; users should maintain meaningful control; systems should be transparent about their nature and limitations; diverse user populations should be included in design.",
    whyItMatters: {
      hfr: "HCAI is the foundational framework for your research identity. It defines both the methodology (participatory design, user studies, values-in-design) and the research questions (agency, control, dignity)."
    },
    keyTerms: ["user agency", "meaningful control", "values-in-design", "participatory design", "augmentation vs. replacement", "HAI frameworks"],
    learnMore: "https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1597763/full",
    addedDate: "2026-03-13",
    researchQuestions: [
      "How does the operationalization of 'user agency' differ across HCAI frameworks — and how would you measure it in a field study?",
      "In your background: how did the scientists you built software for conceptualize AI assistance — as a tool, a collaborator, or something else?"
    ]
  },

  {
    id: "trust-ai",
    category: "hfr",
    title: "Trust in AI Systems",
    tagline: "Why users trust or distrust AI — and when that trust is miscalibrated.",
    summary: "Trust in AI is complex and often poorly calibrated. Users over-trust systems that express confidence confidently (automation bias) and under-trust systems that are technically more accurate than human judgment. Key factors affecting trust: perceived competence, transparency, predictability, and the stakes of the decision. Trust is also context-dependent: the same person may trust medical AI differently than creative AI.",
    whyItMatters: {
      hfr: "Trust calibration is one of the most active HFR research areas. Key questions: What design features promote appropriate (not excessive) trust? How do cultural and demographic factors modulate trust? How do trust violations affect long-term adoption?"
    },
    keyTerms: ["automation bias", "algorithm aversion", "trust calibration", "transparency", "explainability", "appropriate reliance"],
    learnMore: "https://www.paperdigest.org/2025/03/most-influential-arxiv-human-computer-interaction-papers-2025-03-version/",
    addedDate: "2026-03-13",
    researchQuestions: [
      "What design interventions (transparency features, uncertainty indicators, correction flows) most effectively shift users from over-trust to calibrated trust — and for which user populations?",
      "How do trust dynamics in AI systems compare to trust dynamics in human expert relationships — and what can the human-trust literature predict about AI trust?"
    ]
  },

  {
    id: "mental-models",
    category: "hfr",
    title: "Mental Models of AI",
    tagline: "How people think AI works — and where they're wrong.",
    summary: "A mental model is a user's internal representation of how a system works. For AI, these models are almost always wrong: users anthropomorphize, assume memory that doesn't exist, or believe AI 'understands' in a human sense. Mental model misalignment drives misuse (over-relying on AI for factual claims) and under-use (not using AI where it excels). HFR research maps these models and tests how design choices shape them.",
    whyItMatters: {
      hfr: "Studying mental models of AI is a core HFR research contribution. Methods: think-aloud protocols, concept mapping, misconception surveys. Findings directly inform interface design that corrects harmful misalignments."
    },
    keyTerms: ["mental model", "anthropomorphism", "model transparency", "folk theory", "sycophancy", "concept mapping"],
    learnMore: "https://aireasoning.media.mit.edu",
    addedDate: "2026-03-13",
    researchQuestions: [
      "What erroneous folk theories do scientists (a sophisticated but domain-specific expert group) hold about how AI language models work?",
      "How do mental model corrections (e.g., explaining that LLMs don't 'remember' between sessions) affect long-term behavior and satisfaction with AI products?"
    ]
  },

  {
    id: "cognitive-load",
    category: "hfr",
    title: "Cognitive Load & AI-Augmented Reasoning",
    tagline: "Does AI reduce cognitive burden — or shift it?",
    summary: "AI tools promise to offload cognitive work, but the reality is complex. AI can reduce load for routine tasks while increasing load for verification tasks (was this AI output correct?). Cognitive offloading to AI may also atrophy skills over time. The CHI 2025 workshop on AI-Augmented Reasoning explores how AI can enhance — not replace — human critical thinking through feedback that builds reasoning skills.",
    whyItMatters: {
      hfr: "Cognitive load theory is a foundational HFR framework. Research questions: Does AI assistance improve or degrade human reasoning over time? How should AI feedback be delivered to support learning rather than dependence?"
    },
    keyTerms: ["cognitive load theory", "cognitive offloading", "skill atrophy", "deskilling", "AI-augmented reasoning", "dual-process theory"],
    learnMore: "https://aireasoning.media.mit.edu",
    addedDate: "2026-03-13",
    researchQuestions: [
      "Does repeated use of AI writing or analysis tools measurably reduce users' independent reasoning ability over time — and if so, under what conditions?",
      "How does the design of AI feedback (immediate vs. delayed, explanatory vs. corrective) affect the development of critical thinking skills?"
    ]
  },

  {
    id: "human-ai-collaboration",
    category: "hfr",
    title: "Human-AI Collaboration",
    tagline: "How humans and AI work together — as partners, not tools.",
    summary: "Human-AI collaboration research studies joint activity between people and AI systems — writing together, making decisions together, solving problems together. Key findings: humans tend to defer to AI suggestions even when wrong (over-reliance), collaboration quality depends heavily on how AI presents uncertainty, and collaboration patterns differ by task type and expertise. The best outcomes come when AI and human contributions are clearly delineated.",
    whyItMatters: {
      hfr: "This is a central HFR research domain. Methods range from controlled lab experiments (Wizard-of-Oz, think-aloud) to field studies. Practical impact: frameworks for designing collaborative AI systems in healthcare, education, and creative work."
    },
    keyTerms: ["human-in-the-loop", "co-creation", "over-reliance", "complementarity", "Wizard-of-Oz studies", "situated cognition"],
    learnMore: "https://dl.acm.org/doi/proceedings/10.1145/3706598",
    addedDate: "2026-03-13",
    researchQuestions: [
      "In what conditions does human-AI collaboration outperform solo human work — and what task structures and interface designs produce those conditions?",
      "How do over-reliance patterns differ between novices and experts collaborating with AI — and what does this mean for designing AI tools for scientists?"
    ]
  },

  {
    id: "conversational-ai",
    category: "hfr",
    title: "Conversational AI & Dialogue Systems",
    tagline: "The design and study of AI you talk to.",
    summary: "Conversational AI encompasses chatbots, voice assistants, and LLM-powered chat interfaces. For HFR, the key questions are not just whether they work but how users engage: Do users adopt conversational norms from human interaction? How do breakdowns in conversation repair themselves? How do users adapt their communication style to AI? Research in this area bridges linguistics, cognitive science, and HCI.",
    whyItMatters: {
      hfr: "Conversational AI is the dominant interface paradigm for AI today. HFR research examines how users negotiate meaning, manage errors, and develop (or don't develop) effective communication strategies with AI conversation partners."
    },
    keyTerms: ["dialogue management", "conversation repair", "grounding", "turn-taking", "anthropomorphism", "voice UI"],
    learnMore: "https://2025.hci.international/ai-hci",
    addedDate: "2026-03-13",
    researchQuestions: [
      "How do users adapt their communication style to AI conversation partners over time — and what does this adaptation reveal about their mental models?",
      "What is the appropriate level of AI persona (neutral tool vs. named assistant) for scientific research tools — and how does persona affect task performance and user satisfaction?"
    ]
  },

  {
    id: "research-methods-hfr",
    category: "hfr",
    title: "Research Methods for Human-AI Interaction",
    tagline: "How to study people interacting with AI systems.",
    summary: "Studying human-AI interaction requires adapting classical HCI methods to the unique properties of AI: non-deterministic outputs, learning systems, and black-box models. Common methods: Wizard-of-Oz (simulating AI with a human), think-aloud protocols, experience sampling, longitudinal diary studies, and A/B experiments. Newer methods include LLM-as-participant for rapid hypothesis generation and synthetic user testing.",
    whyItMatters: {
      hfr: "This is your craft. Knowing when to use controlled experiments vs. field studies, how to control for model variability in studies, and how to capture long-term use effects are the methodological contributions that distinguish HFR from pure HCI."
    },
    keyTerms: ["Wizard-of-Oz", "think-aloud", "experience sampling", "longitudinal study", "within-subjects design", "ecological validity"],
    learnMore: "https://www.paperdigest.org/2025/03/most-influential-arxiv-human-computer-interaction-papers-2025-03-version/",
    addedDate: "2026-03-13",
    researchQuestions: [
      "How do you design a longitudinal study of AI tool adoption that controls for model version changes during the study period?",
      "What are the validity threats unique to Wizard-of-Oz studies of AI systems — and how do you mitigate participant suspicion that the 'AI' is actually a human?"
    ]
  },

];
