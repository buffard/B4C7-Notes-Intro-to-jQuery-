console.log("jQuery is just a big ole object stuffed with methods")

let list = document.querySelector("#list-of-stuff")
console.log("list", list)

let jqList = $("#list-of-stuff")
console.log("jq", jqList)

$(".delete").click(() =>{
  console.log("Hey that was easy!")
})

// $("#destroyer").click(() => {
//   $(".song-container").slideToggle()
// })




$("#destroyer").click( function() {
  $(".song-container").slideToggle()
  // $(this).css("color", "red")
  //the below will toggle the color on and off .css wont toggle off
  $(this).toggleClass("isRed")
  })

  // $(".article--main").addClass("isRed")
    
  $(".article--main").eq(1).addClass("isRed")

  $(".article--main").hover(function() {
    $(this).toggleClass("isBlue")
  })

  console.log("jq", jqList)