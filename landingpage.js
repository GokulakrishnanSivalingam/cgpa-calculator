  // Show/hide CGPA definition
  document.getElementById('showCgpaDefinition').addEventListener('click', function() {
      const definition = document.getElementById('cgpaDefinition');
      definition.style.display = 'block';
      document.getElementById('showGradeTable').style.display = 'block'; // Show the next button
  });

  // Show/hide grade table
  document.getElementById('showGradeTable').addEventListener('click', function() {
      const gradeTable = document.getElementById('gradeTable');
      gradeTable.style.display = 'block';
      document.getElementById('showCalculationMethod').style.display = 'block'; // Show the next button
  });

  // Show/hide calculation method
  document.getElementById('showCalculationMethod').addEventListener('click', function() {
      const calculationMethod = document.getElementById('calculationMethod');
      calculationMethod.style.display = 'block';
      document.getElementById('thankYouMessage').style.display = 'block'; // Show thank you message
  });

  function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
  }


  const name = getQueryParam('name');


  document.getElementById('displayName').textContent = name;