function generateRandomStopCode() {
    const stopCodes = [
        "PAGE_FAULT_IN_NONPAGED_AREA",
        "IRQL_NOT_LESS_OR_EQUAL",
        "DRIVER_IRQL_NOT_LESS_OR_EQUAL",
        "SYSTEM_SERVICE_EXCEPTION",
        "KERNEL_SECURITY_CHECK_FAILURE",
        "CRITICAL_PROCESS_DIED",
        "SYSTEM_THREAD_EXCEPTION_NOT_HANDLED"
    ];

    const randomIndex = Math.floor(Math.random() * stopCodes.length);
    return stopCodes[randomIndex];
}

function updateStopCodeAndError() {
    const stopCodeElement = document.getElementById("stop-code");
    const errorSearchElement = document.getElementById("error-search");

    const stopCode = generateRandomStopCode();
    stopCodeElement.textContent = stopCode;
    errorSearchElement.textContent = stopCode;
}

window.addEventListener("load", updateStopCodeAndError);
