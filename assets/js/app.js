const navigation = document.getElementById('navigation');

function toggle() {
  navigation.classList.toggle('mobile-hidden');
}

document.getElementById('close-button').addEventListener('click', toggle);
document.getElementById('hamburger').addEventListener('click', toggle);
