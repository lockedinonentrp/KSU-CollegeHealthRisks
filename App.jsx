import {
  AlertCircle,
  Brain,
  CalendarCheck,
  CheckCircle,
  ChevronRight,
  ExternalLink,
  HeartHandshake,
  HeartPulse,
  Hospital,
  Info,
  ListChecks,
  Moon,
  ShieldCheck,
  ShieldPlus,
  Siren,
  Sparkles,
  Stethoscope,
  UsersRound,
  WineOff,
} from "lucide-react";

const risks = [
  {
    id: "mental-health",
    shortTitle: "Mental Health",
    title: "Mental Health Risks Among College Students",
    icon: Brain,
    iconLabel: "Brain icon representing mental health risks",
    accent: "bg-kstate-mist text-kstate-purple ring-1 ring-kstate-line",
    explorerSummary:
      "Stress, anxiety, or feeling off when it starts to mess with school, sleep, or relationships.",
    snapshot: {
      riskLevel: "Very common",
      mainConcern: "Stress, mood, isolation",
      preventionFocus: "Connect early",
    },
    takeaway:
      "Checking in with yourself-and using CAPS when you need it-helps keep small worries from snowballing.",
    overview:
      "Mental health is one of the most important public health concerns for college students. Many students experience stress, anxiety, depression, loneliness, or academic pressure during their time in college. While these struggles can feel personal, they are also public health concerns because they affect large groups of students and can impact academic success, relationships, and overall well-being.¹",
    why: [
      "Mental health struggles can affect academic performance and motivation.",
      "Anxiety and depression can make it harder for students to stay connected with others.",
      "Stress can affect sleep, eating habits, and physical health.",
      "Untreated mental health concerns can become more serious over time.¹",
    ],
    causes: [
      "Academic pressure and heavy workloads",
      "Social isolation or loneliness",
      "Financial stress",
      "Major life transitions and independence",
      "Lack of sleep or poor self-care habits",
    ],
    connection:
      "From a public health perspective, mental health risk is not only an individual concern. It is a campus-wide issue that can affect student safety, retention, academic success, and quality of life. Using an upstream approach, colleges can reduce this risk by promoting early awareness, reducing stigma, and connecting students to support before they reach a crisis point.",
    actions: [
      "Reach out early when stress or anxiety begins to feel overwhelming.",
      "Build a consistent routine that includes sleep, meals, and breaks.",
      "Stay connected with friends, classmates, or campus groups.",
      "Use campus counseling or mental health resources when needed.",
    ],
    resourceParts: [
      {
        type: "link",
        anchorId: "resource-caps",
        label: "K-State Counseling and Psychological Services",
      },
      {
        type: "text",
        text: " can help students who are experiencing stress, anxiety, depression, or other mental health concerns.",
      },
    ],
  },
  {
    id: "sleep-quality",
    shortTitle: "Sleep Quality",
    title: "Poor Sleep Quality and Sleep Deprivation",
    icon: Moon,
    iconLabel: "Moon icon representing sleep quality",
    accent: "bg-kstate-mist text-kstate-purple ring-1 ring-kstate-line",
    explorerSummary:
      "All-nighters and messy schedules add up-how sleep ties to focus, mood, and energy.",
    snapshot: {
      riskLevel: "High",
      mainConcern: "Tired brains, shaky focus",
      preventionFocus: "Steadier nights",
    },
    takeaway:
      "Treat sleep like part of your study plan-small schedule tweaks beat crashing right before exams.",
    overview:
      "Poor sleep quality is a common public health risk for college students because it affects mental health, learning, memory, and decision-making.² While staying up late or pulling all-nighters may seem normal in college, repeated sleep loss can build into a larger health and academic concern.",
    why: [
      "Poor sleep can reduce focus, memory, and academic performance.²",
      "Sleep deprivation can increase stress, anxiety, and mood problems.²",
      "Lack of sleep can weaken the immune system.",
      "Poor sleep can increase risk-taking and poor decision-making.",
    ],
    causes: [
      "Late-night studying or all-nighters",
      "Stress and poor time management",
      "Screen use before bed",
      "Caffeine or alcohol use",
      "Irregular class, work, or social schedules",
    ],
    connection:
      "From a public health perspective, poor sleep is not just a personal habit. It is a preventable risk that can affect student well-being, academic success, and campus safety. Using an upstream approach, colleges can reduce this risk through sleep education, stress-management resources, and healthier campus norms before students reach a crisis point.",
    actions: [
      "Keep a consistent sleep schedule when possible.",
      "Avoid caffeine late in the day.",
      "Limit all-nighters when possible.",
      "Reduce screen use before bed.",
      "Seek support if stress or anxiety is affecting sleep.",
    ],
    resourceParts: [
      {
        type: "link",
        anchorId: "resource-lafene",
        label: "Lafene Health Center",
      },
      { type: "text", text: " or " },
      {
        type: "link",
        anchorId: "resource-caps",
        label: "K-State Counseling and Psychological Services",
      },
      {
        type: "text",
        text: " can support students who are struggling with stress, fatigue, or health concerns related to sleep.",
      },
    ],
  },
  {
    id: "substance-use",
    shortTitle: "Alcohol & Substance Use",
    title: "Alcohol and Substance Use Risks",
    icon: WineOff,
    iconLabel: "Alcohol safety icon representing substance use risks",
    accent: "bg-kstate-mist text-kstate-purple ring-1 ring-kstate-line",
    explorerSummary:
      "Drinking culture, knowing your limits, and avoiding the outcomes that land people in real trouble.",
    snapshot: {
      riskLevel: "Serious if heavy use",
      mainConcern: "Parties, pressure, limits",
      preventionFocus: "Safer choices",
    },
    takeaway:
      "You do not have to be perfect at parties-you do need a plan, a buddy, and a sense of when to tap out.",
    overview:
      "Alcohol and substance use are major public health risks for college students.³ In some college environments, drinking or substance use may seem socially normal, but these behaviors can quickly increase the risk of injury, alcohol poisoning, poor decision-making, and long-term health consequences.",
    why: [
      "Excessive alcohol intake can lead to alcohol poisoning.³",
      "Alcohol and substance use can increase the risk of accidents or injuries.³",
      "Impaired judgment can lead to unsafe decisions.",
      "Substance use can affect academic performance and relationships.",
    ],
    causes: [
      "Peer pressure or social expectations",
      "Parties or drinking-centered events",
      "Stress or using substances to cope",
      "Lack of awareness about alcohol poisoning signs",
      "Mixing alcohol with other substances or lack of sleep",
    ],
    connection:
      "Public health does not aim to create fear around alcohol or substance use. Instead, it focuses on helping students understand real risks and make safer decisions. From a risk management perspective, prevention means educating students before harm occurs and creating environments where safer choices are easier to make.",
    actions: [
      "Know the signs of alcohol poisoning.",
      "Avoid mixing alcohol with other substances.",
      "Stay with trusted friends in social settings.",
      "Set limits before drinking.",
      "Seek help if alcohol or substance use starts affecting school, health, or relationships.",
    ],
    resourceParts: [
      {
        type: "link",
        anchorId: "resource-lafene",
        label: "Lafene Health Center",
      },
      { type: "text", text: " and " },
      {
        type: "link",
        anchorId: "resource-caps",
        label: "K-State Counseling and Psychological Services",
      },
      {
        type: "text",
        text: " can help students who have concerns about alcohol use, substance use, or related health issues.",
      },
    ],
  },
  {
    id: "infectious-disease",
    shortTitle: "Infectious Disease",
    title: "Infectious Disease Risk on College Campuses",
    icon: ShieldPlus,
    iconLabel: "Medical shield icon representing infectious disease prevention",
    accent: "bg-kstate-mist text-kstate-purple ring-1 ring-kstate-line",
    explorerSummary:
      "Packed dorms and classrooms-what spreads fast and how to protect yourself and people around you.",
    snapshot: {
      riskLevel: "Spikes often",
      mainConcern: "Shared air and spaces",
      preventionFocus: "Vaccines & hygiene",
    },
    takeaway:
      "Simple habits-wash hands, skip shared cups, stay home when sick-keep dorms and lecture halls safer for everyone.",
    overview:
      "Infectious diseases are a public health risk on college campuses because students often live, study, eat, and socialize in close spaces.⁴ Illnesses like the flu, mono, COVID-19, and meningitis can spread quickly when many people share classrooms, residence halls, and social environments.",
    why: [
      "One person's illness can affect many others in a short amount of time.⁴",
      "Shared spaces increase the chance of disease transmission.",
      "Illness can cause students to miss class, work, or important responsibilities.",
      "Some infections can become serious without early care.",
    ],
    causes: [
      "Close contact in residence halls and classrooms",
      "Sharing drinks, food, or personal items",
      "Poor hand hygiene",
      "Low vaccination rates",
      "Attending class or events while sick",
    ],
    connection:
      "Infectious disease risk shows how connected public health can be. One student's choices may influence the health of roommates, classmates, professors, and the broader campus community. Public health reduces this risk through prevention strategies like vaccination, hygiene, early detection, isolation when needed, and clear communication.⁴",
    actions: [
      "Wash hands regularly.",
      "Stay home or limit contact when sick.",
      "Keep up with recommended vaccines.",
      "Avoid sharing drinks or personal items.",
      "Seek medical care when symptoms are severe or unusual.",
    ],
    resourceParts: [
      {
        type: "link",
        anchorId: "resource-lafene",
        label: "Lafene Health Center",
      },
      {
        type: "text",
        text: " can help students with illness testing, treatment, vaccination information, and general health questions.",
      },
    ],
  },
  {
    id: "health-literacy",
    shortTitle: "Health Literacy",
    title: "Healthcare Access and Health Literacy",
    icon: Hospital,
    iconLabel: "Hospital icon representing healthcare access",
    accent: "bg-kstate-mist text-kstate-purple ring-1 ring-kstate-line",
    explorerSummary:
      "Booking Lafene, reading instructions, and not putting off care because you're not sure where to start.",
    snapshot: {
      riskLevel: "Easy to overlook",
      mainConcern: "Finding care, reading instructions",
      preventionFocus: "Ask, then act",
    },
    takeaway:
      "If you are not sure what a symptom means or where to go, Lafene can help you sort it out sooner rather than later.",
    overview:
      "Healthcare access and health literacy are major public health concerns for college students. Even when resources are available, students may not always know where to go, when to seek help, or how to understand medical information.⁵ This can delay care and make health problems worse.",
    why: [
      "Students may ignore symptoms because they are unsure if they are serious.",
      "Lack of health knowledge can make medical advice harder to follow.⁵",
      "Students may not know what campus resources are available.",
      "Delayed care can turn minor issues into larger problems.",
    ],
    causes: [
      "Living away from home for the first time",
      "Not knowing how to schedule healthcare appointments",
      "Confusion about insurance or cost",
      "Medical information that is hard to understand",
      "Avoiding care because of embarrassment or uncertainty",
    ],
    connection:
      "Health literacy connects directly to risk management because students cannot reduce risks they do not understand. Public health communication should make health information clear, practical, and easy to act on.⁵ When students know where to go and what steps to take, they are more likely to seek help early.",
    actions: [
      "Learn where campus health resources are located.",
      "Ask questions during medical appointments.",
      "Seek care early when symptoms are concerning.",
      "Use trusted sources instead of relying only on social media.",
      "Keep basic health and insurance information accessible.",
    ],
    resourceParts: [
      {
        type: "link",
        anchorId: "resource-lafene",
        label: "Lafene Health Center",
      },
      {
        type: "text",
        text: " is a key healthcare resource for KSU students. Students can use it for general medical care, health questions, testing, and other student health services.",
      },
    ],
  },
  {
    id: "personal-safety",
    shortTitle: "Personal Safety",
    title: "Personal Safety and Injury Prevention",
    icon: ShieldCheck,
    iconLabel: "Safety shield icon representing injury prevention",
    accent: "bg-kstate-mist text-kstate-purple ring-1 ring-kstate-line",
    explorerSummary:
      "Getting around at night, staying aware, and lowering the odds of injuries before they happen.",
    overview:
      "Personal safety is an important part of public health because injuries are often preventable.⁶ On a college campus, students may face risks related to transportation, walking at night, alcohol-related injuries, unsafe environments, or poor decision-making during stressful or social situations.",
    why: [
      "Injuries can affect physical health, academic performance, and daily life.",
      "Risk can increase when students are tired, stressed, distracted, or impaired.",
      "Some safety risks are connected to alcohol or substance use.",
      "Prevention can reduce harm before emergencies happen.⁶",
    ],
    causes: [
      "Walking alone late at night",
      "Distracted walking or driving",
      "Alcohol or substance use",
      "Poor lighting or unfamiliar areas",
      "Fatigue and lack of situational awareness",
    ],
    connection:
      "Injury prevention is a clear example of public health risk management. Instead of only responding after an injury occurs, public health focuses on identifying hazards and reducing risk before harm happens.⁶ This can include education, safer environments, emergency planning, and encouraging students to make informed decisions.",
    actions: [
      "Be aware of surroundings, especially at night.",
      "Travel with others when possible.",
      "Avoid driving or walking while impaired.",
      "Use campus safety resources when needed.",
      "Report unsafe areas or concerns.",
    ],
    resourceParts: [
      {
        type: "link",
        anchorId: "resource-police",
        label: "K-State Police Department",
      },
      { type: "text", text: " and " },
      {
        type: "link",
        anchorId: "resource-campus-safety",
        label: "campus safety resources",
      },
      {
        type: "text",
        text: " can help students with safety concerns, emergency response, and prevention information.",
      },
    ],
  },
];

