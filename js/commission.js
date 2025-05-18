// Create the Commission tab UI dynamically
const commissionSection = document.getElementById('commission');

commissionSection.innerHTML = `
  <h1>Commission Tracker</h1>
  <form id="commission-form">
    <label>
      Monday:
      <input type="number" min="0" value="0" name="monday" />
    </label><br />
    <label>
      Tuesday:
      <input type="number" min="0" value="0" name="tuesday" />
    </label><br />
    <label>
      Wednesday:
      <input type="number" min="0" value="0" name="wednesday" />
    </label><br />
    <label>
      Thursday:
      <input type="number" min="0" value="0" name="thursday" />
    </label><br />
    <label>
      Friday:
      <input type="number" min="0" value="0" name="friday" />
    </label><br />
    <label>
      <input type="checkbox" id="enable-saturday" /> Enable Saturday
    </label><br />
    <label id="saturday-label" style="display:none;">
      Saturday:
      <input type="number" min="0" value="0" name="saturday" />
    </label><br />
    <button type="button" id="calculate-btn">Calculate Commission</button>
  </form>
  <div id="commission-result"></div>
`;

const form = document.getElementById('commission-form');
const saturdayCheckbox = document.getElementById('enable-saturday');
const saturdayLabel = document.getElementById('saturday-label');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('commission-result');

saturdayCheckbox.addEventListener('change', () => {
  saturdayLabel.style.display = saturdayCheckbox.checked ? 'block' : 'none';
});

function calculateCommissionFromForm() {
  const data = new FormData(form);
  let dailyPolicies = [
    parseInt(data.get('monday')) || 0,
    parseInt(data.get('tuesday')) || 0,
    parseInt(data.get('wednesday')) || 0,
    parseInt(data.get('thursday')) || 0,
    parseInt(data.get('friday')) || 0,
  ];

  if (saturdayCheckbox.checked) {
    dailyPolicies.push(parseInt(data.get('saturday')) || 0);
  }

  const totalPolicies = dailyPolicies.reduce((a, b) => a + b, 0);
  let commission = 0;

  if (totalPolicies >= 8) {
    commission = totalPolicies * 125;
  }

  resultDiv.innerHTML = `
    <p>Total Policies Sold This Week: <strong>${totalPolicies}</strong></p>
    <p>Commission Earned: <strong>$${commission.toFixed(2)}</strong></p>
  `;
}

calculateBtn.addEventListener('click', calculateCommissionFromForm);
