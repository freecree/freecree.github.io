<?php
$title = "Наши щенки";
$class_header_sub = "header-subpages";
$content = '
<section class="page catalog-page">
    <div class="page__heading">
        <div class="container">
            <div class="breadcrump">
                <a href="index.php">Главная</a> / Щенки
            </div>
            <h2 class="section__title page__title">
                Наши щенки
            </h2>
        </div>
    </div>
    <div class="pedigree-picture">
    </div>

    <div class="puppies">
        <div class="container">
            <div class="puppies__block">
                <div class="puppies__puppy">
                    <a href="restfull.php" class="puppy__photo restful">
                        <img src="img/pappy2.jpg" alt="pappy-photo">
                    </a>
                    <div class="puppy__caption">
                        <div class="puppy__name">
                            Restful
                        </div>
                        <div class="puppy__sex">
                            male
                        </div>
                    </div>
                </div>
                <div class="puppies__puppy">
                    <a href="rivard.php" class="puppy__photo rocky">
                        <img src="img/pappy3.jpg" alt="pappy-photo">
                    </a>
                    <div class="puppy__caption">
                        <div class="puppy__name ">
                            Rivard
                        </div>
                        <div class="puppy__sex">
                            male
                        </div>
                    </div>
                </div>
                <div class="puppies__puppy">
                </div>
            </div>

        </div>

    </div>
</section>
';
include "template.php";
?>
