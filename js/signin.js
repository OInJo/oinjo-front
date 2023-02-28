const del = document.querySelector(".delete");
const inputText = document.querySelector("#input-text"); 

function testFunction() {
  inputText.value = "";
}
del.addEventListener("click", testFunction); 
// delete X

$.lang = {};
$.lang.ko = {
    0: '로그인',
    1: '아이디',
    2: '비밀번호',
    3: '로그인',
    4: '회원가입',
    5: '아이디 찾기',
    6: '비밀번호 찾기'
};
$.lang.en = {
    0: 'Login',
    1: 'ID',
    2: 'Password',
    3: 'Login',
    4: 'Sign Up',
    5: 'Find ID',
    6: 'Find Password'
};
function setLanguage(currentLanguage) {
  console.log('setLanguage', arguments);
  
  $('[data-langNum]').each(function() {
    var $this = $(this); 
    $this.html($.lang[currentLanguage][$this.data('langnum')]); 
  });    
}  
$('button').click(function() {
  var lang = $(this).data('lang');
  setLanguage(lang); 
});
