<?php

// dit moest ik erbij zetten anders kreeg ik errors en geen toegang
header("Access-Control-Allow-Origin: *");

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

}

$database = new Database('localhost', 'RandomGenerator');

$data = $database->connect()->getNames();

$json = json_encode($data);

echo $json;

?>