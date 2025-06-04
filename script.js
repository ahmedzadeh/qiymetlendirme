function toFloatSafe(val) {
  return parseFloat(String(val).replace(",", "."));
}

function qiymetVer(bal) {
  if (bal >= 81) return 5;
  if (bal >= 61) return 4;
  if (bal >= 31) return 3;
  return 2;
}

function showResult(bal) {
  const qiymet = qiymetVer(bal);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Bal: ${bal} <br> Qiymət: ${qiymet}`;
  resultDiv.classList.add("visible");
}

function calculateYarimillik() {
  const k1 = toFloatSafe(document.getElementById("ksq1").value);
  const k2 = toFloatSafe(document.getElementById("ksq2").value);
  const k3 = toFloatSafe(document.getElementById("ksq3").value);
  const hasBsq = document.getElementById("has_bsq").checked;
  const b = toFloatSafe(document.getElementById("bsq").value);

  const ortalama = (k1 + k2 + k3) / 3;
  const netice = hasBsq ? (ortalama * 0.4 + b * 0.6) : ortalama;
  showResult(Math.round(netice * 10) / 10);
}

function calculateIllik() {
  const y1 = toFloatSafe(document.getElementById("y1").value);
  const y2 = toFloatSafe(document.getElementById("y2").value);
  const netice = (y1 + y2) / 2;
  showResult(Math.round(netice * 10) / 10);
}

function resetForm(id) {
  document.querySelectorAll(`#${id} input`).forEach(input => {
    if (input.type === "checkbox") input.checked = false;
    else input.value = "";
  });
  document.getElementById("result").classList.remove("visible");
}

function switchSection(type) {
  document.getElementById("yarimillik").classList.remove("active");
  document.getElementById("illik").classList.remove("active");
  document.getElementById(type).classList.add("active");
  document.getElementById("result").classList.remove("visible");
}
