<?php
   if(isset($_FILES['image'])){
      $errors= array();
      $file_name = $_FILES['image']['name'];
      $file_size = $_FILES['image']['size'];
      $file_tmp = $_FILES['image']['tmp_name'];
      $file_type = $_FILES['image']['type'];
      
         move_uploaded_file($file_tmp,"subidas/".$file_name);
         
   }
   header("Location: " . $_SERVER["HTTP_REFERER"]);
?>