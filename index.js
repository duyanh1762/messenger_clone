//-------Dữ liệu--------
let contactArray = [
  {
    id: 1,
    nameContact: "Quân Bùi",
    homeTown: "Hà Nội",
    avtUrl:
      "https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-1/185241785_1123296198165124_1309471503317228030_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rpmA1sAW5OUAX9Qlmks&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan5-2.fna&oh=00_AfDee7gIUIr6dZiT439c6k_SeuRGcTVbw_dqJC8cyQd1EA&oe=6395E16B",
  },
  {
    id: 2,
    nameContact: "Ngọc Bích",
    homeTown: "Hà Nội",
    avtUrl:
      "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/299649563_1590317474703534_990018032270551382_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=u_QcfxSGCaIAX_n7Gps&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan5-11.fna&oh=00_AfDYVcmf199Uf0X316joabNnWI8cff0QV3-a5wZdGfAb5A&oe=6382697A",
  },
  {
    id: 3,
    nameContact: "Phạm Ánh",
    homeTown: "Hải Dương",
    avtUrl:
      "https://scontent.fhan5-9.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yk93IQ_5_XkAX-SwzM2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan5-9.fna&oh=00_AfBaJH-uw-CGqFXKv5HGmZ5tqnWE7yjNAWoysSawYlQ_CQ&oe=63A437B8",
  },
];
let chatArray = [
  {
    id:1,
    id_contact: 1,
    lastMessage: "Alo",
    lastTimeSend: "20h",
    colorTheme: "#0084ff",
    emotionIcon: "<i class='fa-solid fa-thumbs-up'></i>",
    nickname:"",
  },
  {
    id: 2,
    id_contact: 3,
    lastMessage: "Xin chào",
    lastTimeSend: "9h",
    colorTheme: "#0084ff",
    emotionIcon: "<i class='fa-solid fa-thumbs-up'></i>",
    nickname:"Ánh Xa Lộ",
  },
  {
    id: 3,
    id_contact: 2,
    lastMessage: "Hello",
    lastTimeSend: "10h",
    colorTheme: "red",
    emotionIcon: "<i class='fa-solid fa-thumbs-up'></i>",
    nickname:"",
  },
];
//-------Function--------
function showListContact() {
  let newChatArray = chatArray.map(function (object) {
    return {
      id: object.id,
      id_contact: object.id_contact,
      nameContact: "",
      homeTown: "",
      avtUrl: "",
      nickname:object.nickname,
      lastMessage: object.lastMessage,
      lastTimeSend: object.lastTimeSend,
    };
  });
  for (let i = 0; i < newChatArray.length; i++) {
    for (let j = 0; j < contactArray.length; j++) {
      if (newChatArray[i].id_contact === contactArray[j].id) {
        newChatArray[i].nameContact = contactArray[j].nameContact;
        newChatArray[i].homeTown = contactArray[j].homeTown;
        newChatArray[i].avtUrl = contactArray[j].avtUrl;
        if(newChatArray[i].nickname.length===0){
          newChatArray[i].nickname=newChatArray[i].nameContact ;
        }
      }
    }
  }

  let chatArrayHTML = newChatArray.map(function (object) {
    return `        
    <div class="item${object.id}" onClick="getInforContact(${object.id})">
        <div class="avatar">
          <img
            src="${object.avtUrl}"
          />
        </div>
        <div class="infor">
          <div class="name-contact">${object.nickname}</div>
          <div class="chat">
            <div class="mess">${object.lastMessage}</div>
            -
            <div class="time">${object.lastTimeSend}</div>
          </div>
        </div>
      </div>
      `;
  });
  document.querySelector("#list-contact .body").innerHTML =
    chatArrayHTML.join("");
}

