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


    public static function AddProject($id, $title, $description, $status, $est){

        try{

            $conn = new PDO("mysql:host=localhost;dbname=expo", "andrew", "andrew1105");

            $stmt = $conn->prepare("
            INSERT INTO `Projects` 
            (`id`, `title`, `description`, `completion_status`, `est_completion_date`) VALUES
            (:id, :title, :description, :status, :est)
            ");
            $stmt->bindParam(':id', $id, PDO::PARAM_STR);
            $stmt->bindParam(':title', $title, PDO::PARAM_STR);
            $stmt->bindParam(':description', $description, PDO::PARAM_STR);
            $stmt->bindParam(':status', $status, PDO::PARAM_STR);
            $stmt->bindParam(':est', $est, PDO::PARAM_STR);
            

            $stmt->execute();

        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }


    }

    public static function GetUpcomingExpos(){

        try{

            $conn = new PDO("mysql:host=localhost;dbname=expo", "andrew", "andrew1105");
            $stmt = $conn->query("SELECT * from Expos;");

            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $upcomming = [];

            foreach($rows as $row){

                $dtstring = $row['datetime'];
                $date = explode(" ", $dtstring)[0];
                $data = explode("-", $date);

                if(
                    (date('Y') == $data[0]) && 
                    (date("m") == $data[1])
                )                {
                    array_push($upcomming, $row);
                }

            }

            return json_encode(["data" => $upcomming]);

        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }        

    }

    public static function GetCompletion(){


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




