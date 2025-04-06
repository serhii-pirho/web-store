function placeOrder() {
    let size = document.getElementById("size").value;
    let toppings = [];
    document.querySelectorAll('input[type=checkbox]:checked').forEach((el) => {
        toppings.push(el.value);
    });
    let summary = `Ste narocili ${size} pizzo s ${toppings.length ? toppings.join(", ") : "brez sestavin"}.`;
    document.getElementById("orderSummary").innerText = summary;
}