function getInforContact(id) {
  let conservation = {};
  let newChatArray = chatArray.map(function (object) {
    return {
      id: object.id,
      id_contact: object.id_contact,
      nameContact: "",
      homeTown: "",
      avtUrl: "",
      nickname:object.nickname,
      lastMessage: object.lastMessage,
      lastTimeSend: object.lastTimeSend,
      colorTheme: object.colorTheme,
      emotionIcon: object.emotionIcon,
    };
  });
  for (let i = 0; i < newChatArray.length; i++) {
    for (let j = 0; j < contactArray.length; j++) {
      if (newChatArray[i].id_contact === contactArray[j].id) {
        newChatArray[i].nameContact = contactArray[j].nameContact;
        newChatArray[i].homeTown = contactArray[j].homeTown;
        newChatArray[i].avtUrl = contactArray[j].avtUrl;
        if(newChatArray[i].nickname.length===0){
          newChatArray[i].nickname=newChatArray[i].nameContact ;
        }
      }
    }
  }
  newChatArray.forEach(function (object) {
    if (id === object.id) {
      conservation = object;
    }
  });
  if (document.querySelector(`#list-contact .body .select`)) {
    document
      .querySelector(`#list-contact .body .select`)
      .classList.remove("select");
  };
  document
    .querySelector(`#list-contact .body .item${id}`)
    .classList.add("select");

  document
    .querySelector("#chat-frame .header-chat img")
    .setAttribute("src", conservation.avtUrl);
  document.querySelector("#chat-frame .header-chat .name-user").innerText =
    conservation.nickname;

  document
    .querySelector(".chat-box .infor .avatar-contact img")
    .setAttribute("src", conservation.avtUrl);
  document.querySelector(".chat-box .infor .name").innerText =
    conservation.nameContact;
  document.querySelector(
    ".chat-box .infor .hometown"
  ).innerText = `Sống tại ${conservation.homeTown}`;

  document.querySelector(
    "#chat-frame .chat-box .chat-message"
  ).innerHTML = `          <div class="guest-mess">
  <div class="avt-guest">
    <img
      src="${conservation.avtUrl}"
    />
  </div>
  <div class="content-mess">${conservation.lastMessage}</div>
</div>`;

  document.querySelector("#setting-converstation .image img").setAttribute("src",conservation.avtUrl);
  document.querySelector("#setting-converstation .name-contact").innerText=conservation.nameContact;
  
  document.querySelector(".friend-nickname .avt-friend img").setAttribute("src",conservation.avtUrl);
  document.querySelector(".friend-nickname .name-friend").innerText=conservation.nickname

  setEmotionIcon(conservation.emotionIcon);
  setColorChat(conservation.colorTheme);
}

