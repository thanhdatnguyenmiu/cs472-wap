$(document).ready(function() {
    $('#btnSubmit').on('click', function(event) {
        event.preventDefault();
        const productNumber = $("#productNumber").val();
        const name = $("#name").val();
        const unitPirce = $("#unitPirce").val();
        const url = $("#url").val();
        const quantity = $("#quantity").val();
        const supplier = $("#supplier").val();
        const date = $("#date").val();
        const html = `<p>Product Name:${productNumber}</p>
        <p>Name:${name}</p>
        <p>Unit Price:${unitPirce}</p>
        <p>URL:${url}</p>
        <p>Quantitu:${quantity}</p>
        <p>Supplier:${supplier}</p>
        <p>Date:${date}</p>`;
        $('.information').append(html);
    });
});