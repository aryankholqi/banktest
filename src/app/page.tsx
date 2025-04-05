'use client'
import Latex from "react-latex";
import { useState } from "react";
import Link from "next/link";

export default function LatexEditor() {
  const [latexInput, setLatexInput] = useState("\\frac{1}{2}");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLatexInput(e.target.value);
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">LaTeX Editor</h1>

      <div className="space-y-4">
        <div>
          <label htmlFor="latex-input" className="block text-sm font-medium text-gray-700 mb-2">
            Enter LaTeX Expression
          </label>
          <textarea
            id="latex-input"
            value={latexInput}
            onChange={handleInputChange}
            className="w-full h-32 p-4 border rounded-lg font-mono text-sm"
            placeholder="Enter your LaTeX expression here..."
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Preview</h2>
          <div className="p-4 border rounded-lg bg-gray-50 min-h-[100px] text-black">
            <Latex>{`$$ ${latexInput} $$`}</Latex>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Tips</h2>
          <ul className="list-disc pl-4 space-y-1 text-gray-600">
            <li>Use <code className="bg-gray-100 px-1 rounded">\frac{ }{ }</code> for fractions</li>
            <li>Use <code className="bg-gray-100 px-1 rounded">^</code> for superscripts</li>
            <li>Use <code className="bg-gray-100 px-1 rounded">_</code> for subscripts</li>
            <li>Use <code className="bg-gray-100 px-1 rounded">\sqrt{ }</code> for square roots</li>
            <li>Use <code className="bg-gray-100 px-1 rounded">\sum</code> for summation</li>
            <li>Use <code className="bg-gray-100 px-1 rounded">\int</code> for integrals</li>
          </ul>
        </div>
        <Link href="/latex-guide" className="underline">Latex Guide</Link>
      </div>
    </div>
  );
} 