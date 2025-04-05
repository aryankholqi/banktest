'use client'
import Latex from "react-latex";

export default function LatexGuide() {
    const examples = [
        {
            title: "Fractions",
            examples: [
                `$$ \\frac{1}{2} $$`,
                `$$ \\frac{x+1}{x-1} $$`,
                `$$ \\frac{d}{dx} \\left( \\frac{x^2}{2} \\right) $$`
            ]
        },
        {
            title: "Superscripts and Subscripts",
            examples: [
                `$$ x^2 $$`,
                `$$ x_n $$`,
                `$$ x_n^2 $$`,
                `$$ e^{x^2} $$`
            ]
        },
        {
            title: "Square Roots and Roots",
            examples: [
                `$$ \\sqrt{x} $$`,
                `$$ \\sqrt[3]{x} $$`,
                `$$ \\sqrt{x^2 + y^2} $$`
            ]
        },
        {
            title: "Sums and Products",
            examples: [
                `$$ \\sum_{i=1}^n i $$`,
                `$$ \\prod_{i=1}^n i $$`,
                `$$ \\sum_{i=1}^\\infty \\frac{1}{i^2} $$`
            ]
        },
        {
            title: "Greek Letters",
            examples: [
                `$$ \\alpha, \\beta, \\gamma $$`,
                `$$ \\Delta, \\Omega, \\Sigma $$`,
                `$$ \\theta, \\phi, \\psi $$`
            ]
        },
        {
            title: "Matrices",
            examples: [
                `$$ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} $$`,
                `$$ \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} $$`,
                `$$ \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} $$`
            ]
        },
        {
            title: "Common Functions",
            examples: [
                `$$ \\sin(x), \\cos(x), \\tan(x) $$`,
                `$$ \\log(x), \\ln(x) $$`,
                `$$ \\lim_{x \\to 0} \\frac{\\sin(x)}{x} $$`
            ]
        }
    ];

    return (
        <div className="p-8 space-y-8">
            <h1 className="text-3xl font-bold mb-6">LaTeX Guide</h1>
            {examples.map((section, index) => (
                <div key={index} className="space-y-4">
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.examples.map((example, i) => (
                            <div key={i} className="p-4 border rounded-lg bg-gray-50">
                                <div className="text-xl mb-2 text-black">
                                    <Latex>{example}</Latex>
                                </div>
                                <div className="text-sm text-gray-600 font-mono">
                                    {example.replace(/\$\$/g, '')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
} 