function setEventInputMess() {
  let inputMess = document.querySelector("#chat-frame .input-mess input");
  inputMess.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let inputMess = document.querySelector("#chat-frame .input-mess input");
      if (inputMess.value === "") {
        return 0;
      } else {
        // `<div class="my-mess"><div class="content-mess">${myMess}</div></div>`;
        let newDiv_1 = document.createElement("div");
        document
          .querySelector("#chat-frame .chat-box .chat-message")
          .appendChild(newDiv_1);
        document
          .querySelector("#chat-frame .chat-box .chat-message>div:last-child")
          .setAttribute("class", "my-mess");
        document.querySelector("#chat-frame .chat-box .chat-message .my-mess:last-child").innerHTML=`<div class="content-mess">${inputMess.value}</div>`;
        document.querySelector("#chat-frame .chat-box .chat-message .my-mess:last-child .content-mess").style.backgroundColor=document.querySelector(".noti-i i").style.color;

        document.querySelector("#list-contact .body .select .mess").innerText =
          inputMess.value;
        inputMess.value = "";
      }
    }
  });
}
function likeButton() {
  let newDiv_1 = document.createElement("div");
  document
    .querySelector("#chat-frame .chat-box .chat-message")
    .appendChild(newDiv_1);
  document
    .querySelector("#chat-frame .chat-box .chat-message>div:last-child")
    .setAttribute("class", "my-mess");
  document.querySelector("#chat-frame .chat-box .chat-message .my-mess:last-child").innerHTML=`<div class="like-mess">${document.querySelector(".like-btn").innerHTML}</div>`;
  document.querySelector("#chat-frame .chat-box .chat-message .my-mess:last-child .like-mess").style.color=document.querySelector(".noti-i i").style.color;
  document.querySelector(
    "#list-contact .body .select .mess"
  ).innerHTML = document.querySelector(".like-btn").innerHTML;
}
function searchContact() {
  let inputSearchValue = document.querySelector(
    "#list-contact .header .search input"
  ).value;
  if (inputSearchValue.length===0) {
    showListContact();
  } else {
    let results = contactArray.filter(function (contact) {
      return (
        contact.nameContact
          .toLowerCase()
          .indexOf(inputSearchValue.toLowerCase()) != -1
      );
    });
    let resultsChat = results.map(function (result) {
      return {
        id: result.id,
        id_chat: "",
        nameContact: result.nameContact,
        homeTown: result.homeTown,
        avtUrl: result.avtUrl,
      };
    });
    resultsChat.forEach(function (result) {
      chatArray.forEach(function (chat) {
        if (result.id === chat.id_contact) {
          result.id_chat = chat.id;
        }
      });
    });
    let resultsChatToHTML = resultsChat.map(function (result) {
      return `        
      <div class="item${result.id_chat}" onClick="getInforContact(${result.id_chat})">
          <div class="avatar">
            <img
              src="${result.avtUrl}"
            />
          </div>
          <div class="infor">
            <div class="name-contact">${result.nameContact}</div>
            <div class="chat">
              <div class="mess"></div>
              <div class="time"></div>
            </div>
          </div>
        </div>
        `;
    });
    document.querySelector("#list-contact .body").innerHTML =
      resultsChatToHTML.join("");
  }
}
function showSetting() {
  if (settingOn === false) {
    document.querySelector("#chat-frame").style.width = "50vw";
    document.getElementById("setting-converstation").style.display = "block";
    document.querySelector(".noti-i").classList.add("choose");
    settingOn = true;
  } else {
    document.querySelector("#chat-frame").style.width = "75vw";
    document.getElementById("setting-converstation").style.display = "none";
    document.querySelector(".noti-i").classList.remove("choose");
    settingOn = false;
  }
}
function showSettingCustom(className){
  let customTempalte=document.querySelector(`.${className}`);
  if(customTempalte.style.display==="none"){
    customTempalte.style.display="block";
  }else{
    customTempalte.style.display="none";
  }
}
function showDetailCustom(className){
  let whiteBackground=document.querySelector(".white-background");
  let template=document.querySelector(`.${className}`);
    if(template.style.display==="none" && whiteBackground.style.display==="none"){
      whiteBackground.style.display="block";
      template.style.display="block";
    }
}
function turnOffDetailCustom(className){
  let whiteBackground=document.querySelector(".white-background");
  let template=document.querySelector(`.${className}`);
  if(template.style.display==="block" && whiteBackground.style.display==="block"){
    whiteBackground.style.display="none";
    template.style.display="none";
  }
}
function setColorChat(color){
  let listIcons=document.querySelectorAll("#chat-frame i");
  listIcons.forEach(function(icon){
    icon.style.color=color;
  });
  let listMess=document.querySelectorAll(".my-mess .content-mess");
  listMess.forEach(function(mess){
    mess.style.backgroundColor=color;
  })
  let itemSelected=document.querySelector(".select");
  let idChatSelected=Number(itemSelected.getAttribute("class")[4]);
  chatArray.forEach((chat)=>{
    if(chat.id===idChatSelected){
      chat.colorTheme=color;
    }
  });

}
function setEmotionIcon(iconClass){
  let likeBtn=document.querySelector(".like-btn");
  likeBtn.innerHTML=iconClass;
  document.querySelector(".like-btn i").style.color=document.querySelector(".noti-i i").style.color;
  let itemSelected=document.querySelector(".select");
  let idChatSelected=Number(itemSelected.getAttribute("class")[4]);
  chatArray.forEach((chat)=>{
    if(chat.id===idChatSelected){
      chat.emotionIcon=iconClass;
    }
  });
}
function setNickname(){
  let nameUser=document.querySelector(".chat-box .name").innerText;
  document.querySelector(".friend-nickname .name-friend").innerHTML=`<input type="text" class="set-nickname" placeholder="${nameUser}">`;
  document.querySelector(".friend-nickname").style.backgroundColor="#e3e5ea";
  document.querySelector(".icon-change").innerHTML=`<i class="fa-solid fa-check" onclick="changeNickname()"></i>`;

}
function changeNickname(){
  let inputValue=document.querySelector(".set-nickname").value;
  if(inputValue.length===0){
    inputValue=document.querySelector(".chat-box .name").innerText;
  }
  document.querySelector("#chat-frame .header-chat .name-user").innerText=inputValue;
  document.querySelector("#list-contact .select .name-contact").innerText=inputValue;
  document.querySelector(".friend-nickname .name-friend").innerHTML=inputValue;
  document.querySelector(".friend-nickname").style.backgroundColor="white";
  document.querySelector(".icon-change").innerHTML=`<i class="fa-solid fa-pen" onclick="setNickname()"></i>`;
  let itemSelected=document.querySelector(".select");
  let idChatSelected=Number(itemSelected.getAttribute("class")[4]);
  chatArray.forEach((chat)=>{
    if(chat.id===idChatSelected){
      chat.nickname=inputValue;
    }
  });
}
//-------Test Function---------
let settingOn = false;
showListContact();
setEventInputMess();
getInforContact(1);
let getUser = fetch("http://localhost:3000/users",{
  headers:{
    "Content-Type":"application/x-www-form-urlencoded"
  },
})
getUser.then((data)=>{
  return data.json();
})
.then((data)=>{
  console.log(data);
});
