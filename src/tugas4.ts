function sapaan(parameter: string | number): string {
  if (typeof parameter === "string") {
    return `Halo, ${parameter}`;
  } else {
    return `Umur: ${parameter} tahun`;
  }
}

console.log(sapaan("Febby"));
console.log(sapaan(16));