const references = [
  "Lipson, S. K., Zhou, S., Abelson, S., Heinze, J., Jirsa, M., Morigney, J., Patterson, A., Singh, M., & Eisenberg, D. (2022). Trends in college student mental health and help-seeking by race/ethnicity: Findings from the national Healthy Minds Study, 2013-2021. Journal of Affective Disorders, 306, 138-147. https://doi.org/10.1016/j.jad.2022.03.038",
  "Hershner, S. D., & Chervin, R. D. (2014). Causes and consequences of sleepiness among college students. Nature and Science of Sleep, 6, 73-84. https://doi.org/10.2147/NSS.S62907",
  "Hingson, R., Zha, W., & Smyth, D. (2017). Magnitude and trends in heavy episodic drinking, alcohol-impaired driving, and alcohol-related mortality and overdose hospitalizations among emerging adults of college ages 18-24 in the United States, 1998-2014. Journal of Studies on Alcohol and Drugs, 78(4), 540-548. https://doi.org/10.15288/jsad.2017.78.540",
  "Fine, P., Eames, K., & Heymann, D. L. (2011). \"Herd immunity\": A rough guide. Clinical Infectious Diseases, 52(7), 911-916. https://doi.org/10.1093/cid/cir007",
  "Nutbeam, D. (2000). Health literacy as a public health goal: A challenge for contemporary health education and communication strategies into the 21st century. Health Promotion International, 15(3), 259-267. https://doi.org/10.1093/heapro/15.3.259",
  "Sleet, D. A., Ballesteros, M. F., & Borse, N. N. (2010). A review of unintentional injuries in adolescents. Annual Review of Public Health, 31, 195-212. https://doi.org/10.1146/annurev.publhealth.012809.103616",
];

