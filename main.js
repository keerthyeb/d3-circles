const main = function() {
  const radius = [10, 20, 30, 40, 50, 60];
  const container = d3.select("#chart-container");
  const svg = container
    .append("svg")
    .attr("width", 1400)
    .attr("height", 700)
    .style("border", "1px solid black");

  const circles = svg
    .selectAll("circle")
    .data(radius)
    .enter()
    .append("circle")
    .attr("r", radius => Math.random() * 1.5 * radius)
    .attr("cx", radius => radius * 13)
    .attr("cy", radius => radius * 10)
    .style(
      "fill",
      radius =>
        "rgb(" +
        Math.random() * radius * 5 +
        "," +
        Math.random() * radius * 5 +
        "," +
        Math.random() * radius * 5 +
        ")"
    );
    setInterval(() => {
        location.reload();
    }, 500);
};

window.onload = main;
