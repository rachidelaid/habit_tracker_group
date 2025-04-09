const color_collection_grid = document.querySelector(".color_collection_grid");
const color_span_holder = [];
const color_collection_root = [
  "--light-purple",
  "--light-red",
  "--Light-Cyan",
  "--Light-Sky-Blue",
  "--Light-Pink",
  "--Light-Violet",
  "--light-orange",
  "--Light-Blue",
  "--Light-Teal",
  "--Light-Steel-Blue",
  "--Light-Yellow",
  "--Mint-Green",
  "--Light-Magenta",
  "--light-green",
];

//create a color grid 5x3
const colorGrid = () => {
  const color_picker_label = document.createElement("label");
  const color_picker = document.createElement("input");
  const color_picker_alt = document.createElement("span");
  color_picker_label.classList.add("color_label");
  color_picker.setAttribute("id", "color_picker_input");
  color_picker_alt.classList.add("color_picker_alt");
  color_picker.setAttribute("type", "color");

  for (let i = 0; i < color_collection_root.length; i++) {
    const newSpan = document.createElement("span");
    // console.log("saitam is gay");
    color_collection_grid.appendChild(newSpan);
    newSpan.classList.add("color_item");
    color_span_holder.push(newSpan);
  }
  for (let i = 0; i < color_span_holder.length; i++) {
    color_span_holder[
      i
    ].style.backgroundColor = `var(${color_collection_root[i]})`;
  }
  color_collection_grid.appendChild(color_picker_label);
  color_picker_label.appendChild(color_picker);
  color_picker_label.appendChild(color_picker_alt);
  color_span_holder.push(color_picker);
  color_picker.classList.add("color_item");
};
colorGrid();
//change color icon on click
