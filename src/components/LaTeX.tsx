import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface LaTeXProps {
  text: string;
  className?: string;
}

const LaTeX = ({ text, className = "" }: LaTeXProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    // Replace $...$ with rendered KaTeX
    let html = text;
    // Display math $$...$$
    html = html.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
      try {
        return katex.renderToString(math, { displayMode: true, throwOnError: false });
      } catch { return math; }
    });
    // Inline math $...$
    html = html.replace(/\$([^$]+?)\$/g, (_, math) => {
      try {
        return katex.renderToString(math, { displayMode: false, throwOnError: false });
      } catch { return math; }
    });
    // Convert \n to <br>
    html = html.replace(/\n/g, "<br />");
    ref.current.innerHTML = html;
  }, [text]);

  return <div ref={ref} className={className} />;
};

export default LaTeX;
