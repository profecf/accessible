document.addEventListener('DOMContentLoaded', function () {

  const button = document.getElementById('custom-button');
  const tooltip = document.getElementById('tooltip');
  
  button.addEventListener('focus', () => {
    tooltip.style.visibility = 'visible';
  });
  
  button.addEventListener('blur', () => {
    tooltip.style.visibility = 'hidden';
  });
  

});