const resources = [
  {
    anchorId: "resource-caps",
    name: "K-State Counseling and Psychological Services",
    description: "Short-term counseling for stress, anxiety, mood, and adjustment.",
    icon: HeartPulse,
    iconLabel: "Heart pulse icon for counseling services",
    url: "https://www.k-state.edu/paccats/index.htm",
  },
  {
    anchorId: "resource-lafene",
    name: "Lafene Health Center",
    description: "Illness visits, testing, vaccines, and everyday student health care.",
    icon: Stethoscope,
    iconLabel: "Stethoscope icon for student health care",
    url: "https://www.k-state.edu/lafene/",
  },
  {
    anchorId: "resource-police",
    name: "K-State Police Department",
    description: "Emergencies, safety planning, and how to report concerns.",
    icon: Siren,
    iconLabel: "Emergency siren icon for campus safety",
    url: "https://www.k-state.edu/police/",
  },
  {
    anchorId: "resource-campus-safety",
    name: "Campus Safety and Wildcat Walk",
    description: "Night escorts, phones, and tools for safer travel on campus.",
    icon: ShieldCheck,
    iconLabel: "Shield check icon for campus safety resources",
    url: "https://www.k-state.edu/student-support/studentsupport/campus-safety/index.html",
  },
];

const navItems = [
  "Why It Matters",
  "Upstream",
  "Risks",
  "Resources",
  "References",
];

