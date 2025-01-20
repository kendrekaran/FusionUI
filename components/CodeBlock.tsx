import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({ command, id }: { command: string; id: string }) {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied({ ...copied, [id]: true });
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative flex items-center bg-zinc-900 rounded-lg p-4 group">
      <Terminal className="w-5 h-5 text-zinc-500 mr-3" />
      <code className="text-zinc-200 font-mono flex-1">{command}</code>
      <button
        onClick={() => handleCopy(command, id)}
        className="absolute right-4 p-2 text-zinc-400 hover:text-white transition-colors"
        aria-label="Copy to clipboard"
      >
        {copied[id] ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <Copy className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </button>
    </div>
  );
}
