import { data_job, data_timeline, data_timeline_2, img_data } from "./data/data.js";

const slideer = document.querySelector('.h');
const go = (value) => {
    if (slideer) {
        slideer.style.transform = `translateX(-${value * slider_img[0].offsetWidth}px)`;
        index = value;
    }
}
const slider_img = document.querySelectorAll('.h .slide_img_netw');
var index = 0;
const slider = () => {
    setInterval(() => { //set thời gian cho silde khi chuyển đến ảnh tiếp theo
        if (index >= slider_img.length - 1) {
            go(0);
            return false;
        }
        index++;
        go(index);
    }, 4000)
}

const click_to_Top = () => {
    var click_top_page = document.querySelector('.top');
    if (click_top_page) {
        click_top_page.addEventListener('click', () => {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        })
    }
}

const scroll_TOP = () => {
    const top = document.querySelector('.top');
    window.onscroll = function () {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            document.querySelector('.header_conten').classList.add('active_menu_barg')
            document.querySelector('.header_logo a img').src = "./src/img/logo/akuzmvjv.png";
            document.querySelectorAll('.header_network_icon a, .menu_icon i').forEach(element => {
                element.style.color = "#00b4d9";
            });
            if (top) {
                top.style.opacity = 1;
            }
        } else {
            document.querySelector('.header_conten').classList.remove('active_menu_barg');
            document.querySelector('.header_logo a img').src = "./src/img/logo/akuzmvjv-removebg-preview.png";
            document.querySelectorAll('.header_network_icon a, .menu_icon i').forEach(element => {
                element.style.color = "#fff";
            });
            if (top) {
                top.style.opacity = 0;
            }
        }
    };

}

const data_jobs = document.querySelector(".f");
const showMess = (data) => {
    data_job.map((i) => {
        if (data_jobs) {
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
        }
    })
}

const timeline_item = document.querySelector('[taget="education"]');
const education_tt7 = document.querySelector('[taget="education_"]');
const timeline_read = (data) => {
    data.map((i) => {
        if (timeline_item) {
            timeline_item.innerHTML += `
        <ul>
            <li class="blof_education">
                <div class="conten_text">
                    <a href="./detail_tt.html?_id=${i.id}"> 
                        <h4>${i.title}</h4>
                    </a>
                    <span>${i.time}</span>
                    <div class="text_">
                        ${i.name}
                    </div>
                    <a class="taget" style="color:#00b4d9; " href="${i.detail_tt}">Chi tiết</a>
                </div>
            </li>
        </ul>
        `
        }
    })
}

const detail_TT = (data) => { //tạo ra 1 hàm có tên là chi tiết thử thách
    const get_id = new URLSearchParams(window.location.search).get("_id");// lấy id được truyền lên trên url
    const id_ = data.find((i) => { //tim cái id dấy xem nó có trùng vs cái id trong database hay không
        return i.id == get_id; // trả về cái id có object theo id
    })
    const banner = document.querySelector('.banner');
    if (id_) { //kiểm tra nếu mà có thằng id đấy thì vs dduwoxj in ra màn hình
        banner.innerHTML = `
            <table class="table table-bordered align-middle table-bordered table-responsive-sm">
                <thead class="table-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên thử thách</th>
                    <th scope="col">Thời Gian</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Chủ đề</th>
                    <th scope="col">Giai đoạn</th>
                    <th scope="col">Yêu cầu bắt buộc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">${id_.id}</th>
                    <td>${id_.title}</td>
                    <td>${id_.time}</td>
                    <td>${id_.yc_cb}</td>
                    <td>${id_.teamplate}</td>
                    <td>${id_.reponse}</td>
                    <td>${id_.yc_bb}</td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top:20px;">
                <button type="button" class="btn btn-warning">Edit</button>
                <button type="button" class="btn btn-primary">Thêm cột</button>
                <button type="button" class="btn btn-danger">Thêm dòng</button>
                <button type="button" class="btn btn-info">Delete</button>
            </div>
            `
        if (document.querySelector('.btn-warning')) { //click thì mở form
            document.querySelector('.btn-warning').addEventListener('click', function () {
                form_controll.classList.add('active_form');
            })
        }

    }
}

