// Listen for submit

document.getElementById("loan-form").addEventListener("submit",computeResults);


function computeResults(e){
    // UI

    const UIamount = document.getElementById("amount").value;
    const UIinterest = document.getElementById("interest").value;
    const UIyears = document.getElementById("years").value;

    // Calculate

    const principal = parseFloat(UIamount);
    const calculateInterest = parseFloat(UIinterest) / 100 / 12;
    const calculatedPayments = parseFloat(UIyears) * 12;

    // Compute Monthly Payment

    const x = Math.pow(1 + calculateInterest, calculatedPayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);

    // Compute Interest

    const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

    // Compute Total Payment

    const totalPayment = (monthly * calculatedPayments).toFixed(2);

    // Show Results

    document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

    document.getElementById("totalInterest").innerHTML = totalInterest + "%";

    document.getElementById("totalPayment").innerHTML = "$" + totalPayment;





    e.preventDefault();
}