import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  ArrowRight,
  Maximize2,
  Minimize2,
  Cpu,
  Terminal,
} from 'lucide-react';

interface AIAgentWidgetProps {
  onScheduleCall: () => void;
  onApplyScopeToForm: (service: string, summary: string) => void;
}

interface Message {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  blueprint?: {
    title: string;
    stack: string[];
    timeline: string;
    squad: string;
    actionLabel?: string;
  };
}

export const AIAgentWidget: React.FC<AIAgentWidgetProps> = ({
  onScheduleCall,
  onApplyScopeToForm,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'agent',
      text: "Hello! I am the **Code 17 Autonomous Architecture Agent**. Tell me what you're planning to build or migrate, and I'll generate a production-ready architectural blueprint and squad estimate for you.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  useEffect(() => {
    const handleCustomTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setIsOpen(true);
      if (customEvent.detail) {
        handleSend(customEvent.detail);
      }
    };
    window.addEventListener('code17:open-agent', handleCustomTrigger);
    return () => window.removeEventListener('code17:open-agent', handleCustomTrigger);
  }, []);

  const quickPrompts = [
    '⚡ Plan an Enterprise RAG pipeline',
    '⚡ Zero-downtime Temporal migration',
    '⚡ Modernize frontend to Next.js',
    '⚡ How does Code 17 work?',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsThinking(true);

    setTimeout(() => {
      let replyText = '';
      let blueprint: Message['blueprint'] | undefined;

      const lower = query.toLowerCase();

      if (lower.includes('rag') || lower.includes('ai') || lower.includes('llm') || lower.includes('yapay zeka')) {
        replyText =
          "I've analyzed your GenAI requirements. For enterprise reliability, we isolate model calls behind deterministic guardrails, integrate vector databases with semantic chunking, and orchestrate workers via Temporal.";
        blueprint = {
          title: 'Enterprise Deterministic RAG Architecture',
          stack: ['LangChain / LlamaIndex', 'Qdrant / Pinecone', 'Temporal Cloud', 'FastAPI', 'AWS Bedrock / OpenAI'],
          timeline: '6 - 10 Weeks to Production',
          squad: '1 Staff AI Architect + 2 Senior Backend Engineers',
          actionLabel: 'Book Discovery for this AI Blueprint',
        };
      } else if (lower.includes('temporal') || lower.includes('migration') || lower.includes('gecis') || lower.includes('kubernetes') || lower.includes('cloud')) {
        replyText =
          'Zero-downtime migration requires a dual-worker routing mesh with automated canary promotion and state machine persistence. This guarantees 0 customer interruptions.';
        blueprint = {
          title: 'Zero-Downtime Cloud & Orchestration Mesh',
          stack: ['Temporal Workflows', 'Kubernetes EKS', 'Go / TypeScript', 'Kafka', 'ArgoCD'],
          timeline: '8 - 12 Weeks',
          squad: '1 Principal Cloud Architect + 2 DevOps / Distributed Systems Leads',
          actionLabel: 'Book Cloud Architecture Discovery',
        };
      } else if (lower.includes('frontend') || lower.includes('next') || lower.includes('react') || lower.includes('design system')) {
        replyText =
          'We structure enterprise frontends using a tokenized Figma-to-code monorepo architecture. This eliminates design drift and boosts sprint velocity by 3x.';
        blueprint = {
          title: 'Next.js & Tokenized Enterprise Design System',
          stack: ['React 18 / Next.js', 'Tailwind CSS', 'Figma API', 'Storybook', 'Turborepo', 'Playwright'],
          timeline: '6 - 8 Weeks',
          squad: '1 Frontend Architect + 2 Senior UI Engineers + 1 Design Systems Specialist',
          actionLabel: 'Request Frontend Squad',
        };
      } else {
        replyText =
          "Code 17 Technology LLC provides senior-only engineering squads for mission-critical software. We don't hand you slide decks—we embed directly into your sprints, ship tested code, and guarantee complete IP handover.";
        blueprint = {
          title: 'Custom Engineering Squad Architecture',
          stack: ['Full-Stack TypeScript / Python / Go', 'Kubernetes / AWS', 'Automated CI/CD'],
          timeline: '2-Week Risk-Free Discovery Sprint',
          squad: 'Custom Tailored Senior Squad (2-5 Engineers)',
          actionLabel: 'Schedule 30-Min Technical Discovery',
        };
      }

      setIsThinking(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'agent',
          text: replyText,
          blueprint,
        },
      ]);
    }, 1100);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {!isOpen && (
          <div className="mb-2 hidden sm:flex items-center gap-2 bg-[#021822]/95 border border-code17-teal-main/50 px-3.5 py-1.5 rounded-full shadow-2xl backdrop-blur-md animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-code17-teal-light font-semibold">
              AI Solution Architect Online
            </span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group bg-gradient-to-r from-code17-teal-main to-code17-orange hover:from-code17-cyan hover:to-code17-orange-hover p-4 rounded-2xl shadow-2xl shadow-code17-teal-deep/50 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none"
          aria-label="Open Code 17 AI Agent"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-code17-cyan to-code17-orange blur opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center gap-2.5 text-white">
            <Bot className="w-6 h-6 animate-pulse" />
            <span className="font-heading font-bold text-sm tracking-tight hidden sm:inline">
              Code 17 Agent
            </span>
          </div>
        </button>
      </div>

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-4 sm:right-6 z-50 transition-all duration-300 flex flex-col bg-[#02131A]/95 border border-code17-teal-main/50 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden ${
            isExpanded
              ? 'w-[calc(100vw-32px)] sm:w-[680px] h-[82vh]'
              : 'w-[calc(100vw-32px)] sm:w-[440px] h-[580px]'
          }`}
        >
          {/* Agent Header */}
          <div className="bg-gradient-to-r from-[#032029] to-[#01141A] border-b border-white/10 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-code17-teal-deep border border-code17-teal-light/40 flex items-center justify-center text-code17-cyan shadow-md">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                  <span>Code 17 AI Architect</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    LIVE
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Autonomous System Solutions v2.4
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle Expand"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-code17-orange text-white rounded-tr-none font-medium'
                      : 'bg-[#042833]/80 border border-code17-teal-main/30 text-slate-200 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Architecture Blueprint Card inside message */}
                  {msg.blueprint && (
                    <div className="mt-3 pt-3 border-t border-white/10 space-y-2.5 bg-[#01161E]/90 p-3 rounded-xl border border-code17-teal-light/20">
                      <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-code17-cyan">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>{msg.blueprint.title}</span>
                      </div>

                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Recommended Stack:</div>
                        <div className="flex flex-wrap gap-1">
                          {msg.blueprint.stack.map((s, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-code17-teal-deep text-[11px] font-mono text-code17-teal-light border border-code17-teal-main/40"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300 pt-1">
                        <div>
                          <span className="text-slate-500">Duration: </span>
                          <span className="text-white">{msg.blueprint.timeline}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Squad: </span>
                          <span className="text-white">{msg.blueprint.squad}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          if (msg.blueprint) {
                            onApplyScopeToForm(
                              msg.blueprint.title,
                              `AI Agent Scope: ${msg.blueprint.title} | Stack: ${msg.blueprint.stack.join(', ')} | Timeline: ${msg.blueprint.timeline}`
                            );
                            setIsOpen(false);
                            onScheduleCall();
                          }
                        }}
                        className="w-full mt-2 bg-code17-orange hover:bg-code17-orange-hover text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1.5 shadow-md transition-colors"
                      >
                        <span>{msg.blueprint.actionLabel || 'Apply Scope & Schedule Discovery'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex items-center gap-2 text-xs font-mono text-code17-cyan p-3 rounded-2xl bg-[#042833]/50 border border-code17-teal-main/20 w-fit">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>Analyzing architecture requirements & dependencies...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-4 py-2 border-t border-white/5 bg-[#01141B] flex gap-2 overflow-x-auto scrollbar-none">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-[11px] font-mono whitespace-nowrap px-2.5 py-1 rounded-full bg-[#032029] border border-code17-teal-main/30 text-slate-300 hover:text-white hover:border-code17-cyan transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-[#021620] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder="Ask about AI architecture, cloud migrations, squad costs..."
              className="flex-1 bg-[#010D12] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-code17-teal-light transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputQuery.trim() || isThinking}
              className="bg-code17-orange hover:bg-code17-orange-hover disabled:opacity-40 text-white p-2.5 rounded-xl shadow-md transition-colors"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
