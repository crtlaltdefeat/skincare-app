// Sample product list
const products = [
  {
    name: "CeraVe Foaming Cleanser",
    concerns: ["acne", "oily"],
    description: "Gentle foaming cleanser for acne-prone skin.",
    link: "https://www.amazon.com/dp/B003YMJJSK"
  },
  {
    name: "The Ordinary Niacinamide 10%",
    concerns: ["acne", "darkspots"],
    description: "Serum to reduce blemishes and brighten skin.",
    link: "https://theordinary.com/niacinamide-10"
  },
  {
    name: "Cetaphil Moisturizing Cream",
    concerns: ["dryness", "sensitive"],
    description: "Rich moisturizer for dry and sensitive skin.",
    link: "https://www.cetaphil.com/product/moisturizing-cream"
  }
];

// Grab the form and results div
const form = document.getElementById("quizForm");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const selectedConcern = document.getElementById("concernSelect").value;

  // Filter products by concern
  const filteredProducts = products.filter(product =>
    product.concerns.includes(selectedConcern)
  );

  // Show results or message if none
  if (filteredProducts.length === 0) {
    resultsDiv.innerHTML = "<p>No products found for that concern.</p>";
  } else {
    let html = "<h2>Recommended Products:</h2><ul>";
    filteredProducts.forEach(product => {
      html += `<li>
        <strong>${product.name}</strong><br />
        ${product.description}<br />
        <a href="${product.link}" target="_blank">Buy here</a>
      </li><br />`;
    });
    html += "</ul>";
    resultsDiv.innerHTML = html;
  }
});