function getSectionHref(item) {
  return `#${item === "Why It Matters" ? "why" : item.toLowerCase()}`;
}

function App() {
  return (
    <main className="min-h-screen bg-zinc-50 text-kstate-ink antialiased">
      <Header />
      <Hero />
      <WhyRiskMatters />
      <UpstreamApproach />
      <RiskExplorer />
      <RiskSections />
      <StudentResources />
      <References />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-kstate-line bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="section-shell flex min-h-[4.25rem] items-center justify-between gap-6 py-3.5">
        <a href="#top" className="focus-ring flex items-center gap-3 rounded-lg">
          <span
            role="img"
            aria-label="Kansas State inspired shield icon"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-kstate-purple text-white shadow-sm"
          >
            <ShieldPlus className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs font-extrabold uppercase tracking-[0.2em] text-kstate-purple">
              K-State
            </span>
            <span className="block text-sm font-semibold tracking-tight text-kstate-ink">
              Health Risk Guide
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={getSectionHref(item)}
              className="focus-ring rounded-lg px-3.5 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-kstate-mist hover:text-kstate-purple"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
      <div className="border-t border-kstate-line/80 md:hidden">
        <div className="section-shell flex gap-2 overflow-x-auto py-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={getSectionHref(item)}
              className="focus-ring shrink-0 rounded-full border border-kstate-line bg-kstate-mist px-3.5 py-2 text-xs font-bold text-kstate-purple"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const heroFeatures = [
    {
      label: "Prevention",
      description:
        "Recognize health risks early before they become larger concerns.",
      icon: ShieldCheck,
    },
    {
      label: "Early support",
      description:
        "Know when and where to seek help before stress or illness worsens.",
      icon: HeartHandshake,
    },
    {
      label: "Clear choices",
      description:
        "Use research-backed information to make safer daily decisions.",
      icon: ListChecks,
    },
    {
      label: "Community care",
      description:
        "Understand how individual choices can affect the broader campus community.",
      icon: UsersRound,
    },
  ];

  return (
    <section
      id="top"
      className="relative isolate border-b border-kstate-line/70 bg-gradient-to-b from-zinc-100 via-zinc-50 to-white pb-16 pt-10 md:pb-20 md:pt-14 lg:pt-16"
    >
      <div className="section-shell flex flex-col">
        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-kstate-line bg-white shadow-soft ring-1 ring-black/[0.03]">
          <div className="h-1.5 w-full bg-kstate-purple" aria-hidden="true" />
          <div className="flex flex-col items-center px-6 py-10 text-center sm:px-10 sm:py-12 md:px-12 md:py-14">
            <p className="mb-5 max-w-xl text-xs font-bold uppercase leading-relaxed tracking-[0.2em] text-kstate-purple sm:text-sm">
              Kansas State University Public Health Practicum
            </p>
            <h1 className="font-display text-balance text-4xl font-black leading-[1.06] tracking-tight text-kstate-ink sm:text-5xl lg:text-[3.25rem]">
              College Health Risk Guide
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-lg font-semibold leading-snug text-kstate-purple sm:text-xl">
              A concise public health resource for KSU students
            </p>
            <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-zinc-600 sm:text-lg">
              College brings growth and real health risks. This guide highlights
              six common topics, why they matter, and practical steps you can take
              early.
            </p>
            <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="#risks"
                className="focus-ring inline-flex items-center justify-center rounded-lg bg-kstate-purple px-6 py-3.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-kstate-deep"
              >
                Browse the six topics
                <ChevronRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
              <a
                href="#resources"
                className="focus-ring inline-flex items-center justify-center rounded-lg border border-kstate-line bg-white px-6 py-3.5 text-sm font-extrabold text-kstate-purple shadow-sm transition hover:border-kstate-purple/50 hover:bg-kstate-mist"
              >
                Campus resources
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-6xl md:mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {heroFeatures.map(({ label, description, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col rounded-2xl border border-kstate-line bg-white p-6 shadow-sm ring-1 ring-black/[0.02] transition hover:border-kstate-purple/25 hover:shadow-md"
              >
                <span
                  role="img"
                  aria-label={`${label} icon`}
                  className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kstate-mist text-kstate-purple ring-1 ring-kstate-line/80 sm:mx-0"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={2} />
                </span>
                <p className="mt-4 text-center text-base font-extrabold tracking-tight text-kstate-purple sm:text-left">
                  {label}
                </p>
                <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600 sm:text-left">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyRiskMatters() {
  return (
    <section id="why" className="border-b border-kstate-line bg-white py-20 md:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
        <div className="max-w-lg">
          <p className="eyebrow">Why it matters</p>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight tracking-tight text-kstate-ink sm:text-4xl lg:text-[2.5rem]">
            Awareness supports prevention, not fear.
          </h2>
        </div>
        <div className="rounded-2xl border border-kstate-line bg-kstate-mist/80 p-8 shadow-sm sm:p-10">
          <p className="text-base leading-relaxed text-zinc-700 sm:text-lg">
            Understanding common risks helps you act sooner, protect your
            health, and support a safer campus for everyone at K-State.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              "Spot risks early",
              "Protect well-being",
              "Strengthen safety",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-kstate-line/80 bg-white p-5 shadow-sm"
              >
                <CalendarCheck
                  className="mb-3 h-5 w-5 text-kstate-purple"
                  role="img"
                  aria-label={`${item} icon`}
                />
                <p className="text-sm font-bold text-kstate-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function UpstreamApproach() {
  return (
    <section id="upstream" className="border-b border-kstate-line bg-zinc-50 py-20 md:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="max-w-xl">
          <p className="eyebrow">Upstream approach</p>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight tracking-tight text-kstate-ink sm:text-4xl lg:text-[2.5rem]">
            Reduce causes before crisis hits.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-700 sm:text-lg">
            “Upstream” means fixing root causes early-like teaching sleep and
            stress skills-instead of only reacting after harm is severe.
          </p>
        </div>
        <div className="rounded-2xl border border-kstate-line bg-white p-8 shadow-soft sm:p-10">
          <span
            role="img"
            aria-label="Sparkles icon representing prevention"
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-kstate-purple text-white shadow-sm"
          >
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-6 text-xl font-black tracking-tight text-kstate-ink">
            Quick example
          </h3>
          <p className="mt-3 text-base leading-relaxed text-zinc-700">
            Sleep education and stress tools can stop exhaustion from turning
            into illness, anxiety, or academic failure.
          </p>
        </div>
      </div>
    </section>
  );
}

function RiskExplorer() {
  return (
    <section
      id="risks"
      className="border-b border-kstate-line bg-gradient-to-b from-kstate-mist/50 to-white py-20 md:py-24"
    >
      <div className="section-shell">
        <header className="max-w-2xl">
          <p className="eyebrow">Health topics</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-black leading-tight tracking-tight text-kstate-ink sm:text-4xl lg:text-[2.5rem]">
            Explore common college health risks
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Tap a card to jump down-each topic is a quick read with next steps
            and a K-State resource when you want it.
          </p>
        </header>

        <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3">
          {risks.map((risk) => {
            const summaryId = `${risk.id}-explorer-summary`;
            return (
              <li key={risk.id} className="h-full min-h-0">
                <a
                  href={`#${risk.id}`}
                  aria-describedby={summaryId}
                  className="focus-ring group relative flex h-full min-h-[11.5rem] flex-col overflow-hidden rounded-2xl border border-kstate-line bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-kstate-purple/35 hover:shadow-soft hover:ring-kstate-purple/12 sm:p-6"
                >
                  <span
                    className="absolute left-0 top-0 h-full w-1 bg-kstate-purple opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span
                    role="img"
                    aria-label={risk.iconLabel}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${risk.accent}`}
                  >
                    <risk.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-black leading-snug tracking-tight text-kstate-ink">
                    {risk.shortTitle}
                  </h3>
                  <p
                    id={summaryId}
                    className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600"
                  >
                    {risk.explorerSummary}
                  </p>
                  <span className="mt-5 inline-flex items-center text-sm font-bold text-kstate-purple">
                    Read topic
                    <ChevronRight
                      className="ml-1 h-4 w-4 shrink-0 transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ResourceInlineLink({ anchorId, label }) {
  return (
    <a
      href={`#${anchorId}`}
      className="font-semibold text-kstate-purple underline decoration-kstate-purple/35 underline-offset-[3px] transition hover:text-kstate-deep hover:decoration-kstate-purple"
    >
      {label}
    </a>
  );
}

function CampusResourceBlock({ risk }) {
  return (
    <div className="bg-kstate-mist p-6 sm:p-8">
      <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-500">
        <a
          href="#resources"
          className="text-kstate-purple transition hover:text-kstate-deep"
        >
          Campus resource
        </a>
      </h3>
      <p className="mt-3 text-base leading-relaxed text-zinc-700">
        {risk.resourceParts.map((part, i) =>
          part.type === "link" ? (
            <ResourceInlineLink
              key={`${risk.id}-r-${i}`}
              anchorId={part.anchorId}
              label={part.label}
            />
          ) : (
            <span key={`${risk.id}-t-${i}`}>{part.text}</span>
          ),
        )}
      </p>
      <p className="mt-4">
        <a
          href="#resources"
          className="focus-ring inline-flex items-center gap-0.5 text-sm font-bold text-kstate-purple transition hover:text-kstate-deep"
        >
          View campus resource
          <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </a>
      </p>
    </div>
  );
}

function RiskSections() {
  return (
    <section className="border-t border-kstate-line bg-gradient-to-b from-kstate-mist to-zinc-50 py-20 md:py-24">
      <div className="section-shell space-y-16 md:space-y-20">
        {risks.map((risk, index) => (
          <article
            key={risk.id}
            id={risk.id}
            className="scroll-mt-28 overflow-hidden rounded-2xl border border-kstate-line bg-white shadow-soft"
          >
            <div className="border-b border-kstate-line bg-kstate-mist/60 px-6 py-8 sm:px-10 sm:py-9">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-kstate-purple">
                    Topic {index + 1} of 6
                  </p>
                  <h2 className="font-display mt-3 text-2xl font-black leading-tight tracking-tight text-kstate-ink sm:text-3xl lg:text-[2rem]">
                    {risk.title}
                  </h2>
                </div>
                <span
                  role="img"
                  aria-label={risk.iconLabel}
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${risk.accent}`}
                >
                  <risk.icon className="h-7 w-7" aria-hidden="true" />
                </span>
              </div>
            </div>

            <div className="grid gap-px bg-kstate-line sm:grid-cols-2 lg:grid-cols-2">
              <InfoBlock title="Overview" content={risk.overview} />
              <ListBlock title="Why it matters" items={risk.why} />
              <ListBlock title="Common risk factors" items={risk.causes} />
              <InfoBlock title="Public health lens" content={risk.connection} />
              <ListBlock title="What you can do" items={risk.actions} />
              <CampusResourceBlock risk={risk} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function InfoBlock({ title, content }) {
  return (
    <div className="bg-white p-6 sm:p-8">
      <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-500">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-zinc-700">{content}</p>
    </div>
  );
}

function ListBlock({ title, items }) {
  return (
    <div className="bg-white p-6 sm:p-8">
      <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-500">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-base leading-relaxed text-zinc-700"
          >
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kstate-purple"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StudentResources() {
  return (
    <section id="resources" className="border-t border-kstate-line bg-white py-20 md:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Student resources</p>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight tracking-tight text-kstate-ink sm:text-4xl lg:text-[2.5rem]">
            Help is part of prevention
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-700 sm:text-lg">
            You do not need a crisis to use these offices-they match the topics
            above.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map(
            ({ name, description, icon: Icon, iconLabel, url, anchorId }) => (
              <div
                key={name}
                id={anchorId}
                className="scroll-mt-28 flex flex-col rounded-2xl border border-kstate-line bg-kstate-mist/70 p-7 shadow-sm"
              >
              <span
                role="img"
                aria-label={iconLabel}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-kstate-purple text-white shadow-sm"
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-black leading-snug tracking-tight text-kstate-ink">
                {name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                {description}
              </p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-6 inline-flex items-center justify-center rounded-lg bg-kstate-ink px-4 py-2.5 text-sm font-bold text-white transition hover:bg-black"
              >
                Visit site
                <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function References() {
  return (
    <section id="references" className="border-t border-kstate-line bg-kstate-ink py-20 text-white md:py-24">
      <div className="section-shell">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">
          References
        </p>
        <h2 className="font-display mt-4 text-3xl font-black tracking-tight sm:text-4xl">
          Sources
        </h2>
        <ol className="mt-10 space-y-4">
          {references.map((reference, index) => (
            <li
              key={reference}
              className="rounded-xl border border-white/10 bg-white/[0.06] p-6 text-sm leading-relaxed text-white/80"
            >
              <span className="mr-2 font-black text-white">{index + 1}.</span>
              {reference}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white">
      <div className="section-shell flex flex-col gap-2 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium">College Health Risk Guide</p>
        <p>KIN 619 Public Health Practicum · Kansas State University</p>
      </div>
    </footer>
  );
}

export default App;
