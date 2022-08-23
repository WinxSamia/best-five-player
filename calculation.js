document.getElementById('btn-Calculate').addEventListener('click', function () {
    const playerInputField = document.getElementById('Per-Player-field');
    const perPlayer = playerInputField.value;

    const playerExpense = document.getElementById('Player-Expenses');
    const totalPlayerExpenses = playerExpense.innerText;
    playerExpense.innerText = perPlayer * 5;
    const totalPlayerExpensesNum = parseFloat(playerExpense.innerText);


    document.getElementById('btn-Calculate-total').addEventListener('click', function () {

        const managerField = document.getElementById('Manager-field');
        const managerValue = managerField.value;
        const managerValueNum = parseFloat(managerValue);


        const coachField = document.getElementById('Coach-field');
        const coachValue = coachField.value;
        const coachValueNum = parseFloat(coachValue);


        const total = document.getElementById('Total-balance');
        total.innerText = totalPlayerExpensesNum + managerValueNum + coachValueNum;

    })


})


