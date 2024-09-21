<?php


class SqlConnection {


    // $db = "sqlite:/backend/expo.db";
    // $host = "localhost";
    // $user = "andrew";
    // $pass = "andrew1105";

    public static function Template(){

        try{

            $conn = new PDO("mysql:host=localhost;dbname=expo", "andrew", "andrew1105");
        
            $stmt = $conn->query("SELECT * from Accounts;");
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            return $rows;
        
            echo "Connection successful!";
        
        
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
            
    }


    public static function GetExpos(){

        try{

            $conn = new PDO("mysql:host=localhost;dbname=expo", "andrew", "andrew1105");
            $stmt = $conn->query("SELECT * from Expos;");
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return json_encode($rows);

        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }

    }



    public static function ValidateLogin($email, $password){

        try{
            
            $conn = new PDO("mysql:host=localhost;dbname=expo", "andrew", "andrew1105");
            $stmt = $conn->query("SELECT `hash` from Accounts where email=:email;");
            $stmt->bindParam(':email', $email, PDO::PARAM_STR);
            $hash = $stmt->fetchColumn();

            if($hash === hash('sha256', $password)){
                return TRUE;
            }
            return FALSE;

        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }


    }


}




