$(Document).ready(function() {
    // Appending Items
    var banner = $(".banner");
    banner.append('<button class="btn-burger"><span></span><span></span><span></span></button>');

    // Vital Variables
    var btn_burger = $(".btn-burger");
    var sideBar = $(".sidebar");
    var isSideBarOpen = false;
    
    
    btn_burger.click(function(){
        btn_burger.toggleClass("open");
        sideBar.toggleClass("open");
    });
});
