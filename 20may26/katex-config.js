// Render all KaTeX math after page load
document.addEventListener("DOMContentLoaded", function () {
  if (typeof renderMathInElement === "function") {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true  },
        { left: "\\[", right: "\\]", display: true  },
        { left: "$",  right: "$",  display: false },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false,
      macros: {
        "\\xx":   "\\mathbf{x}",
        "\\E":    "\\mathbb{E}",
        "\\R":    "\\mathbb{R}",
        "\\cG":   "\\mathcal{G}",
        "\\cB":   "\\mathcal{B}",
        "\\cI":   "\\mathcal{I}",
        "\\cS":   "\\mathcal{S}",
        "\\norm": "\\left\\lVert#1\\right\\rVert",
        "\\abs":  "\\left\\lvert#1\\right\\rvert",
        "\\gg":   "\\boldsymbol{g}",
        "\\xiv":  "\\boldsymbol{\\xi}",
        // Pedagogical color macros (used in week1's formula-builder sections).
        // NOTE: '##' is the KaTeX escape for a literal '#' in macro EXPANSIONS
        // (single '#' is reserved for parameter references like #1).
        "\\cb":   "\\textcolor{##2563eb}{#1}",
        "\\cg":   "\\textcolor{##059669}{#1}",
        "\\co":   "\\textcolor{##ea580c}{#1}",
        "\\cp":   "\\textcolor{##7c3aed}{#1}",
        "\\cr":   "\\textcolor{##dc2626}{#1}"
      }
    });
  }
});
