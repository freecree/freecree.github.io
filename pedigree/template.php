<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?=$title?></title>
    <link rel="shortcut icon" href="/img/favicon.png" type="img/png">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/jquery-3.4.1.min.js" defer></script>
    <script src="js/slick.min.js" defer></script>
    <script src="js/main.js" defer></script>
</head>
<body>
<?=$forlanding?>
<header class="header <?= $class_header_sub ?>">
    <div class="container">
        <nav class="nav">
            <a href="index.php">
                <div class="logo">
                    <img src="img/logo.png" alt="LOGO">
                    <div class="logo__text title-color">
                        <div class="logo__text-first">
                            Питомник собак
                        </div>
                        <div class="logo__text-second">
                            американская акита
                        </div>
                    </div>
                </div>
            </a>
            <div class="menu">
                <div class="gamburger">
                    <img src="img/gamburger.svg" alt="gamburger">
                </div>
                <ul class="navbar">
                    <li class="navbar__dogs">
                        <div >
                            <div >Наши собаки</div><div class="caret"></div>
                        </div>
                        <ul class="navbar-sub__dogs menu-sub">
                            <li>
                                <a href="puppies.php">Щенки на продажу</a>
                            </li>
                            <li>
                                <a href="index.php#our-dogs">Собаки нашего питомника</a>
                            </li>
                        </ul>
                    </li>
                    <li class="navbar__item-vert">
                        <a href="puppies.php">Щенки на продажу</a>
                    </li>
                    <li class="navbar__item-vert">
                        <a href="index.php#our-dogs">Собаки нашего питомника</a>
                    </li>
                    <li>
                        <a href="about.php">Порода акита</a>
                    </li>
                    <li>
                        <a href="events.php">События</a>
                    </li>
                    <li>
                        <a href="index.php#contacts">Контакты</a>
                    </li>
                </ul>
            </div>
            <div class="phone nav__phone">
                +380 63 602 24 82
                <br>+380 67 680 39 53
            </div>
        </nav>
    </div>
</header>

    <?=$content?>

<footer class="footer">
    <div class="container">
        <div class="footer__block">
            <div class="footer__first-coloumn">
                <div class="about-kennel">
                    2017 - 2020 ©  <b>Iz vladeniya Akelo</b>
                    <br>питомник американских акит
                    <br>Владелец: Кривошея Юлия

                </div>
                <div class="footer__rights">
                    Все права защищены
                </div>

            </div>
            <ul class="footer__tabs footer__tabs-main">
                <li>Наши собаки
                    <ul class="footer__tab-sub">
                        <li>
                            <a href="puppies.php">
                                Щенки на продажу
                            </a>
                        </li>
                        <li>
                            <a href="index.php#our-dogs">
                                Собаки нашего питомника
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="footer__tabs-col">
                    <a href="about.php">Порода акита</a>
                </li>
                <li class="footer__tabs-col">
                    <a href="events.php">События</a>
                </li>
                <li><a href="index.php#contacts">Контакты</a>
                    <ul class="footer__tab-sub">
                        <li>
                            <div >
                                +380 63 602 24 82
                                <br>+380 67 680 39 53
                            </div>
                        </li>

                        <li>
                            <div class="socials footer__socials">
                                <a href="https://www.facebook.com/profile.php?id=100007025417042" target="_blank" >
                                    <img src="img/facebook-white.svg" alt="ICON">
                                </a>
                                <a href="https://www.youtube.com/channel/UC3kQoM1j52HinM1C-9uyxjQ" target="_blank">
                                    <img src="img/youtube-white.svg" alt="ICON">
                                </a>
                                <a href="https://www.instagram.com/yuliaakita" target="_blank">
                                    <img src="img/instagram-white.svg" alt="ICON">
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</footer>
</body>
