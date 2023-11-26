function generateReport() {
  const tableHeaders = Array.from(
    document.querySelectorAll("thead tr th input")
  );

  const rows = document.querySelectorAll("tbody tr");
  const n = rows.length;
  const keys = extractObjectKeys();
  const m = keys.length;

  const result = [];
  for (let i = 1; i <= n; i++) {
    const object = {};
    for (let j = 0; j < m; j++) {
      const key = tableHeaders[keys[j]].parentElement.textContent
        .trim()
        .toLowerCase();
      const value = document
        .querySelector(`tbody tr:nth-child(${i}) td:nth-child(${keys[j] + 1})`)
        .textContent.trim();
      object[key] = value;
    }
    result.push(object);
  }

  const outputtextArea = document.getElementById("output");
  outputtextArea.value = JSON.stringify(result);

  function extractObjectKeys() {
    let objectKeys = [];
    const n = tableHeaders.length;
    for (let i = 0; i < n; i++) {
      if (tableHeaders[i].checked) {
        objectKeys.push(i);
      }
    }
    return objectKeys;
  }
}