const timeline_read_2 = (data) => {
    data.map((i) => {
        if (education_tt7) {
            education_tt7.innerHTML += `
        <ul>
        <li class="blof_education">
            <div class="conten_text">
                <a href="./detail_tt.html?_id=${i.id}">
                    <h4>${i.title}</h4>
                </a>
                <span>${i.time}</span>
                <div class="text_">
                    ${i.name}
                </div>
                <a style="color:#00b4d9; " href="${i.detail_tt}">Chi tiết</a>
            </div>
        </li>
    </ul>
        `
        }
    })
}

const detail_timeline_2 = (data) => {
    const cateId = new URLSearchParams(window.location.search).get("_id");
    console.log(cateId);
    const id_ = data.find((item) => {
        return item.id == cateId;
    })
    if (id_) {
        document.querySelector('.banner').innerHTML += `
    <table class="mt-0 table mb-0 bg-white align-middle table-bordered table-responsive-md">
        <thead class="table-light">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Tên thử thách</th>
            <th scope="col">Thời Gian</th>
            <th scope="col">Handle</th>
            <th scope="col">Chủ đề</th>
            <th scope="col">Giai đoạn</th>
            <th scope="col">Yêu cầu bắt buộc</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">${id_.id}</th>
                <td>${id_.title}</td>
                <td>${id_.time}</td>
                <td>${id_.yc_cb}</td>
                <td>${id_.teamplate}</td>
                <td>${id_.reponse}</td>
                <td>${id_.yc_bb}</td>
            </tr>
        </tbody>
    </table>
    <div style="margin-top:20px;">
        <button type="button" class="btn btn-warning">Edit</button>
        <button type="button" class="btn btn-primary">Thêm cột</button>
        <button type="button" class="btn btn-danger">Thêm dòng</button>
        <button type="button" class="btn btn-info">Delete</button>
    </div>
    `
        if (document.querySelector('.btn-warning')) { //click thì mở form
            document.querySelector('.btn-warning').addEventListener('click', function () {
                form_controll.classList.add('active_form');
            })
        }
    }
}

const tab_Conten = () => {
    const click_btn_img = document.querySelectorAll('.btn_img p');
    click_btn_img.forEach(element => {
        element.addEventListener('click', function () { //add cho tứng phần tử sự kiện click
            var click_remove = document.querySelector('.active_clicker'); //tìm ra thằng nào đang có class là active khi click thì click nod đi
            // và add class và thằng cần click
            click_remove.classList.remove('active_clicker')
            element.classList.add('active_clicker');
        })
    });
}

const img_work = document.querySelector('.img_work');
const isFunction_img = (data) => {// tạo 1 tham số là data duyệt thằng data đấy rồi gọi hàm chuyền vào mảng object cần duyệt
    if (img_work) {
        img_work.innerHTML = "";
        data.map((i) => {
            img_work.innerHTML += `
                <div class="img">
                    <img src="${i.img}" alt="">
                    <div class="icon_hover_img pab top_fx left_fx right_fx bottom_fx" data-img="${i.data_img}" data-concess="${i.concess}">
                        <i class="fa-solid fa-eye pab tops left trf pad_15 border_rdu cl_fff"></i>
                    </div>
                    </div>
                    `
        })
    }
}
const seach = () => {
    const val_10 = img_data.filter((i) => { //duyệt mảng lấy ra thằng nào có value == 10
        return i.value == 10;
    })
    const val_40 = img_data.filter((i) => { //duyệt mảng lấy ra thằng nào có value == 10
        return i.value == 30;
    })
    const val_20 = img_data.filter((i) => { //duyệt mảng lấy ra thằng nào có value == 10
        return i.value == 20;
    })
    const design = document.querySelector('.design');
    if (design) {
        design.addEventListener('click', function () {
            isFunction_img(val_10); //view theo value
            _detail_imgANDtext();
        })
    }
    const dev = document.querySelector('.dev');
    if (dev) {
        dev.addEventListener('click', function () {
            isFunction_img(val_40); //view theo value
            _detail_imgANDtext();
        })
    }

    const print = document.querySelector('.print');
    if (print) {
        print.addEventListener('click', function () {
            isFunction_img(val_20); //view theo value
            _detail_imgANDtext();
        })
    }

    const all_ = document.querySelector('.all');
    if (all_) {
        all_.addEventListener("click", function () {
            isFunction_img(img_data);
            _detail_imgANDtext();
        })
    }
}
const _detail_imgANDtext = () => {
    const img_page_ = document.querySelectorAll('.img img');//tất cả ảnh
    var icon_hover_img = document.querySelectorAll('.icon_hover_img');//icon_click eye
    var back_img_close = document.querySelector('.create_img'); //page close
    var img_detail_page = document.querySelector('.create_img img');//ảnh chi tiết
    icon_hover_img.forEach(clicks => { //duyệt từng thằng img và lấy ra value
        clicks.addEventListener('click', () => {
            back_img_close.classList.add('active_create_img');
            //lấy ra atribute của từng img rồi add vào thăng src
            const getAtb_img = clicks.getAttribute('data-img');
            const getAtb_concess = clicks.getAttribute('data-concess');

            img_detail_page.src = `./src/${getAtb_img}`;
            document.querySelector('.create_img h3').innerHTML = getAtb_concess;
        })
    });
    if (back_img_close) {
        back_img_close.addEventListener('click', () => {
            if (icon_hover_img) { //nếu mà user click thì sẽ thực hiện remove class
                back_img_close.classList.remove('active_create_img');
            }
        })
    }
}



