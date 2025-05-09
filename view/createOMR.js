table.EditChild("row_1.col_1.button.icon").event("click",()=>{
 //open make omr dialog
 ui("#createOmr_1")
})

createOmrDialog=create("dialog").class(["no-round"]).id(["createOmr_1"]).child({
  
  closeNav:create("div")
  .class(["row","right"]) 
  .child({
    closeBtn:create("button")
     .class(["transparent","circle"])
       .child({
         icon:create("i").html("close")
       })
      .event("click",()=>{
      ui("#createOmr_1")
      })//button
       
  }),//nav
  title:create("h6").text("OMR Answer Sheet"),//title
  body:create("div")
   .child({
     QTitle:create("input").class(["qInput"]).id(["qTitle"]).attrs({
       placeholder:"Question Title"
     }).style({
       height:"50px",
       width:"100%",
       outline:"none",
       border:"none",
       fontSize:"18px",
       borderBottom:"2px solid black",
     }),// QTitle
     QDisc:create("input").class(["qInput"]).id(["qDisc"]).attrs({
        placeholder: "Question Discription"
        }).style({
        height: "50px",
          width: "100%",
          outline: "none",
        border: "none",
       fontSize: "18px",
      borderBottom: "2px solid black",
    }),//QDis
    TotalQ:create("input").class(["qInput"]).id(["qTotal"]).attrs({
  placeholder: "Total Question"
}).style({
  height: "50px",
  width: "100%",
  outline: "none",
  border: "none",
  fontSize: "18px",
  borderBottom: "2px solid black",
}),
     OptionType:create("input").class(["qInput"]).id(["qType"]).attrs({
  placeholder: "A,B,C,D seperate with , comma"
}).style({
  height: "50px",
  width: "100%",
  outline: "none",
  border: "none",
  fontSize: "18px",
  borderBottom: "2px solid black",
}),
     
     next:create("button").text("Next").class(["responsive"])
    .style({
      marginTop:"5%"
    })
   })
   .style({
     width:"100%",
     marginTop:"10%",
     padding:"5px",
     
   })//body
  
}).add("#app")







/*
>question title
>discription
>total question 
>option type

[next button]


*/