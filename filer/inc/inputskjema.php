
            <form action="index.php?page=5" method="post" id="kundeservice">

                <div>
                    Navn:<br/>
                    <?php
                    echo '<input type="text" name="Navn" required value="';
                    if (isset($_POST["Navn"])) {
                        echo $_POST["Navn"];
                    }
                    echo '"/>';
                    ?>
                </div>

                <div>
                    Tlf:<br/>
                    <?php
                    echo '<input type="text" name="Telefonnummer" value="';
                    if (isset($_POST["Telefonnummer"])) {
                        echo $_POST["Telefonnummer"];
                    }
                    echo '"/>';
                    ?>

                </div>

                <?php
                if (isset($ingenEpost)) {

                    echo "<div class='red'>E-post:<br/>";
                    echo '<input type="text" name="Epost" autofocus required/>';
                } else {

                    echo "<div>E-post:<br/>";
                    echo '<input type="text" name="Epost" required/>';
                }
                ?>
            </div>

            <div>Er du allerede en registrert kunde?<br/>
                <span>Ja 
                    <input type="radio" name="Allerede_kunde" value="Ja" /></span>

                <span>Nei
                    <input type="radio" name="Allerede_kunde" value="Nei" required/></span>
                <br />
            </div>

            <div>Kundenummer:<br/>
<?php
echo '<input type="text" name="Kundenr" value="';
if (isset($_POST["Kundenr"])) {
    echo $_POST["Kundenr"];
}
echo '"/>';
?>

            </div>

            <div>Ordrenummer:<br/>
<?php
echo '<input type="text" name="Ordrenr" value="';
if (isset($_POST["Ordrenr"])) {
    echo $_POST["Ordrenr"];
}
echo '"/>';
?>

            </div>

            <div>Kategori:<br/>
                <select name="Kategori" required>
                    <option value="">Velg en kategori</option>
                    <option value="Informasjon">Informasjon</option>
                    <option value="Bestilling">Ny bestilling</option>
                    <option value="Endre_bestilling">Endre bestilling</option>
                    <option value="Retur">Avbestilling</option>
                    <option value="Produktspørsmål">Klage/erstatningskrav</option>
                    <option value="Ris_eller_ros">Ris eller ros</option>
                </select>
            </div>

            <div>Spørsmål:<br/>
                <textarea name="Spørsmål" required><?php
                if (isset($_POST["Spørsmål"])) {
                    echo $_POST["Spørsmål"];
                }
?></textarea>
            </div>

            <br /><br />

            <input type="submit" name="knapp" value="Send forespørsel" />

            </form>
