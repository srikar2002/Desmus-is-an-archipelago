const students = [
    "AKASH",
    "SRIKAR",
    "RAJA",
    "SURYA",
    // Add more students
  ];
  
  const attendanceList = document.getElementById("attendanceList");
  
  function createAttendanceCard(student) {
    const card = document.createElement("div");
    card.className = "attendance-card";
  
    const name = document.createElement("span");
    name.textContent = student;
    card.appendChild(name);
  
    const status = document.createElement("span");
    status.textContent = "Absent";
    card.appendChild(status);
  
    const button = document.createElement("button");
    button.textContent = "Mark Attendance";
    button.addEventListener("click", () => toggleAttendance(status, button));
    card.appendChild(button);
  
    attendanceList.appendChild(card);
  }
  
  function toggleAttendance(statusElement, button) {
    if (statusElement.textContent === "Absent") {
      statusElement.textContent = "Present";
      button.classList.add("absent");
    } else {
      statusElement.textContent = "Absent";
      button.classList.remove("absent");
    }
  }
  
  function initialize() {
    students.forEach((student) => {
      createAttendanceCard(student);
    });
  }
  
  initialize();
  