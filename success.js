// if (data.status) {
//     alert(data.msg); 
//   }
//   else {
//     alert(data.msg);
//     window.location.href = '../success.html';
//   }

const notifyForm = document.getElementById('mc_embed_signup_scroll');

if (localStorage.getItem('token')) {
  window.location.href = '../pages/secret.html';
} else {
  document.querySelector('.loading').style.display = 'none';
}