const header = {
   render:function(){
    return `
    <div style="background-color:#000;color:#fff;" class="header_conten">
            <div class="network_header">
                <div class="header_logo">
                    <!-- logo -->
                    <a href="./index.html"><img src="./src/img/logo/akuzmvjv-removebg-preview.png" alt=""></a>
                </div>
                <!-- _icon_network -->
                <div class="header_network_icon">
                    <a href="#" style="color: rgb(255, 255, 255);"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" style="color: rgb(255, 255, 255);"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" style="color: rgb(255, 255, 255);"><i class="fa-brands fa-youtube"></i></a>
                    <a href="#" style="color: rgb(255, 255, 255);"> <i class="fa-brands fa-tiktok"></i></a>
                </div>
                <!-- icon_menu -->
                <div class="header_nw_menu">
                    <div class="menu_icon">
                        <i class="fa-solid fa-bars" style="color: rgb(255, 255, 255);"></i>
                    </div>
                </div>
            </div>
        </div>
    `
   }
}
export default header