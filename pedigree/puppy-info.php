<?php
$class_header_sub = "header-subpages";
$content = '
<section class="page puppy-page">
    <div class="container1">
        <div class="page__heading">
            <div class="breadcrump">
                 <a href="index.php">Главная</a>
                  / <a href="puppies.php">Щенки</a>
                  / '.$title.'
            </div>
            <h2 class="section__title puppy-main__title-fromtablet">
                '.$title.'
            </h2>
        </div>
        <div class="puppy-main">
            <div class="puppy-main__photoes">

                <div class="slider-puppy-for">
                    '.$images_big.'
                 </div>
                <div class="puppy__bg"></div>
                <div class="sub-pic puppy__sub slider-puppy-nav">
                    '.$images_small.'
                </div>
            </div>

            <div class="puppy-main__text">
                <h2 class="section__title puppy-main__title">
                    '.$title.'
                </h2>
                <div class="puppy-main__info">
                    '.$text.'
                    <div class="socials">
                        <a href="viber://chat?number=%2B380636022482" target="_blank">
                            <img class="social" src="img/viber-black.svg" alt="ICON">
                        </a>
                        <a href="tg://resolve?domain=yuliaakita" target="_blank">
                            <img class="social" src="img/telegram-black.svg" alt="ICON">
                        </a>
                    </div>
                    <div class="phone puppy__phone">
                        +380 63 602 24 82
                        <br>+380 67 680 39 53
                    </div>
                    <div class="folowUs">
                        <div class="folowUs__text">
                            Следите за нами
                        </div>
                        <div class="socials folowUs__socials">
                             <a href="https://www.facebook.com/profile.php?id=100007025417042" target="_blank" >
                                 <img class="social" src="img/facebook.svg" alt="ICON">
                             </a>
                             <a href="https://www.youtube.com/channel/UC3kQoM1j52HinM1C-9uyxjQ" target="_blank">
                                 <img class="social" src="img/youtube.svg" alt="ICON">
                             </a>
                             <a href="https://www.instagram.com/yuliaakita" target="_blank">
                                 <img class="social" src="img/instagram.svg" alt="ICON">
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="puppy-videos">
            '.$videos.'
        </div>
    </div>
</section>
';
include "template.php";
?>
