const parser = new DOMParser();
const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
//console.log(xmlString)

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
//console.log(xmlDOM)

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list")
const langAtr1Node = xmlDOM.getElementsByTagName("name")[0].attributes[0].nodeValue
const langAtr2Node = xmlDOM.getElementsByTagName("name")[1].attributes[0].nodeValue

const first1Node = xmlDOM.getElementsByTagName("first")[0].childNodes[0].data
const second1Node = xmlDOM.getElementsByTagName("second")[0].childNodes[0].data
const age1Node = xmlDOM.getElementsByTagName("age")[0].childNodes[0].data
const prof1Node = xmlDOM.getElementsByTagName("prof")[0].childNodes[0].data

const first2Node = xmlDOM.getElementsByTagName("first")[1].childNodes[0].data
const second2Node = xmlDOM.getElementsByTagName("second")[1].childNodes[0].data
const age2Node = xmlDOM.getElementsByTagName("age")[1].childNodes[0].data
const prof2Node = xmlDOM.getElementsByTagName("prof")[1].childNodes[0].data


//Запись данных в результирующий объект
const student1 = {
  lang: langAtr1Node,
  name: `${first1Node} ${second1Node}`,
  age: Number(age1Node),
  prof: prof1Node,
};
const student2 ={
  lang: langAtr2Node,
  name: `${first2Node} ${second2Node}`,
  age: Number(age2Node),
  prof: prof2Node,
};
const resultObj = {
  list: [student1, student2]
}
console.log(resultObj);