const form_controll = document.querySelector('.edited_TT_detail form');
const id = document.querySelector('.id_');
const ids = document.querySelector('.id');  //form id
const time = document.querySelector('#exampleInputEmail1'); //form_time
const handle = document.querySelector('.handle'); //form_handle
const teamplate = document.querySelector('.teamplate');//form chủ đề
const gd = document.querySelector('.gd'); //form giai đoạn
const yc = document.querySelector('.yc'); //form yêu cầu
const name_tt = document.querySelector('.name_tt');
const thuthach_name = document.querySelector('.thuthach_name');
const get_id = new URLSearchParams(window.location.search).get("_id");// lấy id được truyền lên trên url
const updated = (e) => {
    data_timeline.map(function (i) { //duyệt data
        if (get_id == i.id) { //so sánh nếu id của thăng data lấy được mà trùng vs thằng id trên url thì
            ids.value = i.id; //lấy ra tất cả value của thằng data truyên lên thằng form
            thuthach_name.value = i.title;
            name_tt.value = i.name;
            time.value = i.time;
            handle.value = i.yc_cb;
            teamplate.value = i.teamplate;
            gd.value = i.reponse;
            yc.value = i.yc_bb;
        }
    })
    data_timeline_2.map(function (i) { //duyệt data
        if (get_id == i.id) { //so sánh nếu id của thăng data lấy được mà trùng vs thằng id trên url thì
            ids.value = i.id; //lấy ra tất cả value của thằng data truyên lên thằng form
            thuthach_name.value = i.title;
            name_tt.value = i.name;
            time.value = i.time;
            handle.value = i.yc_cb;
            teamplate.value = i.teamplate;
            gd.value = i.reponse;
            yc.value = i.yc_bb;
        }
    })

}

const isUpdate = () => {
    Swal.fire({ //thư viện sweater
        title: 'Are you sure to update?',
        text: "You won't be able to revert this!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, updated it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Updated!',
                'Your file has been deleted.',
                'success'
            )
            const news_arr = { //tạo ra 1 thăng arr mới rổi có các trường tương tự như của thằng data
                id: Number(get_id),
                title: thuthach_name.value,
                time: time.value,
                yc_cb: handle.value,
                teamplate: teamplate.value,
                reponse: gd.value,
                yc_bb: yc.value,
            }
            const n = data_timeline.findIndex(function (i) { //tìm và so sánh xem id cảu thằng da có trùng vs 
                //id của mảng đã tạo hay không nếu trùng thì 
                return i.id == news_arr.id
            })
            const m = data_timeline_2.findIndex(function (i) { //tìm và so sánh xem id cảu thằng da có trùng vs 
                //id của mảng đã tạo hay không nếu trùng thì 
                return i.id == news_arr.id
            })
            data_timeline.splice(n, 1, news_arr) //tìm đến index đấy rồi xóa nó đi và cập nhật thằng mới vào
            data_timeline_2.splice(m, 1, news_arr)
            form_controll.classList.remove('active_form');
            detail_TT(data_timeline)
        }
    })

}
const open_Form_control = () => {
    const close_form = document.querySelector('.close_contact_form i');
    if (close_form) {
        close_form.addEventListener('click', function () { //bấm thì đóng form
            form_controll.classList.remove('active_form');
        })
    }
}

export {
    go,
    slider,
    scroll_TOP,
    showMess,
    open_Form_control,
    tab_Conten,
    timeline_read,
    detail_TT,
    timeline_read_2,
    detail_timeline_2,
    isFunction_img,
    seach,
    _detail_imgANDtext,
    updated,
    isUpdate,
    click_to_Top
}

