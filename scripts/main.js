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
const calendar_days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const selected_focus = document.querySelectorAll(".selected_focus");
const calendar_weekly_days = document.querySelector(".calendar_weekly_days");
const repeat_filter_monthly = document.querySelector(".repeat_filter_monthly");
const monthly_filter = document.querySelector(".monthly");
const weekly_filter = document.querySelector(".weekly");
const weekly_days_count = document.querySelectorAll(".weekly_days_count");
const weekly_days_filter = document.querySelector(".weekly_days_filter");
const specific_days = document.querySelector(".specific_days");
const all_day_check = document.querySelector(".all_day_check");
const all_day_check_input = document.querySelector(".all_day_check_input");
const eah_day_input = document.querySelectorAll(".eah_day_input");

const habit_name = document.querySelector("#habitName");
const icon_item = document.querySelectorAll(".icon_item");
const color_item = document.querySelectorAll(".color_item");
const repeat_filter = document.querySelectorAll(".repeat_filter");
const daily_filter = document.querySelector(".daily");

let holding_state = {
  name: "",
  icon: "",
  color: "",
  repeat: "",
  whenDo: "",
};

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

//Daily, Weekly, Monthly calendar
//Monthly function

const monthlyCalendar = () => {
  for (let i = 0; i < calendar_days.length; i++) {
    const newDay = document.createElement("span");
    newDay.classList.add("single_day");
    calendar_weekly_days.appendChild(newDay);
    newDay.innerHTML = calendar_days[i];
  }
};
monthlyCalendar();

//Hide or Show days, week and month sections
const toggleElement = (element, location) => {
  element.addEventListener("click", () => {
    if (location.style.display != "block") {
      location.style.display = "block";
    } else {
      location.style.display = "none";
    }
  });
};

toggleElement(monthly_filter, repeat_filter_monthly);
toggleElement(weekly_filter, weekly_days_filter);
toggleElement(daily_filter, specific_days);

//Style the focused item
// const makeFocus = () => {
//   selected_focus.forEach((single_item) => {
//     single_item.addEventListener("click", (e) => {
//       selected_focus.forEach((item) => {
//         item.classList.remove("get_focus");
//         item.classList.remove("active");
//       });
//       single_item.classList.add("get_focus");
//     });
//   });
// };
// makeFocus();

//Check mark on selected color
//change color icon on click
//Select all days when checking the all day checkbox
const all_day_fcn = () => {
  all_day_check_input.addEventListener("change", (event) => {
    eah_day_input.forEach((each) => {
      each.checked = event.target.checked;
    });
  });
  eah_day_input.forEach((each) => {
    each.addEventListener("click", () => {
      if (each.checked == false) {
        all_day_check_input.checked = false;
      }
    });
  });
};
all_day_fcn();
