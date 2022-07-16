//import data
import { data_job, data_timeline, data_timeline_2 } from "./data/data.js";
console.log(1, data_job)
//slideer

const slideer = document.querySelector('.h');
const slider_img = document.querySelectorAll('.h .slide_img_netw');
const slider_width = slider_img[0].offsetWidth; //độ rộng cảu ảnh
var index = 0;
function go(value) {
    slideer.style.transform = `translateX(-${value * slider_width}px)`;
    index = value;
}

setInterval(() => { //set thời gian cho silde khi chuyển đến ảnh tiếp theo
    if (index >= slider_img.length - 1) {
        go(0);
        return false;
    }
    index++;
    go(index);
    console.log(index);
}, 4000)


//click_toggle_menu

const click = document.querySelector('.menu_icon i');
var menu = document.querySelector('.menu_chidrent');
click.addEventListener('click', function () {
    menu.classList.add('active');
})
document.querySelector('.close').addEventListener('click', () => { menu.classList.remove('active') });


//cuộn chuột
window.onscroll = function () {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.querySelector('.header_conten').classList.add('active_menu_barg')
        document.querySelector('.header_logo a img').src = "./src/img/logo/akuzmvjv.png";
        document.querySelectorAll('.header_network_icon a, .menu_icon i').forEach(element => {
            element.style.color = "#00b4d9";
        });
        document.querySelector('.top').style.opacity = 1;
    } else {
        document.querySelector('.header_conten').classList.remove('active_menu_barg');
        document.querySelector('.header_logo a img').src = "./src/img/logo/akuzmvjv-removebg-preview.png";
        document.querySelectorAll('.header_network_icon a, .menu_icon i').forEach(element => {
            element.style.color = "#fff";
        });
        document.querySelector('.top').style.opacity = 0;
    }
};

//click thì quay lại đầu trang
var click_top_page = document.querySelector('.top').addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
})


// view page
const data_jobs = document.querySelector(".f");

function showMess(data) {
    data_job.map((i) => {
        console.log(i);
        data_jobs.innerHTML += `
            <div class="blog_item">
                <div class="item_icon">
                    <i class="${i.icon}"></i>
                </div>
                <div class="job_title">
                    <h4><a href="#">${i.name}</a></h4>
                </div>
                <p>${i.text}</p>
            </div>
        `
    })
}
showMess();


//timeline
const timeline_item = document.querySelector('[taget="education"]');
const education_tt7 = document.querySelector('[taget="education_"]');
console.log(timeline_item);
function timeline_read(data) {
    data.map((i) => {
        console.log(i.detail_tt);
        timeline_item.innerHTML += `
        <ul>
            <li class="blof_education">
                <div class="conten_text">
                    <h4>${i.title}</h4>
                    <span>${i.time}</span>
                    <div class="text_">
                        ${i.name}
                    </div>
                    <a class="taget" style="color:#00b4d9; " href="${i.detail_tt}">Chi tiết</a>
                </div>
            </li>
        </ul>
        `
        // tìm đến cái value đấy kiểm tra nó có rỗng hay không nếu mà rỗng thì thông báo lỗi còn không thì next
        const taget = document.querySelectorAll('.taget')
        taget.forEach(element => {
            element.addEventListener('click', () => {
                console.log(i.a);
                if (i.a== "") {
                    alert('Error : Thử thách không tồn tại')
                }else{
                }
            
            })
        });
    })
} timeline_read(data_timeline);


function timeline_read_2(data) {
    data.map((i) => {
        education_tt7.innerHTML += `
        <ul>
        <li class="blof_education">
            <div class="conten_text">
                <h4>${i.title}</h4>
                <span>${i.time}</span>
                <div class="text_">
                    ${i.name}
                </div>
                <a style="color:#00b4d9; " href="${i.detail_tt}">Chi tiết</a>
            </div>
        </li>
    </ul>
        `
    })
} timeline_read_2(data_timeline_2)