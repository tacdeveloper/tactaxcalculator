import { useState } from "react";

export default function TaxCalculator() {
  const [monthlySalary, setMonthlySalary] = useState(0);
  const annualSalary = monthlySalary * 12;

const calculateTax = (income) => {
  const slabs = [
    { from: 0, to: 600000, rate: 0, fixed: 0 },
    { from: 600001, to: 1200000, rate: 0.01, fixed: 0 },
    { from: 1200001, to: 2200000, rate: 0.11, fixed: 6000 },
    { from: 2200001, to: 3200000, rate: 0.23, fixed: 116000 },
    { from: 3200001, to: 4100000, rate: 0.3, fixed: 346000 },
    { from: 4100001, to: Infinity, rate: 0.35, fixed: 616000 }
  ];

  for (let slab of slabs) {
    if (income >= slab.from && income <= slab.to) {
      return slab.fixed + (income - slab.from) * slab.rate;
    }
  }
  return 0;
};


  const annualTax = calculateTax(annualSalary);
  const monthlyTax = annualTax / 12;
  const annualRate = (annualTax / annualSalary) * 100 || 0;

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>💼 TAC Tax Calculator</h1>
      <label style={{ fontWeight: 'bold' }}>Enter Monthly Salary (PKR):</label>
      <input
        type="number"
        value={monthlySalary}
        onChange={(e) => setMonthlySalary(Number(e.target.value))}
        style={{
          width: '100%',
          padding: '10px',
          marginTop: '10px',
          marginBottom: '20px',
          borderRadius: '10px',
          border: '1px solid #ccc'
        }}
      />
      <div style={{ lineHeight: '2em' }}>
        <p>📆 Annual Salary: <strong>Rs. {annualSalary.toLocaleString()}</strong></p>
        <p>💰 Annual Tax: <strong>Rs. {annualTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong></p>
        <p>🧾 Monthly Tax: <strong>Rs. {monthlyTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong></p>
        <p>📊 Avg Annual Tax Rate: <strong>{annualRate.toFixed(2)}%</strong></p>
      </div>
    </div>
  );
}
