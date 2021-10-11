<?php

$num=2;
$foo=$num." "."be";
$bar="or not to be";

echo $foo." ". $bar."\n";

echo $num * $num *$num;

//comment
#comment
/* this is multi line
comment*/


if (true){
    echo "TRUE \n";

} else {
    echo "FALSE \n";

}



while (true) {

    break;
}

$arr=[1,1,3,4,5,8];

$arr2= [
    "first" => "Asha",
    "second" => "Anil",
    "class" => "MSIS"
];
function printList($someArr) {
    echo "<ul>\n";

    foreach($someArr as $key => $val) {
        echo "<li>".$key." is ".$val."</li>\n";
    
    }

    echo "</ul>\n";
}


printList($arr);
printList($arr2);

// $output = array(
//     'status' => 'ok',
//     'content' => $arr2
// );

echo json_encode($arr2);
