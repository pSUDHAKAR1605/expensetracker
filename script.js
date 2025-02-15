document.addEventListener('DOMContentLoaded', () => {
    const expenseForm=document.getElementById('expense-form');
    const expenseName=document.getElementById('expense-name');
    const expenseAmount=document.getElementById('expense-amount');
    const expenseDate=document.getElementById('expense-date');
    const expensesList=document.getElementById('expenses');
    const totalAmount=document.getElementById('total');
    
    let total=0;
    // Add expense
    expenseForm.addEventListener('submit',(e) => {
        e.preventDefault();

        const name=expenseName.value.trim();
        const amount=parseFloat(expenseAmount.value);
        const date=expenseDate.value;

        if (!name||isNaN(amount)||!date) {
            alert('Please fill in all fields correctly!');
            return;
        }
        
        //caliing the addExpense function
        addExpense(name,amount,date);
        updateTotal(amount);

        // this resets the form
        expenseForm.reset();
    });

    function addExpense(name, amount, date) {
        const li = document.createElement('li'); // creating a new list item
        // adding the content to the list item
        li.innerHTML = `
            ${name} - $${amount.toFixed(2)} (${date})     
            <button class="delete-btn">Delete</button>
        `;  
        // adding the delete button functionality
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            expensesList.removeChild(li);
            updateTotal(-amount);
        });
        // adding the list item to the unordered list
        expensesList.appendChild(li);
    }
    // function to update the total amount
    function updateTotal(amount) {
        total += amount;
        totalAmount.textContent = total.toFixed(2);
    }
});
