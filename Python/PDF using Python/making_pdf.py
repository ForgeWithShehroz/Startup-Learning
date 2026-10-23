from fpdf import FPDF

# Create PDF
pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", "B", 16)
pdf.cell(0, 10, "Responsive Web Design 1-Week Checklist", ln=True, align="C")

pdf.set_font("Arial", "", 12)
pdf.ln(5)
days = [
    ("Day 1: Flexbox Basics", [
        "Learn display:flex, flex-direction, justify-content, align-items, flex-wrap",
        "Build a nav bar with evenly spaced items",
        "Create a 3-column layout that collapses on smaller screens",
        "Use Flexbox Froggy: https://flexboxfroggy.com/"
    ]),
    ("Day 2: CSS Grid Basics", [
        "Learn display:grid, grid-template-columns, grid-template-rows, gap, grid-area",
        "Build a photo gallery",
        "Layout a landing page: header, main, sidebar, footer",
        "Use Grid Garden: https://cssgridgarden.com/"
    ]),
    ("Day 3: Media Queries", [
        "Learn @media screen queries",
        "Mobile-first design approach",
        "Make 3-column layout collapse on mobile",
        "Adjust fonts and images for small screens"
    ]),
    ("Day 4: Fluid Layouts & Images", [
        "Learn width:100%, max-width, min-width",
        "Make images responsive",
        "Build a gallery page with fluid images",
        "Adjust text blocks responsively"
    ]),
    ("Day 5: Navigation & Header/Footer", [
        "Build responsive nav menu (hamburger on mobile)",
        "Create sticky header and footer",
        "Test navigation on different screen sizes"
    ]),
    ("Day 6: Real Project 1", [
        "Build a landing page using Flexbox/Grid",
        "Add responsive images and text",
        "Ensure mobile-first design works",
        "Include responsive nav menu"
    ]),
    ("Day 7: Real Project 2", [
        "Build a portfolio or blog page",
        "Multi-section layout: header, hero, cards, footer",
        "Fully responsive",
        "Optional: small CSS animations",
        "Publish to GitHub Pages or Netlify"
    ])
]

for day, tasks in days:
    pdf.set_font("Arial", "B", 14)
    pdf.ln(4)
    pdf.cell(0, 8, day, ln=True)
    pdf.set_font("Arial", "", 12)
    for task in tasks:
        pdf.multi_cell(0, 6, f"  - {task}")
        
# Save PDF
pdf_file = "Responsive_Web_Design_1Week_Checklist.pdf"
pdf.output(pdf_file)

print(f"PDF created: {pdf_file}")