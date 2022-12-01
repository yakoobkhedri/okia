<template>
        <header id="navbar">
        <div id="logo">
            <p style="font-size: 37px;direction: ltr;margin-top: 12px">Okia <span style="color: #ffffffe8;background: #4848be;width: 37px;display: inline-block;text-align: center;height: 37px;line-height: 43px;font-size: 31px;border-radius: 9px;">X</span>
            </p>
        </div>
        <div id="toggler">
            <i class="fa fa-bars"></i>
        </div>
         <router-link to="/profile" active-class="active" exact 
         class="btn mt-2 mr-5 text-white" 
         style="width: 137px;height: 40px;background: #2064ad;font-size: 13px;top: 8%;line-height: 27px;position: relative">
         پروفایل کاربری
         <i class="fa fa-user mr-2"></i>
         </router-link>
        <nav class="navbar navbar-expand-lg navbar-light pt-1">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav d-flex align-items-center">
                    <li class="nav-item  mx-3 active">
                        <router-link to="/" active-class="active" exact>صفحه اصلی</router-link>
                    </li>
                    <li class="nav-item mx-3 dropdown">
                       <router-link to="/Services" active-class="active" exact>خدمات</router-link>
                    </li>
                    <li class="nav-item mx-3 dropdown">
                       <router-link to="/weblog" active-class="active"> مقالات و اخبار</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link to="/AboutUs" active-class="active">درباره اکیا</router-link>
                    </li>
                    <li class="nav-item  mx-3 dropdown">
                        <a class="nav-link dropdown-toggle text-primary" href="#" id="navbarDropdownMenuLink2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        پشتیبانی
                    </a>
                        <div class="dropdown-menu shadow-sm p-3" style="right: 0;border: none;min-width: 18rem;font-size: 14px" aria-labelledby="navbarDropdownMenuLink2">
                            <i class="fa fa-user fa-2x text-center d-block mb-4"></i>
                            <a class="dropdown-item d-flex justify-content-between border-bottom" href="#">
                                <p>واتساپ</p>
                                <p>09922849089</p>
                            </a>
                            <a class="dropdown-item d-flex justify-content-between border-bottom" href="#">
                                <p>تلگرام</p>
                                <p>@Okiax</p>
                            </a>
                            <a class="dropdown-item d-flex justify-content-between" href="#">
                                <p>ایمیل</p>
                                <p>okiacontactx@gmail.com</p>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
</template>