function calculate() {
  const pi = parseFloat(document.getElementById("pi").value);
  const pf = parseFloat(document.getElementById("pf").value);
  const area = parseFloat(document.getElementById("area").value);
  const time = parseFloat(document.getElementById("time").value);

  if (!pi || !pf || !area || !time) {
    alert("Por favor, complete todos los campos correctamente.");
    return;
  }

  if (pf > pi) {
    alert("La masa final no puede ser mayor que la inicial. Por favor, revise los datos experimentales.");
    return;
  }

  if (area <= 0 || time <= 0) {
  alert("El área y el tiempo deben ser mayores que cero.");
  return;
}

  const massLoss = pi - pf;
  const rate = (massLoss * 1000) / (area * time);

  document.getElementById("rate").textContent = rate.toFixed(4);
}
