'use client'
import Latex from "react-latex";

export default function Home() {
  const integrals = [
    `$$ \\int x^2 \\, dx = \\frac{x^3}{3} + C $$`,
    `$$ \\int_{0}^{1} x^2 \\, dx = \\frac{1}{3} $$`,
    `$$ \\iint f(x,y) \\, dx \\, dy $$`,
    `$$ \\oint_C \\mathbf{F} \\cdot d\\mathbf{r} $$`,
    `$$ \\int \\frac{1}{x} \\, dx = \\ln|x| + C $$`,
    `$$ \\int e^x \\, dx = e^x + C $$`,
    `$$ \\int \\sin(x) \\, dx = -\\cos(x) + C $$`
  ];

  return (
    <div className="space-y-4 p-4">
      {integrals.map((integral, index) => (
        <div key={index} className="text-xl">
          <Latex>{integral}</Latex>
        </div>
      ))}
    </div>
  );
}
