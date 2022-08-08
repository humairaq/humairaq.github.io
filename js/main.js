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
    let loginContent = document.querySelector('.more-projects')
    if(loginContent.style.display===""){
        loginContent.style.display="grid";
    } else {
        loginContent.style.display="";
    }
}
