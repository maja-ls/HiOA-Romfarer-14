            <section id="kundeskjemaseksjon" class="taarn">
                <?php
                if (isset($_POST["knapp"])) {
                    if ($_POST["Navn"] . " " . $_POST["Epost"] . " " . $_POST["Spørsmål"] == "Jeg vil på tur") {
                        //EASTEREGG
                        echo "PÅSKEEGG";
                        echo "<script src= 'filer/egg.js'></script>";
                    } elseif (filter_var($_POST["Epost"], FILTER_VALIDATE_EMAIL)) {

                        $tekst = "";

                        foreach ($_POST as $nokkel => $verdi) {
                            $verdi = htmlspecialchars($verdi);

                            if ($nokkel == "knapp") {
                                break;
                            }

                            $tekst .= str_replace("_", " ", $nokkel) . ": " . str_replace("_", " ", $verdi) . "\n";
                        }



                        $emne = "Kundeforespørsel web: " . $_POST["Kategori"];
                        $emneKunde = "Din mail til kundeservice - KOPI";
                        $kundepost = $_REQUEST["Epost"];
                        $vaarMail = "romfarer14@gmail.com";

                        mail($vaarMail, $emne, $tekst, "From: $kundepost");
                        mail($kundepost, $emneKunde, $tekst, "From: $vaarMail");


                        echo "<div><p><strong>Forespørselen din er sendt inn til kundeservice</strong></p></div>";
                    } else {
                        $ingenEpost = true;
                        echo "<div><p class='red'><strong>Du må skrive inn en gyldig epost-adresse</strong></p></div>";
                        include "inputskjema.php";
                        ?>
                        <script>alert("Ugyldig epost-adresse!");</script>
                        <?php
                    }
                } else {
                    include "inputskjema.php";
                }
                ?>

            </section>