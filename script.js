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
const totalText = document.getElementById("job-total-text");

// calculateCount Here

function calculateCount() {
  const total = jobList.children.length;
  totalJobCount.innerText = total;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  if (currentStatus === "filter-interview") {
    totalText.innerText = interviewList.length + " Jobs";
  } else if (currentStatus === "filter-rejected") {
    totalText.innerText = rejectedList.length + " Jobs";
  } else {
    totalText.innerText = total + " Jobs";
  }
  console.log(totalJobCount, interviewCount, rejectedCount, totalText);
}
calculateCount();

// Toggle Here

function toggleShow(id) {
  allFilter.classList.remove("bg-blue-500", "text-white");
  interviewFilter.classList.remove("bg-blue-500", "text-white");
  rejectedFilter.classList.remove("bg-blue-500", "text-white");
  const selected = document.getElementById(id);
  currentStatus = id;
  selected.classList.add("bg-blue-500", "text-white");
  selected.classList.remove("text-black");
  if (id === "filter-interview") {
    jobList.classList.add("hidden");
    filterSection.classList.remove("hidden");
    interviewRender();
  } else if (id === "filter-all") {
    jobList.classList.remove("hidden");
    filterSection.classList.add("hidden");
    allRender();
  } else if (id === "filter-rejected") {
    jobList.classList.add("hidden");
    filterSection.classList.remove("hidden");
    rejectedRender();
  }
  calculateCount();
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
    rejectedList = rejectedList.filter(
      (item) => item.companyName !== companyName,
    );
    if (currentStatus === "filter-interview") {
      interviewRender();
    } else if (currentStatus === "filter-rejected") {
      rejectedRender();
    }
    calculateCount();
  }
  // Rejected
  else if (e.target.classList.contains("rejected-btn")) {
    const parentNode = e.target.closest(".job-card");
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobDetails = parentNode.querySelector(".job-details").innerText;
    const status = parentNode.querySelector(".status").innerText;
    parentNode.querySelector(".status").innerText = "Rejected";
    const cardInfo = {
      companyName,
      jobName,
      jobDetails,
      status: "Rejected",
    };
    const existing = rejectedList.find(
      (item) => item.companyName === companyName,
    );
    if (!existing) {
      rejectedList.push(cardInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.companyName !== companyName,
    );
    if (currentStatus === "filter-interview") {
      interviewRender();
    } else if (currentStatus === "filter-rejected") {
      rejectedRender();
    }
    calculateCount();
  }
  // Delete
  else if (e.target.classList.contains("delete-btn")) {
    const parentNode = e.target.closest(".job-card");
    const companyName = parentNode.querySelector(".company-name").innerText;
    interviewList = interviewList.filter(
      (item) => item.companyName !== companyName,
    );
    rejectedList = rejectedList.filter(
      (item) => item.companyName !== companyName,
    );
    parentNode.remove();
    if (jobList.children.length === 0) {
      allRender();
    }
    if (currentStatus === "filter-interview") {
      interviewRender();
    } else if (currentStatus === "filter-rejected") {
      rejectedRender();
    }
    calculateCount();
  }
});

// rendering
// Interview Rendering
function interviewRender() {
  filterSection.innerHTML = "";
  if (interviewList.length === 0) {
    const div = document.createElement("div");
    div.className =
      "flex justify-center items-center flex-col gap-5 shadow p-10 rounded-lg h-[350px]";
    div.innerHTML = ` <img
            src="assets/jobs.png"
            class="w-[50px] block"
            alt="document.png"
          />
          <h2 class="company-name font-bold text-[#002C5C] text-2xl">
            No job available
          </h2>

    `;
    filterSection.appendChild(div);
    return;
  }
  for (let interview of interviewList) {
    const div = document.createElement("div");
    div.className = "job-card shadow p-5 md:p-10 rounded-lg";
    div.innerHTML = `
            <div class="card-details flex flex-col gap-5">
           <div class="flex justify-between items-center">
              <h2 class="company-name font-bold text-[#002C5C] text-2xl">
                ${interview.companyName}
              </h2>
              <button
                class="delete-btn rounded-full bg-transparent border border-gray-300 text-black font-bold w-10 h-10"
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
            <span class="job-name block text-[#64748B] text-[16px]"
              >${interview.jobName}</span
            >
            <div
              class="job-details flex gap-2 text-red-500 text-sm items-center"
            >
             ${interview.jobDetails}
            </div>
            <p
              class="status w-max rounded text-sm font-semibold font-white py-3 px-5 bg-[#EEF4FF]"
            >${interview.status}</p>

            <p>
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
            <div class="flex gap-5">
              <button
                class="interview-btn px-4 py-2 text-green-500 font-bold text-lg md:text-2xl border-2 border-green-500 rounded"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn px-4 py-2 text-red-500 font-bold text-2xl border-2 border-red-500 rounded"
              >
                REJECTED
              </button>
            </div>
          </div>
         
  `;
    filterSection.appendChild(div);
  }
}
// Rejected Rendering
function rejectedRender() {
  filterSection.innerHTML = "";
  if (rejectedList.length === 0) {
    const div = document.createElement("div");
    div.className =
      "flex justify-center items-center flex-col gap-5 shadow p-10 rounded-lg h-[350px]";
    div.innerHTML = ` <img
            src="assets/jobs.png"
            class="w-[50px] block"
            alt="document.png"
          />
          <h2 class="company-name font-bold text-[#002C5C] text-2xl">
            No job available
          </h2>

    `;
    filterSection.appendChild(div);
    return;
  }
  for (let rejected of rejectedList) {
    const div = document.createElement("div");
    div.className = "job-card shadow p-5 md:p-10 rounded-lg ";
    div.innerHTML = `
        
         <div class="card-details flex flex-col gap-5">
<div class="flex justify-between items-center">
              <h2 class="company-name font-bold text-[#002C5C] text-2xl">
                ${rejected.companyName}
              </h2>
              <button
                class="delete-btn rounded-full bg-transparent border border-gray-300 text-black font-bold w-10 h-10"
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
            <span class="job-name block text-[#64748B] text-[16px]"
              >${rejected.jobName}</span
            >
            <div
              class="job-details flex gap-2 text-red-500 text-sm items-center"
            >
             ${rejected.jobDetails}
            </div>
            <p
              class="status w-max rounded text-sm font-semibold font-white py-3 px-5 bg-[#EEF4FF]"
            >
${rejected.status}            </p>

            <p>
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
            <div class="flex gap-5">
              <button
                class="interview-btn px-4 py-2 text-green-500 font-bold text-2xl border-2 border-green-500 rounded"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn px-4 py-2 text-red-500 font-bold text-lg md:text-2xl border-2 border-red-500 rounded"
              >
                REJECTED
              </button>
            </div>
          </div>


  `;
    filterSection.appendChild(div);
  }
}

// All state empty

function allRender() {
  filterSection.innerHTML = "";
  if (jobList.children.length === 0) {
    const div = document.createElement("div");
    div.className =
      "flex justify-center items-center flex-col gap-5 shadow p-10 rounded-lg h-[350px]";
    div.innerHTML = ` <img
            src="assets/jobs.png"
            class="w-[50px] block"
            alt="document.png"
          />
          <h2 class="company-name font-bold text-[#002C5C] text-2xl">
            No job available
          </h2>

    `;
    filterSection.appendChild(div);
    filterSection.classList.remove("hidden");
    jobList.classList.add("hidden");
  }
}
