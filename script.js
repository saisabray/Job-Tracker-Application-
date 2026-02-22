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
    rejectedList = rejectedList.filter(
      (item) => item.companyName !== companyName,
    );
    if (currentStatus === "filter-interview") {
      interviewRender();
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
    if (currentStatus === "filter-rejected") {
      rejectedRender();
    }
    calculateCount();
  }
});

// rendering
// Interview Rendering
function interviewRender() {
  filterSection.innerHTML = "";
  for (let interview of interviewList) {
    const div = document.createElement("div");
    div.className = "job-card shadow p-10 rounded-lg flex justify-between";
    div.innerHTML = `
            <div class="card-details flex flex-col gap-5">
            <h2 class="company-name font-bold text-[#002C5C] text-2xl">
${interview.companyName}</h2>
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
                class="interview-btn px-4 py-2 text-green-500 font-bold text-2xl border-2 border-green-500 rounded"
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
          <div>
            <button
              class="delete-btn bg-red-400 text-white font-bold py-2 px-3"
            >
              Delete
            </button>
          </div>
  `;
    filterSection.appendChild(div);
  }
}
// Rejected Rendering
function rejectedRender() {
  filterSection.innerHTML = "";
  for (let rejected of rejectedList) {
    const div = document.createElement("div");
    div.className = "job-card shadow p-10 rounded-lg flex justify-between";
    div.innerHTML = `
        
         <div class="card-details flex flex-col gap-5">
            <h2 class="company-name font-bold text-[#002C5C] text-2xl">
${rejected.companyName}            </h2>
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
                class="rejected-btn px-4 py-2 text-red-500 font-bold text-2xl border-2 border-red-500 rounded"
              >
                REJECTED
              </button>
            </div>
          </div>
          <div>
            <button
              class="delete-btn bg-red-400 text-white font-bold py-2 px-3"
            >
              Delete
            </button>
          </div>

  `;
    filterSection.appendChild(div);
  }
}
