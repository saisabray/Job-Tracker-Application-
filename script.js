let total = document.getElementById("total-count");
let interveiwCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
const allJob = document.getElementById("job-list");
let interviewList = [];
let rejectedList = [];

function calculateCount() {
  total.innerText = allJob.children.length;
  interveiwCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id) {
  const allFilterBtn = document.getElementById("filter-all");
  const interviewFilterBtn = document.getElementById("filter-interview");
  const rejectedFilterBtn = document.getElementById("filter-rejected");
  allFilterBtn.classList.remove("bg-blue-500", "text-white");
  interviewFilterBtn.classList.remove("bg-blue-500", "text-white");
  rejectedFilterBtn.classList.remove("bg-blue-500", "text-white");
  const selected = document.getElementById(id);
  selected.classList.add("bg-blue-500", "text-white");
}
