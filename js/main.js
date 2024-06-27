const login_page = document.getElementById("login")
const about_project = document.getElementById("about-project")
const blogs = document.getElementById("blogs")
const information = document.getElementById("information")
login_page.onclick=function(){
          window.location.assign("login.html")
}
blogs.onclick=function(){
          window.location.assign("articles.html")
}
information.onclick=function(){
          window.location.assign("information.html")
}
about_project.onclick=function(){
          window.location.assign("about.html")
}
function post1(){
        document.getElementById("text1").style.visibility="visible"
        var num1 = document.getElementById("name1").value
        document.getElementById("text1").innerHTML+=`<p>${num1} گفت: ${comment1.value}</p>`
}
function post2(){
        document.getElementById("text2").style.visibility="visible"
        var num2 = document.getElementById("name2").value
        document.getElementById("text2").innerHTML+=`<p>${num2} گفت: ${comment2.value}</p>`
}
function post3(){
          document.getElementById("text3").style.visibility="visible"
          var num3 = document.getElementById("name3").value
          document.getElementById("text3").innerHTML+=`<p>${num3} گفت: ${comment3.value}</p>` 
}
function post4(){
          document.getElementById("text4").style.visibility="visible"
        var num4 = document.getElementById("name4").value
        document.getElementById("text4").innerHTML+=`<p>${num4} گفت: ${comment4.value}</p>`
}
function post5(){
          document.getElementById("text5").style.visibility="visible"
          var num5 = document.getElementById("name5").value
          document.getElementById("text5").innerHTML+=`<p>${num5} گفت: ${comment5.value}</p>`  
}