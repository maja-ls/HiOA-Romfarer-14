<?php
error_reporting(E_ALL);


        if (isset($_REQUEST['page'])) {
            
            $side = $_REQUEST['page'];

            if ($side == 5) {
                $tittel = "Romfarer 14 - Kontakt oss";
            }

            elseif ($side == 4) {
                $tittel = "Romfarer 14 - FAQ";
            }
			
            elseif ($side == 3) {
                $tittel = "Romfarer 14 - Destinasjoner";
            }
        
            elseif ($side == 2) {
                $tittel = "Romfarer 14 - Våre romskip";
            }
             
        
            else {
                $tittel = "Romfarer 14 - Romreiser";
                $side = "1";
            }
        
        }
        
        else {
            $tittel = "Romfarer 14 - Romreiser";
            $side = "1";            
        }

        include "filer/inc/header.inc.php";
        include "filer/inc/bodynav.inc.php";
        include "filer/inc/side" . $side . ".php";
        include "filer/inc/bodyend.inc.php";
        

?>
