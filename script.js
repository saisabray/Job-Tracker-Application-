let interviewList = [];
let rejectedList = [];
let currentStatus = "";
const totalJobCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const jobList = document.getElementById("job-list");
const allFilter = document.getElementById("filter-all");
const interviewFilter = document.getElementById("filter-interview");
const rejectedFilter = document.getElementById("filter-rejected");
const mainContainer = document.querySelector("main");
const interviewBtn = document.getElementsByClassName("interview-btn");
const rejectedBtn = document.getElementsByClassName("rejected-btn");
const filterSection = document.getElementById("filter-container");

// calculateCount Here

function calculateCount() {
  totalJobCount.innerText = jobList.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// Toggle Here

function toggleShow(id) {
  allFilter.classList.remove("bg-blue-500", "text-white");
  interviewFilter.classList.remove("bg-blue-500", "text-white");
  rejectedFilter.classList.remove("bg-blue-500", "text-white");
  allFilter.classList.add("text-black");
  allFilter.classList.add("text-black");
  allFilter.classList.add("text-black");
  const selected = document.getElementById(id);
  currentStatus = id;
  selected.classList.add("bg-blue-500", "text-white");
  selected.classList.remove("text-black");

}

// Interview

mainContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-btn")) {
    const parentNode = e.target.closest(".job-card");
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobDetails = parentNode.querySelector(".job-details").innerText;
    const status = parentNode.querySelector(".status").innerText;
    parentNode.querySelector(".status").innerText = "Interview";
    const cardInfo = {
      companyName,
      jobName,
      status: "Interview",
      jobDetails,
    };
    console.log(cardInfo);
    const existing = interviewList.find(
      (item) => item.companyName === companyName,
    );
    if (!existing) {
      interviewList.push(cardInfo);
    }
    calculateCount();
  }

});

