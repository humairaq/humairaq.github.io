function nav_close(){
    $(document).ready(function(){
        $("#nav-toggle").append(function(){
        $(".nav-menu").toggle();
    });});

}

function image_toggle(project_name,project_content_name){
    $(document).ready(function() {
        $(project_name).append(function(){
            $(project_content_name).slideToggle();
        });
    });

}


function see_more_projects() {
    let projectContent = document.querySelector('.more-projects')
    let seeMoreButton = document.getElementById('see-more')
    if(projectContent.style.display===""){
        projectContent.style.display="grid";
        seeMoreButton.textContent= "close";
    } else {
        projectContent.style.display="";
        seeMoreButton.textContent= "view all";
    }
}

$(document).ready(function(){

    $(".project-tabs-list li a").click(function(e){
       e.preventDefault();
    });
  
    $(".project-tabs-list li").click(function(){
       var tabid = $(this).find("a").attr("href");
       $(".project-tabs-list li, .project-tabs .tab").removeClass("active");   // removing active class from tab
  
       $(".tab ").hide();   // hiding open tab
       $(tabid).show();    // show tab
       $(this).addClass("active"); //  adding active class to clicked tab
  
    });
  
  });