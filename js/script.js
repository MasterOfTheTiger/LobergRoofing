var projectName, roofSize, outParim, inParim, wallArea, wallHeight;
$("input").change(function(){
  //Gets information in forms
  projectName = $("#projectName").val();
  roofSize = $("#roofSize").val();
  outParim = $("#outParim").val();
  inParim = $("#inParim").val();
  wallHeight = $("#wallHeight").val();
  wallArea = (outParim*wallHeight+inParim*1)/100;
  $("#wallArea").val(wallArea);
  console.log(wallArea);
});
