<?php
$title = "События";
$class_header_sub = "header-subpages";
$content = '
<section class="page events-page">
    <div class="container1">
        <div class="page__heading">
            <div class="breadcrump">
                <a href="index.php">Главная</a> / События
            </div>
            <h2 class="section__title events__title">
                События в нашем питомнике
            </h2>
        </div>
        <div class="events-block">
            <div class="event">
                <div class="event__photo event__photo-left">
                    <img src="img/bestbaby.jpg" alt="Best">
                    <div class="event-bg event-bg-left"></div>
                </div>
                <div class="event__text event__text-left">
                    <div class="event__date">
                        08.03.20
                    </div>
                    <div class="event__heading">
                        <h3 class="event__title smile-title">
                            Набегали “Baby Best“
                            <img src="img/smile.svg" alt="smile">
                        </h3>

                    </div>
                    <div class="event__content">
                        08.03 Restful впервые учавствовал в выставке. Он - умничка.
                        Великалептно вел себя в ринге и заработал великолептное описание, “Большую перспективу” и свой первый титул: “baby best”
                    </div>

                </div>
            </div>
            <div class="event">
                <div class="event__pedigree">

                </div>
            </div>
            <div class="event event-rotate">
                <div class="event__photo event__photo-right">
                    <img src="img/puppy-birth.jpg" alt="Birth" class = "birth-pic">
                    <div class="event-bg event-bg-right"></div>
                </div>
                <div class="event__text event__text-right">
                    <div class="event__date">
                        31.10.19
                    </div>
                    <div class="event__heading">
                        <h3 class="event__title">
                            Родились щенки!
                        </h3>
                    </div>
                    <div class="event__content">
                        В нашем питомнике. Великолептная пара Гера и Кел снова стали родителями!
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
';
include "template.php";
?>
