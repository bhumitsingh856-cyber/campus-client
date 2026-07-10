import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Highly recommended for Table parsing support

interface EnhancedMarkdownRendererProps {
  content: string;
  className?: string;
}

export const EnhancedMarkdownRenderer: React.FC<EnhancedMarkdownRendererProps> = ({
  content,
  className = '',
}) => {
  return (
    <div className={`prose prose-slate max-w-none text-slate-800 leading-relaxed ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Enables tables and strikethroughs natively
        components={{
          // Typography / Headings
          h1: ({ node, ...props }) => (
            <h1 className="text-2xl font-extrabold text-slate-900 border-b pb-2 mt-6 mb-4 tracking-tight" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3 tracking-tight" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-lg font-bold text-slate-900 mt-5 mb-2 tracking-wide" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-4 text-slate-700 last:mb-0" {...props} />
          ),
          
          // Lists
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-5 space-y-1.5 my-3 marker:text-indigo-500" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-5 space-y-1.5 my-3 marker:text-indigo-500 font-normal" {...props} />
          ),
          li: ({ node, ...props }) => <li className="text-slate-700" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-semibold text-slate-950" {...props} />,
          
          // Blockquotes
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-indigo-200 bg-indigo-50/50 px-4 py-2 my-4 italic text-slate-600 rounded-r-md" {...props} />
          ),

          // Clean, standard inline style wrapper for all code elements
          code: ({ node, ...props }) => (
            <code className="bg-slate-100 text-indigo-600 font-mono text-sm px-1.5 py-0.5 rounded border border-slate-200/60 font-medium" {...props} />
          ),

          // Custom Link & PDF element handler
          a: ({ node, href, children, ...props }) => {
            const isPdf = href?.toLowerCase().endsWith('.pdf');
            
            if (isPdf) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-rose-600 hover:text-rose-700 underline underline-offset-4 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 hover:bg-rose-100 transition-colors"
                  {...props}
                >
                  <svg className="w-4 h-4 text-rose-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  {children}
                </a>
              );
            }

            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 font-medium text-indigo-600 hover:text-indigo-700 underline underline-offset-4 hover:opacity-90 transition-opacity"
                {...props}
              >
                {children}
                <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            );
          },

          // Tables
          table: ({ node, ...props }) => (
            <div className="w-full overflow-x-auto my-6 border border-slate-200 rounded-lg shadow-sm">
              <table className="w-full text-left text-sm border-collapse" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-medium" {...props} />,
          tbody: ({ node, ...props }) => <tbody className="divide-y divide-slate-200 text-slate-600" {...props} />,
          th: ({ node, ...props }) => <th className="px-4 py-3 font-semibold text-slate-900 bg-slate-50" {...props} />,
          td: ({ node, ...props }) => <td className="px-4 py-3 text-slate-700 whitespace-normal break-words" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default EnhancedMarkdownRenderer;