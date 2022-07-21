import header from "../component/header.js"; //header
import footer from "../component/footer.js";

var header_detail=document.querySelector('.header_detail');
var ft_detail=document.querySelector('.footer');
header_detail.innerHTML=header.render();
ft_detail.innerHTML=footer.render();
