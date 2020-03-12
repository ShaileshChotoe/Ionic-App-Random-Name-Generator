<?php

// dit moest ik erbij zetten anders kreeg ik errors
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Origin: *");

$json_post = $_GET['post'];

$names_array = json_decode($json_post);

class DataBase {

    private $host;
    private $dbname;
    private $user = 'root';
    private $pass = '';
    private $charset = 'utf8mb4';

    private $pdo;

    function __construct($host, $dbname) {
        $this->host = $host;
        $this->dbname = $dbname;
    }

    function connect() {
        $dsn = "mysql:host=$this->host;dbname=$this->dbname;charset=$this->charset";
        $pdo = new PDO($dsn, $this->user, $this->pass);
        $this->pdo = $pdo;
        return $this;
    }

    function getNames() {
        $sql = "SELECT * FROM namen";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();

        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $data;
    }

    function addName($naam) {
        $sql = "INSERT INTO Namen (naam)
        VALUES (?)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$naam]);
    }

    function update($array) {
        //maak hele table leeg
        $sql = "DELETE FROM namen";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();

        //zet de nieuwe namen erin
        foreach ($array as $key => $value) {
            $this->addName($value->naam);
        }
    }



}

$database = new Database('localhost', 'RandomGenerator');

$database->connect()->update($names_array);

?>