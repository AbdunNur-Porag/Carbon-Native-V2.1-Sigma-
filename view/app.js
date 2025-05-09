/*
let createOmrDialog, appBar, makeSheetDialog;
let answerDB = [], getOption = [], Qtitle, QDisc, QTotal, QType;

const appBody = create("div").add("#app").style({
  width: "100%",
  height: "100vh",
  maxWidth: "400px",
  maxHeight: "700px",
  position: "fixed",
  top: 0,
  bottom: 0,
  backgroundColor: "#BEE2C2",
  boxShadow: "0px 1px 100px 0px black"
});

const backUi = create("div").style({
  width: "100%",
  height: "300px",
  position: "absolute",
  backgroundColor: "#41AF4C",
  borderBottomLeftRadius: "30px",
  borderBottomRightRadius: "30px"
});

appBar = create("header").style({ width: "100%" }).class(["transparent"]).child({
  body: create("nav").class(["transparent"]).child({
    left: create("h6").class(["bold"]).text("OMR Solver").style({ color: "white" }),
    center: create("div").class(["max"]),
    right: create("button").class(["transparent", "circle"]).child([
      create("i").html("person")
    ])
  })
});

backUi.child([appBar]);

const main = create("div").style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const mainContainer = create("div").style({
  width: "88%",
  height: "350px",
  backgroundColor: "#ffffff",
  borderRadius: "10px"
});

const table = create("table").attrs({ border: "0" }).style({
  border: "none",
  borderColor: "#BEE2C2",
  height: "200px"
}).child({
  row_1: create("tr").child({
    col_1: create("td").child({
      button: create("button").class([]).child({
        icon: create("img")
      })
    }),
    col_2: create("td").child({
      button: create("button").child({
        icon: create("img")
      })
    })
  }),
  row_2: create("tr").child({
    col_1: create("td").child({
      button: create("button").child({
        icon: create("img")
      })
    }),
    col_2: create("td").child({
      button: create("button").child({
        icon: create("img")
      })
    })
  })
});

const buttonDetails = [
  { path: "row_1.col_1", text: "তৈরি করুন", icon: "/svg/build-codeblocks-engineering-svgrepo-com.svg" },
  { path: "row_1.col_2", text: "পরিক্ষা সমূহ", icon: "/svg/exam-test-checklist-online-learning-education-online-document-svgrepo-com.svg" },
  { path: "row_2.col_1", text: "ইতিহাস", icon: "/svg/history-svgrepo-com.svg" },
  { path: "row_2.col_2", text: "সেটিংস", icon: "/svg/settings-preferences-configuration-setting-svgrepo-com.svg" }
];

buttonDetails.forEach(btn => {
  const icon = table.EditChild(`${btn.path}.button.icon`);
  const button = table.EditChild(`${btn.path}.button`);
  const td = table.EditChild(`${btn.path}`);

  if (td) td.class(["responsive"]);
  if (button) {
    button.class(["vertical", "transparent", "ripple", "no-round"]);
    button.child({ text: create("span").class(["bold"]).text(btn.text) });
  }
  if (icon) icon.class(["responsive"]).attrs({ src: btn.icon });
});

table.EditChild("row_2.col_2.button")?.event("click", () => {
  ui("#me");
  alert("Work");
});

table.EditChild("row_1.col_1.button.icon")?.event("click", () => {
  ui("#createOmr_1");
});

mainContainer.child([table]);
main.child([mainContainer]);
appBody.child([backUi, main]);

createOmrDialog = create("dialog").class(["no-round"]).id("createOmr_1").child({
  closeNav: create("div").class(["row", "right"]).child({
    closeBtn: create("button").class(["transparent", "circle"]).child({
      icon: create("i").html("close")
    }).event("click", () => ui("#createOmr_1"))
  }),
  title: create("h6").text("OMR Answer Sheet"),
  body: create("div").child({
    QTitle: create("input").class(["qInput"]).id("qTitle").attrs({
      placeholder: "Question Title",
      value: "Test Title"
    }).style(sharedInputStyle()),
    QDisc: create("input").class(["qInput"]).id("qDisc").attrs({
      placeholder: "Question Description",
      value: "test Disc"
    }).style(sharedInputStyle()),
    TotalQ: create("input").class(["qInput"]).id("qTotal").attrs({
      placeholder: "Total Question",
      value: "5"
    }).style(sharedInputStyle()),
    OptionType: create("input").class(["qInput"]).id("qType").attrs({
      placeholder: "A,B,C,D separate with , comma",
      value: "A,B,C,D"
    }).style(sharedInputStyle()),
    next: create("button").text("Next").class(["responsive"]).style({ marginTop: "5%" })
  }).style({ width: "100%", marginTop: "10%", padding: "5px" })
}).add("#app");

function sharedInputStyle() {
  return {
    height: "50px",
    width: "100%",
    outline: "none",
    border: "none",
    fontSize: "18px",
    borderBottom: "2px solid black"
  };
}

const snackBar = create("div").id("inputValid").class(["snackbar"]).text("সব ঘর পূরণ করতে হবে").add("#app");

makeSheetDialog = create("dialog").id("makeSheetDialog").child({
  title: create("h6").text("Make Sheet")
}).add("#app");

createOmrDialog.EditChild("body.next")?.event("click", () => {
  Qtitle = document.getElementById("qTitle").value.trim();
  QDisc = document.getElementById("qDisc").value.trim();
  QTotal = document.getElementById("qTotal").value.trim();
  QType = document.getElementById("qType").value.trim();

  console.log(Qtitle, QDisc, QTotal, QType);

  if (!Qtitle || !QDisc || !QTotal || !QType) {
    ui("#inputValid");
  } else {
    ui("#createOmr_1");
    ui("#makeSheetDialog");
    answerDB = [];
    getOption = QType.split(",");
  }
});
*/
const el = create("div")
  .id(["myBox"])
  .class(["rounded", "shadow"])
  .attrs({ "data-user": "admin", type: "button" })
  .style({ background: "blue", color: "white" })
  .html("<b>Hello</b>")
  .add("#app");

console.log(el.getAttrsValue("type"));         // "button"
console.log(el.CheckExist("id", "myBox"));     // true
console.log(el.CheckExist("class", "shadow")); // true
console.log(el.CheckExist("attr", "data-user")); // true
