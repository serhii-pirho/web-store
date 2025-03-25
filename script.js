function placeOrder() {
    let size = document.getElementById("size").value;
    let toppings = [];
    document.querySelectorAll('input[type=checkbox]:checked').forEach((el) => {
        toppings.push(el.value);
    });
    let summary = `Ste naročili ${size} pizzo z ${toppings.length ? toppings.join(", ") : "brez sestavin"}.`;
    document.getElementById("Vaše naročilo").innerText = summary;
}