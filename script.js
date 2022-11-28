var selectedRow = null;
function onFormSubmit() {
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["productName"] = document.getElementById("productName").value;
    formData["price"] = document.getElementById("price").value;
    formData["qty"] = document.getElementById("qty").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.qty;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('productName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('price').value = selectedRow.cells[2].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.productName;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.qty;
}

function onDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById('storeList').deleteRow(row.rowIndex);

    resetForm();
}

function resetForm(){
    document.getElementById('productCode').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('price').value = '';
    document.getElementById('qty').value = '';
}