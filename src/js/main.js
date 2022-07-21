//import data
import { data_job, data_timeline, data_timeline_2, img_data } from "./data/data.js";
import {
    slider,scroll_TOP,tab_Conten,open_Form_control,
    showMess, timeline_read, detail_TT,
    timeline_read_2, detail_timeline_2, isFunction_img, seach, _detail_imgANDtext, updated, isUpdate
} from './function.js';
import header from "../component/header.js";
import footer from "../component/footer.js";

//slideer
slider();

//click_toggle_menu
const click = document.querySelector('.menu_icon i');
var menu = document.querySelector('.menu_chidrent');
if (click) {
    click.addEventListener('click', function () {
        menu.classList.add('active');
    })
}
//remove class menu để ấn đi menu
var close = document.querySelector('.close')
if (close) {
    close.addEventListener('click', () => { menu.classList.remove('active') });
}

//cuộn chuột

scroll_TOP();
//click thì quay lại đầu trang
var click_top_page = document.querySelector('.top');
if (click_top_page) {
    click_top_page.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    })
}


// view blog
showMess();

//timeline
timeline_read(data_timeline);

//chi tiết thử thách giai đoạn 1

detail_TT(data_timeline);

//cột timeline 2
timeline_read_2(data_timeline_2)

//chi tiết timline 2
detail_timeline_2();

//click vào thì add class active

tab_Conten();

//select img
//nếu mà click vào từng tab trên blog thì ảnh sẽ chuyển theo từng blog đấy
seach();

//view img ra màn hình
isFunction_img(img_data);

//click show detail img
_detail_imgANDtext();

//EDIT THỬ THÁCH 
updated();

//open form controll
open_Form_control();
//gọi hàm updated
const isupdated = document.querySelector('.summit_update');
if (isupdated) {
    isupdated.addEventListener("click", isUpdate);
}

//footer page
var footer_page=document.querySelector('.l')
if(footer_page){
    footer_page.innerHTML = footer.render();
}