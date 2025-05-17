let balance=0;
let transactions=[];

function updateUI(){
    document.getElementById("balance").textContent="$"+balance.toFixed(2);

    const transactionHistory=document.getElementById("transactionHistory");
    transactionHistory.innerHTML="";
     transactions.forEach(transaction =>{
        const row=document.createElement("tr")
        row.innerHTML=`
    <td>${transaction.date}</td>
    <td>${transaction.type}</td>
    <td>$${transaction.amount.toFixed(2)}</td>
    <td>${transaction.balanceAfter.toFixed(2)}</td>
        `;
        transactionHistory.appendChild(row)
     })
}

function addMoney(){
    const amount= parseFloat(document.getElementById("amount").value)
    if(isNaN(amount)|| amount<=0){
        alert("Please enter a valid amount.")
        return;
    }
    balance+=amount;
    transactions.push({date:new Date().toLocaleString(),type:"add",amount,balanceAfter:balance })
    updateUI();
    document.getElementById("amount").value="";
}


function withdrawMoney(){
    const amount= parseFloat(document.getElementById("amount").value)
    if(isNaN(amount)|| amount<=0){
        alert("Please enter a valid amount.")
        return;
    }
    
    if(amount>balance){
        alert("Insufficient balance.");
        return;
    }


    balance-=amount;
    transactions.push({date:new Date().toLocaleString(),type:"withdraw",amount,balanceAfter:balance })
    updateUI();
    document.getElementById("amount").value="";
}