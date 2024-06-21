function calculateBenefits() {
    // Retrieve input values
    const householdSize = parseInt(document.getElementById('householdSize').value);
    const elderlyOrDisabled = document.getElementById('elderlyOrDisabled').value === 'yes';
    const student = document.getElementById('student').value === 'yes';
    const grossIncome = parseFloat(document.getElementById('grossIncome').value);
    const otherIncome = parseFloat(document.getElementById('otherIncome').value);
    const earnedIncome = grossIncome;  // All employment income is considered earned income
    const totalIncome = grossIncome + otherIncome;
    const childcareExpenses = parseFloat(document.getElementById('childcareExpenses').value) || 0;
    const medicalExpenses = parseFloat(document.getElementById('medicalExpenses').value) || 0;
    const shelterCosts = parseFloat(document.getElementById('shelterCosts').value) || 0;
    const utilityCosts = parseFloat(document.getElementById('utilityCosts').value) || 0;
    const childSupport = parseFloat(document.getElementById('childSupport').value) || 0;

    // // Income limits and deductions
    // const grossIncomeLimits = elderlyOrDisabled 
    //     ? [2630, 3555, 4480, 5405, 6330, 7255, 8180, 9105] 
    //     : [2430, 3288, 4144, 5000, 5858, 6714, 7570, 8428];
    // const netIncomeLimits = [1215, 1644, 2072, 2500, 2929, 3357, 3785, 4214];
    // const maxBenefits = [291, 535, 766, 973, 1155, 1386, 1532, 1751];
    // const standardDeductions = [198, 198, 198, 208, 244, 279];



    // Calculate deductions
    const standardDeduction = standardDeductions[Math.min(householdSize - 1, standardDeductions.length - 1)];
    const earnedIncomeDeduction = earnedIncome * 0.2;
    const excessMedicalExpenses = elderlyOrDisabled && medicalExpenses > 35 ? medicalExpenses - 35 : 0;
    const shelterDeduction = Math.max(0, shelterCosts + utilityCosts - 0.5 * (totalIncome - standardDeduction - earnedIncomeDeduction - childcareExpenses - childSupport - excessMedicalExpenses));

    // Calculate net income
    const netIncome = totalIncome - standardDeduction - earnedIncomeDeduction - childcareExpenses - childSupport - excessMedicalExpenses - shelterDeduction;

    // Check eligibility
    let eligibilityResult = 'You may not be eligible for SNAP benefits.';
    let benefitAmount = 'N/A';
    if (netIncome <= netIncomeLimits[Math.min(householdSize - 1, netIncomeLimits.length - 1)]) {
        eligibilityResult = 'You may be eligible for SNAP benefits.';
        const maxBenefit = maxBenefits[Math.min(householdSize - 1, maxBenefits.length - 1)];
        const calculatedBenefit = Math.max(0, maxBenefit - Math.round(0.3 * netIncome));
        benefitAmount = `Estimated SNAP benefit amount may be: $${calculatedBenefit} per month.`;
    }

    // Display results and highlight them
    document.getElementById('eligibilityResult').textContent = eligibilityResult;
    document.getElementById('benefitAmount').textContent = benefitAmount;
    document.getElementById('eligibilityResult').style.display = 'block';
    document.getElementById('benefitAmount').style.display = 'block';

    const grossIncomeTestResult = grossIncome <= grossIncomeLimits[Math.min(householdSize - 1, grossIncomeLimits.length - 1)] ? 'Pass' : 'Fail';
    const netIncomeTestResult = netIncome <= netIncomeLimits[Math.min(householdSize - 1, netIncomeLimits.length - 1)] ? 'Pass' : 'Fail';
    const assetTestResult = 'Pass'; // Assuming no asset limit for simplicity

    const breakdown = `
        <p><strong>Gross Income Test:</strong> ${grossIncomeTestResult}</p>
        <p>The gross monthly income limit is $${grossIncomeLimits[Math.min(householdSize - 1, grossIncomeLimits.length - 1)]}.</p>
        <p>Since the household gross income is $${grossIncome}, this household ${grossIncomeTestResult === 'Pass' ? 'passes' : 'fails'} the gross income test.</p>
        <p><strong>Net Income Test:</strong> ${netIncomeTestResult}</p>
        <p>The net monthly income limit is $${netIncomeLimits[Math.min(householdSize - 1, netIncomeLimits.length - 1)]}.</p>
        <p>Since the household net income (gross income minus deductions for expenses) is $${netIncome}, this household ${netIncomeTestResult === 'Pass' ? 'passes' : 'fails'} the net income test.</p>
        <p><strong>Asset Test:</strong> ${assetTestResult}</p>
        <p>This household is not held to an asset limit for SNAP eligibility.</p>
        <p><strong>Benefit Amount:</strong> ${benefitAmount}</p>
        <p>To determine the estimated amount of SNAP benefit, we start with the maximum allotment and then subtract 30% of net income.</p>
        <p>The maximum allotment for this household is $${maxBenefits[Math.min(householdSize - 1, maxBenefits.length - 1)]}.</p>
        <p>The household net monthly income is $${netIncome}. Thirty percent of $${netIncome} is $${Math.round(0.3 * netIncome)}. So to calculate the estimated benefit:</p>
        <p>$${maxBenefits[Math.min(householdSize - 1, maxBenefits.length - 1)]} - $${Math.round(0.3 * netIncome)} = ${benefitAmount} estimated benefit</p>
    `;

    // Display results and breakdown
    document.getElementById('results').innerHTML = `${eligibilityResult}<br><br>${breakdown}`;
    document.getElementById('results').style.display = 'block';
}