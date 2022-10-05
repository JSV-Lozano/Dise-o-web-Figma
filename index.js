const InfoData1 = document.getElementById("Info1");
const Menu = document.getElementById("Menu");
const ToggleMenu = document.querySelector(".Container-Menu_Toggle");
console.log(ToggleMenu.classList.value);

ToggleMenu.addEventListener("click", toggle);

function toggle() {
  let menuAct = Menu.classList.value;
  if (menuAct === "Toogle-Active") {
    Menu.classList.remove("Toogle-Active");
  } else {
    Menu.classList.add("Toogle-Active");
  }
}

const Data1 = [];

Data1.push(
  {
    num: "+3400",
    text: "Проектов",
    color: "naranja",
  },
  {
    num: "240+",
    text: "Проектов",
    color: "rosa",
  },
  {
    num: "240+",
    text: "Проектов",
    color: "celeste",
  },
  {
    num: "240+",
    text: "Проектов",
    color: "morado",
  },
  {
    num: "240+",
    text: "Проектов",
    color: "verde",
  }
);

function CreateData1(data) {
  for (data of Data1) {
    const ContainerData = document.createElement("div");
    ContainerData.classList.add("Container-Data");
    const VectorData = document.createElement("div");
    VectorData.classList.add("Vector-Img");
    VectorData.classList.add(`${data.color}`);
    const Vector = document.createElement("img");
    Vector.setAttribute("src", "./assents/img/Vector.png");
    Vector.setAttribute("alt", "Vector");
    const DataP = document.createElement("div");
    DataP.classList.add("DataP");
    const NumP = document.createElement("p");
    NumP.innerText = data.num;
    NumP.classList.add("Num-P");
    const TextP = document.createElement("p");
    TextP.innerText = data.text;
    TextP.classList.add("TextP-P");
    VectorData.appendChild(Vector);
    DataP.appendChild(NumP);
    DataP.appendChild(TextP);
    ContainerData.appendChild(VectorData);
    ContainerData.appendChild(DataP);
    InfoData1.appendChild(ContainerData);
  }
}
CreateData1(Data1);
