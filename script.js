const $input = $(".input"),
      $tmp = $(".tmp");

function i_empty() {
    $input.empty()
}
function t_empty() {
    $tmp.empty()
}

$(".btn.all-clear").click(function() {
    i_empty(), t_empty()
}),
$(".btn.clear").click(function() {
    i_empty()
}),
$(".btn.number").click(function() {
    if ($input.text().length <= 19) {
        $input.text($input.text() + $(this).text());
    } else {
        alert("최대 입력 범위를 초과했습니다.")
    }
}),
$(".btn.dot").click(function() {
    if($input.text().indexOf(".") === -1){
        $input.text($input.text() + ".")
    }
}),
$(".sign").click(function() {
    if($input.text().indexOf("-") === -1) {
        $input.text("-" + $input.text())
    } 
    else {
        $input.text($input.text().replace("-", ""))
    }
}),
$(".result").click(function() {
    $input.text(eval($tmp.text() + $input.text()), t_empty())
}),
$(".amt").click(function() {
    if ($input.text() !== "") {
      if ($tmp.text() === "") {
        $tmp.text($input.text() + " " + $(this).text())
      }
      else {
        $tmp.text($tmp.text() + " " + $input.text() + " " + $(this).text())
      }
    }
    if ($input.text() === "" && $tmp.text() !== "") {
      $tmp.text($tmp.text().slice(0,-1) + " " + $(this).text())
    }
    i_empty()
})
