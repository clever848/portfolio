let sections = document.querySelectorAll(".section");
let navEle = document.querySelectorAll(".nav-ele div");
window.onscroll = ()=>
{
    sections.forEach(sec =>
    {
        let top = window.scrollY;
        let elePos = sec.offsetTop-300;
        let eleHei = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if(top >= elePos && top < (elePos+eleHei-100))
        {
            navEle.forEach(nav =>
            {
                nav.classList.remove("active");
                document.querySelector(`[onclick="location.href='#${id}'"]`).classList.add("active");
                document.querySelectorAll(".section .show").forEach(ele =>
                {
                    if(!ele.closest(".nav-bar"))
                    {
                        ele.classList.remove("show-class");
                    }
                }
                )
                document.querySelectorAll(`.${id} .show`).forEach(ele =>
                {
                    ele.classList.add("show-class");
                }
                )
            }
            )
        }
        document.querySelector(".nav-bar").classList.remove("nav-height");
    }
    )
    // document.querySelectorAll(".nav-bar .show").forEach(sec =>
    // {
    //     sec.classList.add("show-class");
    // }
    // )
    // console.log(document.querySelector(".education-main").offsetTop);
    
}
document.querySelector('.menu').addEventListener("click",()=>
{
    document.querySelector(".nav-bar").classList.toggle("nav-height");
    event.stopPropagation();
});
for(let i=0;i<4;i++)
{
    navEle[i].addEventListener("click",()=>
    {
        document.querySelector(".nav-bar").classList.toggle("nav-height");
    });
    sections[i].addEventListener("click",()=>
    {
        document.querySelector(".nav-bar").classList.remove("nav-height");
        console.log("sections");
    });
}
document.querySelectorAll(".nav-bar .show").forEach(sec =>
{
    sec.classList.add("show-class");
    console.log("enter");
}
)
document.querySelectorAll(".section .show").forEach(ele =>
{
    ele.classList.add("show-class");
    console.log("enter main");
}
)