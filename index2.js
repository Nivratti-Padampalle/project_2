function generateFields() {
    const num = document.getElementById("numProcesses").value;
    const container = document.getElementById("inputFieldsContainer");
    container.innerHTML = ""; // clear old fields

    if (num < 1) {
        alert("Please enter a valid number of processes.");
        return;
    } else {
        alert("Fill the following fields.");
    }

    for (let i = 1; i <= num; i++) {
        const label = document.createElement("label");
        label.textContent = `Burst Time of P${i}: `;

        const input = document.createElement("input");
        input.type = "number";
        input.id = `burstTime${i}`;
        input.placeholder = "Burst Time";
        input.required = true;
        input.style.margin = "5px";

        const br = document.createElement("br");

        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(br);
    }
}

function calculateFCFS() {
    const num = document.getElementById("numProcesses").value;
    let burstTimes = [];

    // Collect burst times from inputs
    for (let i = 1; i <= num; i++) {
        const value = document.getElementById(`burstTime${i}`).value;
        if (value === "") {
            alert(`Please enter burst time for process P${i}`);
            return;
        }
        burstTimes.push(parseInt(value));
    }

    let totalWaitingTime = 0;
    let sum = 0;

    // FCFS waiting time calculation
    for (let i = 1; i < burstTimes.length; i++) {
        sum =sum+ burstTimes[i - 1];
        totalWaitingTime =totalWaitingTime + sum;
    }

    const averageWaitingTime = totalWaitingTime / burstTimes.length;

    // Display the result
    document.getElementById("result").innerHTML =
        `<p style="font-size:20px; color:green;">Average Waiting Time = ${averageWaitingTime.toFixed(2)}</p>`;
}
