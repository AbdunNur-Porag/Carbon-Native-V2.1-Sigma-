/*HISTORY*/
settingsPage=create("p").add("#settingsPage")
title_1=create("h2").text("Settings")
button_1=create("button").text("Go Home")
button_1.event("click",()=>{
    goBack()
})
settingsPage.child([title_1,button_1])